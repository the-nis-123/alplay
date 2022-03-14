
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
  
  let stateIndex = state.songIndex;
  let stateArr = state.playingPlaylist;

  switch (action.type) {
     case 'PLAY_SONG':
      loadSong(action.payload.playlist, action.payload.songIndex);
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
    
    case 'LOAD_AND_PLAY_THIS_PLAYLIST':
      audioTrack.pause();
      loadSong(action.payload, 0);
      audioTrack.play();
      return{
        ...state,
        playlistIDfromUser:action.payload,
        isAnAlbum:false,
        isAplaylist:true,
        isPlaying:true
      }

    case 'LOAD_AND_PLAY_THIS_ALBUM':
      audioTrack.pause();
      loadSong(action.payload, 0);
      audioTrack.play();
      return{
        ...state,
        playlistIDfromUser:action.payload,
        isAnAlbum:true,
        isAplaylist:false,
        isPlaying:true
      }
    
    default:
      return state;
  }

}

export default playerReducer;