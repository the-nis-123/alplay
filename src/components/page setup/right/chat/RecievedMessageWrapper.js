/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import RecievedMessage from "./RecievedMessage";

const RecievedMessageWrapper = () => {
  return (
    <Wrapper width="100%" display="flex" justifyContent="flex-start" alignItems="center" 
    margin="0 0 6px 0" fontSize ="0.9rem">
      <RecievedMessage/>
    </Wrapper>
  )
}

export default RecievedMessageWrapper;
