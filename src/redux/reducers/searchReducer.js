import { initialAppState } from "../../App";

const searchReducer = (state=initialAppState, action) => {
  switch (action.type){
    case 'SEARCHING':
      return{
        ...state,
        searchValue: document.getElementById("main-search").value,
        showPlaylist:false,
      }
  
    default:
      return state;
  }
}

export default searchReducer;