/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper"
import SentMessage from "./SentMessage";

const SentMessageWrapper = () => {
  return (
    <Wrapper width="100%" display="flex" justifyContent="flex-end" alignItems="center" 
    margin="0 0 6px 0" fontSize ="0.9rem">
      <SentMessage/>
    </Wrapper>
  )
}

export default SentMessageWrapper;
