/** @jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import User from "../../../global components/User";

const NotificationUserHead = () => {
  const labelStyles={
    color:'	#708090',
    fontSize: '0.8rem'
  }

  return (
    <Wrapper width="100%" display="flex" justifyContent="space-between" alignItems="center">
      <User/>
      <p css={labelStyles}>7:41pm</p>
    </Wrapper>
  )
}

export default NotificationUserHead;
