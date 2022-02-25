/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper"
import InputForm from "../../../global components/Inputform";
import { IoMdCamera, IoMdMic} from "react-icons/io";

const PostInputBlock = () => {

  const iconStyles = {
    margin:'0 0 0 2px' ,
    '&:hover':{
      cursor: 'pointer'
    }
  }

  return (
  <Wrapper  display="flex" alignItems="center" justifyContent="center">
    <Wrapper height="40px"  borderRadius="30px"
    display="flex" alignItems="center" 
    >
      <InputForm width="80% " height="34px" borderRadius="30px" backgroundColor="rgba(3, 61, 0,0.8)"
       color="#d1b894"  padding="0 10px" placeholder="Send a shout out" 
      />
      <IoMdMic css={iconStyles}/>
      <IoMdCamera css={iconStyles}/>
    </Wrapper>
  </Wrapper>
  )
}

export default PostInputBlock;
