import { initialAppState } from "../../App";

const playlistReducer = (state=initialAppState, action) => {
  switch (action.type){

    case 'SHOW_SONGS_IN_CLICKED_ALBUM':
      return {
        ...state,
        tracklistToShow:action.payload,
        showAplaylist:false,
        showAnAlbum:true,
      }

    case 'SHOW_SONGS_IN_CLICKED_PLAYLIST':
      return {
        ...state,
        playlistToShow:action.payload,
        showAplaylist:true,
        showAnAlbum:false,
      }
    
    case 'LOAD_AND_PLAY_A_PLAYLIST':
      return {
        ...state,
        loadedPlaylistId:action.payload,
        isPlaying:true,
        isAplaylist:true,
        isAnAlbum:false,
      }

    case 'LOAD_AND_PLAY_AN_ALBUM':
      return {
        ...state,
        loadedPlaylistId:action.payload,
        isPlaying:true,
        isAplaylist:false,
        isAnAlbum:true,
      }
    case 'CLOZE_MODAL':
       return {
        ...state,
        showAPlaylist:false,
        searchValue:"",
        showAnAlbum:false,
      }
    default:
      return state;
  }
}

export default playlistReducer;