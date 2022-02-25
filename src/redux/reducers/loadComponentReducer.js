import { initialAppState } from "../../App";



const loadComponentReducer = (state=initialAppState, action) => {
  switch (action.type) {
    case'SHOW_CHAT_COMPONENT':
      return {
        ...state,
        homeComponentIsLoaded :false,
        chatComponentIsLoaded: true,
        notificationComponentIsLoaded :false,
        profileComponentIsLoaded: false,
        playlistComponentIsLoaded:false
      };

    case'SHOW_HOME_COMPONENT':
      return {
        ...state,
        homeComponentIsLoaded :true,
        chatComponentIsLoaded: false,
        notificationComponentIsLoaded :false,
        profileComponentIsLoaded: false,
        playlistComponentIsLoaded:false
      };

    case'SHOW_NOTIFICATION_COMPONENT':
      return {
         ...state,
        homeComponentIsLoaded :false,
        chatComponentIsLoaded: false,
        notificationComponentIsLoaded :true,
        profileComponentIsLoaded: false,
        playlistComponentIsLoaded:false
      };

    case'SHOW_PLAYLIST_COMPONENT':
      return {
         ...state,
        homeComponentIsLoaded :false,
        chatComponentIsLoaded: false,
        notificationComponentIsLoaded :false,
        profileComponentIsLoaded: false,
        playlistComponentIsLoaded:true
      };

    case'SHOW_PROFILE_COMPONENT':
      return {
         ...state,
        homeComponentIsLoaded :false,
        chatComponentIsLoaded: false,
        notificationComponentIsLoaded :false,
        profileComponentIsLoaded: true,
        playlistComponentIsLoaded:false
      };

    case 'SHOW_EVENTS_COMPONENT':
      return{
        ...state,
        leftsideBar:true,
        rightsideBar:false,
        centerComponent:false
      }

    default:
      return state;
  }
}
export default loadComponentReducer;