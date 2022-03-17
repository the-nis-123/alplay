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
        showAnAlbum:false,
        showAplaylist:true,
      }

    case 'CLOZE_MODAL':
       return {
        ...state,
        showAplaylist:false,
        searchValue:false,
        showAnAlbum:false,
      }
    default:
      return state;
  }
}

export default playlistReducer;