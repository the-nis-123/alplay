/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import MessageFromUser from "./MessageFromUser";

const ChatList = () => {
  const headingStyles={
    width: '100%',
    height: '30px',
    padding: '10px'
  }
  
  return (
    <> 
      <h3 css={headingStyles}>Messages</h3>  
      <Wrapper display="flex" width="100%" height="calc(100% - 30px)" overflow="auto"
       flexDirection="column" justifyContent="flex-start" alignItems="flex-start" 
      >
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
        <MessageFromUser/>
      </Wrapper> 
    </>
  )
}

export default ChatList;
