import { initialAppState } from "../../App";

const playlistReducer = (state=initialAppState, action) => {
  switch (action.type){

    case 'SHOW_CLICKED_SONGS_COLLECTION':
      return {
        ...state,
        playlistToShow:action.payload,
        songsCollection:true,
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
        showPlaylist:false,
        searchValue:"",
        songsCollection:false,
      }
    default:
      return state;
  }
}

export default playlistReducer;