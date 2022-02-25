/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import SentMessageWrapper from "./SentMessageWrapper";
import RecievedMessageWrapper from "./RecievedMessageWrapper";

const MessagesWrapper = () => {
  return (
    <Wrapper  width="100%" height="calc(100% - 80px)" overflow="auto"
    borderRadius="10px" display="flex" flexDirection="column" justifyContent="flex-start" 
    alignItems="center" padding="0 10px">
      <SentMessageWrapper/>
      <SentMessageWrapper/>
      <RecievedMessageWrapper/>
      <SentMessageWrapper/>
      <RecievedMessageWrapper/>
      <SentMessageWrapper/>
      <RecievedMessageWrapper/>
      <RecievedMessageWrapper/>
      <SentMessageWrapper/>
      <RecievedMessageWrapper/>
      <SentMessageWrapper/>
      <RecievedMessageWrapper/>
      <SentMessageWrapper/>
      <RecievedMessageWrapper/>
      <RecievedMessageWrapper/>
      <SentMessageWrapper/>
      <RecievedMessageWrapper/>
      <SentMessageWrapper/>
      <RecievedMessageWrapper/>
      
    </Wrapper>
  )
}

export default MessagesWrapper;
