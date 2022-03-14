/**@jsxImportSource @emotion/react */
import {IoMdNotifications} from "react-icons/io";
import {RiMessage2Fill} from "react-icons/ri";
import dp from "../../../media/pic/me.jpg"
import { css } from "@emotion/css";
import facepaint from "facepaint";


const RightHeader = () => {

  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  const wrapperStyles = css(bp({
    height:'60px',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    padding:'0 10px'
  }));


  //const dispatch = useDispatch();


  // const handleChatIconEvent = (e) => {
  //   e.stopPropagation();
  //   dispatch(allModalActions.showChatComponent());
  // }

  // const handleNotificationIconEvent = (e) => {
  //   e.stopPropagation();
  //   dispatch(allModalActions.showNotificationComponent());
  // }


  // const handleProfileIconEvent = (e) => {
  //   e.stopPropagation();
  //   dispatch(allModalActions.showProfileComponent());
  // }


  
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


  return (
    < div className={wrapperStyles}>
     <RiMessage2Fill css={IconStyles} />
     <IoMdNotifications css={IconStyles} />
     <img src={dp} alt="" css={dpStyles} />
    </div>
  )
}

export default RightHeader;
