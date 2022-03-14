import { initialAppState } from "../../App";

let audioTrack, volumeBar, seekBar;
audioTrack = document.createElement('audio');
//load track
const loadSong = () => {
  audioTrack.src="https://cdns-preview-8.dzcdn.net/stream/c-8b175d5fccd6b1c54973c9307f572010-3.mp3";
  audioTrack.load();
}



//change volume
volumeBar = document.getElementById('volumeSlider');
const setVolume  = () => {
  audioTrack.volume = volumeBar.value / 100;
}


//seek in song
seekBar = document.getElementById('songSlider');
const seek  = () => {
  let seekto = (seekBar.value/100) * audioTrack.duration;
  audioTrack.currentTime = seekto;
}

//play next song
const playNext = (state, index) => {
  if(index < state.chosenPlaylist.length - 1){
    loadSong(index + 1);
    audioTrack.play();
    return index + 1;
  }else{
    index = 0;
    loadSong(index);
    audioTrack.play();
    return index;
  }
}

//play previous song
const playPrevious = (state, index) => {
  if(index > 0 && index < state.chosenPlaylist.length){
    loadSong(index - 1);
    audioTrack.play();
    return index - 1;
  }else{
    loadSong(state.chosenPlaylist.length - 1);
    audioTrack.play();
    return state.chosenPlaylist.length - 1;
  }
}

const audioPlayerReducer = (state=initialAppState, action) => {
  let stateIndex = state.songIndex;
  
  switch (action.type){
    case 'PLAY_SONG':
      loadSong();
      audioTrack.play();
      return{
        ...state,
        isPlaying:true
      }
    case 'PAUSE_SONG':
      audioTrack.pause();
      return{
        ...state,
        isPlaying:false
      }
    case 'PLAY_NEXT_SONG':
      playNext(state, stateIndex);
    return{
      ...state,
      songIndex:playNext(state, stateIndex),
      isPlaying:true
    }
    case 'PLAY_PREVIOUS_SONG':
      playPrevious(state, stateIndex);
      return{
        ...state,
        songIndex:playPrevious(state, stateIndex),
        isPlaying:true
      }
    case 'SHOW_CURRENT_PLAYLIST':
      return {
        ...state,
        showPlaylist:true,
      }
    case 'HIDE_CURRENT_PLAYLIST':
      return{
        ...state,
        showPlaylist:false
      }
    case 'REPEAT_CURRENT_SONG':
      audioTrack.loop = true;
      return{
        ...state,
        repeatOneSong:true,
        repeatAllSongs:false,
        repeatOff:false,
      } 
    case 'REPEAT_CURRENT_PLAYLIST':
      audioTrack.loop = false;
      audioTrack.addEventListener('ended', 
      (stateIndex) => {
        if(state.isPlaying){
          playNext(state, stateIndex);
          return{
            repeatOneSong:false,
            repeatAllSongs:true,
            repeatOff:false,
            songIndex:playNext(state, stateIndex)
          }
        }
      });
      return{
        ...state
      } 
    case 'PUT_REPEAT_OFF':
      audioTrack.loop = false;
      return{
        ...state,
        repeatOneSong:false,
        repeatAllSongs:false,
        repeatOff:true,
      }
    case 'MUTE_SONG':
      audioTrack.muted = true;
      return{
        ...state,
        volumeOn:false
      }
    case 'UNMUTE_SONG':
      audioTrack.muted = false;
      return{
        ...state,
        volumeOn:true
      }
    case 'CHANGE_CURRENT_SONG_VOLUME':
      setVolume();
      return{
        ...state,
      }
    case 'SONG_SLIDER_DOWN':
      return{
        ...state,
        isSeeking:true
      }
    case 'CHANGE_CURRENT_SONG_POSITION':
      seek();
      return{
        ...state
      }
    case 'SONG_SLIDER_UP':
      return{
        ...state,
        isSeeking:false
      }
    default:
      audioTrack.addEventListener('ended', 
      (stateIndex) => {
        if(state.isPlaying){
          playNext(state, stateIndex);
          return{
            ...state,
            songIndex:playNext(state, stateIndex),
            isPlaying:true
          }
        }
      });

      return {
        ...state
    }
  }
}

export default audioPlayerReducer;