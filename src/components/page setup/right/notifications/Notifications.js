/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import NotificationList from "./NotificationList";

const Notifications = ({converSationIsOPen = false}) => {
  
  return (
    <Wrapper width="100%" height ="100%" padding="0 10px 10px 0" 
     display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start"
    >
     {converSationIsOPen? <NotificationList/> : <NotificationList/>}
    </Wrapper>
  )
}

export default Notifications;
