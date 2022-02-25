/**@jsxImportSource @emotion/react */
import Chat from "./chat/Chat";
import Profile from "./profile/Profile";
import Notifications from "./notifications/Notifications";
import Playlist from "./playlist/Playlist";
import Newsfeed from "./news feed/Newsfeed";
import { useSelector } from "react-redux";
import { css } from "@emotion/css";
import facepaint from "facepaint";


const RightSidebar = () => {


  const bp = facepaint([
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  const wrapperStyles = css(bp({
    width: ['', '', '25%'],
    height:'100%',
    display:['none', 'flex'],
    flexDirection:'column',
    justifyContent:['', 'flex-start'],
    alignItems:['', 'center'],
    background: "linear-gradient(to bottom, rgba(0, 51, 0,0.5), rgba(0, 0, 0,0.5) 70%)",
  }));

  const {
    homeComponentIsLoaded,
    playlistComponentIsLoaded,
    chatComponentIsLoaded,
    notificationComponentIsLoaded,
    profileComponentIsLoaded } = useSelector(state=>state.loadComponentReducer);

  return (
    <div className={wrapperStyles}
    >
      { homeComponentIsLoaded && <Newsfeed/> }
      { notificationComponentIsLoaded && <Notifications/> }
      { playlistComponentIsLoaded && <Playlist/> }
      { profileComponentIsLoaded && <Profile/> }
      { chatComponentIsLoaded &&<Chat/> }
    </div>
  )
}

export default RightSidebar;
