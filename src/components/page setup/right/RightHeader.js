/**@jsxImportSource @emotion/react */
import {IoHome} from "react-icons/io5";
import { RiNewspaperFill } from "react-icons/ri";
import { RiCalendarEventFill } from "react-icons/ri";
import {IoMdNotifications} from "react-icons/io";
import {RiMessage2Fill, RiPlayListFill} from "react-icons/ri";
import dp from "../../../media/pic/me.jpg"
import { useDispatch } from "react-redux";
import * as allModalActions from "../../../redux/actions/loadComponentActions.js";
import { css } from "@emotion/css";
import facepaint from "facepaint";


const RightHeader = () => {

  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  const wrapperStyles = css(bp({
    width: ['80%', '60%', '25%'],
    height:'60px',
    display:['flex', 'flex', 'flex'],
    justifyContent:'flex-end',
    alignItems:'center',
    padding:'0 10px'
  }));


  const dispatch = useDispatch();

  const handleHomeIconEvent = (e) => {
    e.stopPropagation();
    dispatch(allModalActions.showHomeComponent());
  }


  const handlePlaylistIconEvent = (e) => {
    e.stopPropagation();
    dispatch(allModalActions.showPlaylistComponent())
  }


  const handleChatIconEvent = (e) => {
    e.stopPropagation();
    dispatch(allModalActions.showChatComponent());
  }

  const handleNotificationIconEvent = (e) => {
    e.stopPropagation();
    dispatch(allModalActions.showNotificationComponent());
  }


  const handleProfileIconEvent = (e) => {
    e.stopPropagation();
    dispatch(allModalActions.showProfileComponent());
  }


  const handleEventIcon = (e) => {
    e.stopPropagation();
    dispatch(allModalActions.showEventsComponent());
  }

  const handleNewsfeedIcon = (e) => {
    e.stopPropagation();
    dispatch(allModalActions.showNewsfeedComponent());
  }
  
  const dpStyles = {
    borderRadius:'50%',
    height:'35px',
    width:'35px',
    marginLeft:'10px',
    "&:hover":{
       cursor:'pointer'
     }
  }
  
   const IconStyles = {
    height:'20px',
    width:'20px',
    color:"#D1B894",
    margin:'0 5px',
    cursor:'pointer'
  }

  const eventIconStyles = css(bp({
    display:['block', 'none', 'none'],
    height:'20px',
    width:'20px',
    color:"#D1B894",
    margin:'0 5px',
    cursor:'pointer'
  }));

  const homeIconStyles = css(bp({
    display:['block', 'block', 'none'],
    height:'20px',
    width:'20px',
    color:"#D1B894",
    margin:'0 5px',
    cursor:'pointer'
  }));

  return (
    < div className={wrapperStyles}>
      <IoHome className={homeIconStyles} onClick={handleHomeIconEvent}/>
      <RiCalendarEventFill className={eventIconStyles} onClick={handleEventIcon}/>
      <RiNewspaperFill css={IconStyles} onClick={handleNewsfeedIcon}/>
      <RiPlayListFill css={IconStyles} onClick={handlePlaylistIconEvent}/>
      <RiMessage2Fill css={IconStyles} onClick={handleChatIconEvent}/>
      <IoMdNotifications css={IconStyles} onClick={handleNotificationIconEvent}/>
     <img src={dp} alt="" css={dpStyles} onClick={handleProfileIconEvent}/>
    </div>
  )
}

export default RightHeader;
