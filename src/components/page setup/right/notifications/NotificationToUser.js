/** @jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import NotificationUserHead from "./NotificationUserHead";


const NotificationToUser = () => {
  const messageStyles = {
    fontSize:'0.9rem',
    width:'90%',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    padding:'0 1.5em'
  }

  return (
    <Wrapper display="flex" flexDirection="column" width="100%" alignItems="flex-start"
     margin="3px 0" padding="5px" borderRadius="10px" cursor="pointer">
      <NotificationUserHead/>
      <p css={messageStyles}> 
        Hey i really dont know what you are talking about.
        what i told you is all i know
      </p>
    </Wrapper>
  )
}

export default NotificationToUser;
