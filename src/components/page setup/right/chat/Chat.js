/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import ChatList from "./ChatList";
import UsersOpenConversation from "./UsersOpenConversation";

const Chat = ({converSationIsOPen = true}) => {
  
  return (
    <Wrapper Wrapper width="100%" height ="100%" padding="0 10px 10px 0" 
     display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start"
    >
     {converSationIsOPen? <UsersOpenConversation/> : <ChatList/>}
    </Wrapper>
  )
}

export default Chat;
