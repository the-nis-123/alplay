import { initialAppState } from "../../App";
// let initialAuthenticationState = {
//   isRegistered:false,
//   isLoggedIn:false
// }

const authenticationReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'NEW_AND_SIGNING_UP':
      return {
        ...state,
        isRegistered:true
      }
    
      case 'NEW_AND_SIGNING_UP_LINK':
        return {
          ...state,
          isLoggedIn:false,
          isRegistered:false,
        }

    case 'JUST_LOG_ME_IN':
      return{
        ...state,
        isLoggedIn:true
      }
    default:
      return state;
  }
}

export default authenticationReducer;