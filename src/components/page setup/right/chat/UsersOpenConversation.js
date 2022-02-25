/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper"
import ConversationInputBlock from "./ConversationInputBlock";
import OpenConversationHead from "./OpenConversationHead";
import MessagesWrapper from "./MessagesWrapper";

const UsersOpenConversation = () => {
  const headingStyles={
    width: '100%',
    height: '30px',
    color:'	#708090',
    padding: '10px'
  }

  return (
    <>
      <h3 css={headingStyles}>Chat</h3>
      <Wrapper  width="100%" height="calc(100% - 30px)" display="flex" flexDirection="column" 
      borderRadius="10px" justifyContent="flex-start" alignItems="center">
        <OpenConversationHead/>
        <MessagesWrapper/>
        <ConversationInputBlock/>
      </Wrapper>
    </>
  )
}

export default UsersOpenConversation
