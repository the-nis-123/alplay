
import {initialAppState} from "../../App";

//loading a song or playlist

let audioTrack;
audioTrack = document.createElement('audio');
//load track
const loadSong = (songslist, songindex) => {
  if(songslist.length > 0){
    audioTrack.src=`${songslist[songindex].preview}`;
    audioTrack.load();
    return [
      songslist[songindex].title, 
      songslist[songindex].artist
    ];
  } 
}

const playerReducer = (state = initialAppState,action) => {

  switch (action.type) {
     case 'PLAY_SONG':
        loadSong(action.payload.playlist, action.payload.songIndex);
        audioTrack.play();
      return{
        ...state,
        isPlaying:true
      }

    case 'PAUSE_MUSIC':
      audioTrack.pause();
      return{
        ...state,
        isPlaying:false
      }
    
    case 'LOAD_AND_PLAY_A_PLAYLIST':
      return {
        ...state,
        playlistIDfromUser:action.payload,
        isPlaying:true,
        isAplaylist:true,
        isAnAlbum:false,
      }

    case 'LOAD_AND_PLAY_AN_ALBUM':
      return {
        ...state,
        playlistIDfromUser:action.payload,
        isPlaying:true,
        isAplaylist:false,
        isAnAlbum:true,
      }
      
    case 'PLAY_NEXT_SONG':
      audioTrack.pause();
      loadSong(action.payload.playlist, action.payload.songindex);
      audioTrack.play();
      return{
        ...state,
        isPlaying:true
      }

    case 'PLAY_PREVIOUS_SONG':
      audioTrack.pause();
      loadSong(action.payload.playlist, action.payload.songindex);
      audioTrack.play();
      return{
        ...state,
        isPlaying:true
      }
    
    case 'MUTE_SONG':
    audioTrack.mute();
    return{
      ...state,
      volumeOn:false
    }

    case 'UNMUTE_SONG':
    audioTrack.unmute();
    return{
      ...state,
      volumeOn:true
    }
    
    default:
      return state;
  }

}

export default playerReducer;