
import {initialAppState} from "../../App";

//loading a song or playlist

let audioTrack;
audioTrack = document.createElement('audio');


const playerReducer = (state = initialAppState,action) => {
  let trackIndex = state.songIndex;
  const songs = Object.keys(state.playingPlaylist).length!==0 ? state.playingPlaylist.tracks.data:"";
  
  
  switch (action.type) {
     case 'PLAY_SONG':
      audioTrack.src=songs[trackIndex].preview;
      audioTrack.load();
      audioTrack.play();
      return{
        ...state,
        isPlaying:true,
        songTitle:songs[trackIndex].title,
        songDuration:action.songs[trackIndex].duration,
        artistName:action.songs[trackIndex].artist['name'], 
      }

    case 'PAUSE_MUSIC':
      audioTrack.pause();
      return{
        ...state,
        isPlaying:false
      }
    
    case 'LOAD_AND_PLAY_THIS_PLAYLIST':
      audioTrack.src=`${action.payload.playlist.tracks.data[0].preview}`;
      audioTrack.load();
      audioTrack.play();
      audioTrack.play();
      return {
        ...state,
        isPlaying:true,
        playingPlaylist:action.payload.playlist,
        isAplaylist:true,
        isAnAlbum:false,
        songIndex:0,
        songTitle:action.payload.pla.tracks.data[0].title,
        songDuration:action.payload.pla.tracks.data[0].duration,
        artistName:action.payload.pla.tracks.data[0].artist['name'], 
      }

    case 'LOAD_AND_PLAY_THIS_ALBUM':
      audioTrack.src=`${action.payload.playlist.tracks.data[0].preview}`;
      audioTrack.load();
      audioTrack.play();
      audioTrack.play();
      return {
        ...state,
        playingPlaylist:action.payload.playlist,
        isPlaying:true,
        isAplaylist:false,
        isAnAlbum:true,
        songTitle:action.payload.pla.tracks.data[0].title,
        songDuration:action.payload.pla.tracks.data[0].duration,
        artistName:action.payload.pla.tracks.data[0].artist['name'], 
        songIndex:0
      }
      
    case 'PLAY_NEXT_SONG':
     if(trackIndex<songs.length-1){
        audioTrack.src=`${songs[state.songIndex+1].preview}`
        audioTrack.load()
        audioTrack.play()
          return{
          ...state,
          isPlaying:true,
          songIndex:state.songIndex+1
        }
      }else{
        audioTrack.src=`${songs[0].preview}`;
        audioTrack.load();
        audioTrack.play();
          return{
          ...state,
          isPlaying:true,
          songIndex:0
        }
      }
      

    case 'PLAY_PREVIOUS_SONG':
      if(trackIndex > 0){
        audioTrack.src=`${songs[state.songIndex-1].preview}`
        audioTrack.load()
        audioTrack.play()
        return{
          ...state,
          isPlaying:true,
          songIndex:state.songIndex-1
        }
        }else{
          audioTrack.src=`${songs[songs.length-1].preview}`;
          audioTrack.load();
          audioTrack.play();
          return{
          ...state,
          isPlaying:true,
          songIndex:songs.length-1
        }
      }
    
    case 'LOAD_AND_PLAY_THIS_TRACK':
      console.log(action.payload);
      return{
        ...state
      }
    
    case 'SHOW_ACTIVE_SONG':
    return {
      ...state,
      showAplaylist:false,
      showAnAlbum:false,
      homeMenu:false,
      showActiveSong:true
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

    case 'CLOSE_MAX_PLAYER':
    return{
      ...state,
      showAplaylist:false,
      showAnAlbum:false,
      showActiveSong:false,
      homeMenu:true,
    }
    
    default:
      return state;
  }

}

export default playerReducer;