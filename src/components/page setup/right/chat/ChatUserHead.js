/** @jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import User from "../../../global components/User";

const ChatUserHead = () => {
  const labelStyles={
    color:'#295E73',
    fontSize: '0.8rem'
  }

  return (
    <Wrapper width="100%" display="flex" justifyContent="space-between" alignItems="center">
      <User/>

      <Wrapper display="flex" justifyContent="center" alignItems="center">
        <p css={labelStyles}>time</p>
        <Wrapper width="6px" height="6px" borderRadius="50%" margin="5px"/>
      </Wrapper>
    </Wrapper>
  )
}

export default ChatUserHead
