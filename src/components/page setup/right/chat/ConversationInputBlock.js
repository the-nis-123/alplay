/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper"
import InputForm from "../../../global components/Inputform";
import {IoMdSend, IoMdCamera, IoMdMic, IoMdAttach} from "react-icons/io";

const ConversationInputBlock = () => {

   const sendButtonStyles = {
    height:'20px',
    width:'20px',
    color: "#7FFF00"
  }
  const IconWrapperStyles = {
    borderRadius:'50%',
    height:'30px',
    width:'30px',
    margin:'0 0 0 5px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }

  return (
  <Wrapper width="100%"  display="flex" alignItems="center" justifyContent="center">
    <Wrapper width="calc(100% - 30px)"  height="30px"  borderRadius="15px"
    display="flex" alignItems="center" margin="10px 0 0 0"
    >
      <InputForm padding="0 15px" width="70% " height="30px" borderRadius="15px" backgroundColor="rgba(3, 61, 0,0.8)" color="#7FFF00"/>
      <IoMdAttach/>
      <IoMdMic/>
      <IoMdCamera/>
    </Wrapper>
    <span css={IconWrapperStyles}><IoMdSend css={sendButtonStyles}/></span>
  </Wrapper>
  )
}

export default ConversationInputBlock;
