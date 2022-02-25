/** @jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import ChatUserHead from "./ChatUserHead";


const MessageFromUser = () => {
  const messageStyles = {
    fontSize:'0.9rem',
    width:'90%',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    color:'#B4B7BA',
    padding:'0 1.5em'
  }

  return (
    <Wrapper display="flex" flexDirection="column" width="100%" alignItems="flex-start"
     margin="3px 0" padding="5px" borderRadius="10px" cursor="pointer">
      <ChatUserHead/>
      <p css={messageStyles}> 
        Hey i really dont know what you are talking about.
        what i told you is all i know
      </p>
    </Wrapper>
  )
}

export default MessageFromUser;
