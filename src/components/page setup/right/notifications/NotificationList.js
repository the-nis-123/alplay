/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import NotificationToUser from "./NotificationToUser";

const NotificationList = () => {
  const headingStyles={
    width: '100%',
    height: '30px',
    padding: '10px'
  }
  
  return (
    <> 
      <h3 css={headingStyles}>Notifications</h3>  
      <Wrapper display="flex" width="100%" height="calc(100% - 30px)" overflow="auto"
       flexDirection="column" justifyContent="flex-start" alignItems="flex-start"
      >
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
        <NotificationToUser/>
      </Wrapper> 
    </>
  )
}

export default NotificationList;
