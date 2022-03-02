import { initialAppState } from "../../App";

const playlistReducer = (state=initialAppState, action) => {
  switch (action.type){

    case 'SHOW_CLICKED_SONGS_COLLECTION':
      console.log(action.payload)
      return {
        ...state,
        playlistToShow:action.payload,
        songsCollection:true,
      }
  
    default:
      return state;
  }
}

export default playlistReducer;