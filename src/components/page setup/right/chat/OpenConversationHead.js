/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import {IoVideocam , IoSettings} from "react-icons/io5";
import {IoMdCall, IoMdArrowBack} from "react-icons/io";

const OpenConversationHead = () => {
   const iconStyles={
    color:'#708090',
    fontSize: '1rem',
    margin:'0 0.2em'
  }

  const IconWrapperStyles = {
    borderRadius:'50%',
    height:'30px',
    width:'30px',
    margin:'0 5px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }

   const backButtonStyles = {
    height:'20px',
    width:'20px',
    color: "#7FFF00"
  }
 

  return (
  <Wrapper width="100%" height="50px"  display="flex" justifyContent="space-between" alignItems="center">
    <Wrapper  display="flex" justifyContent="center" alignItems="center" color="#708090">
      <span css={IconWrapperStyles}><IoMdArrowBack css={backButtonStyles}/></span>
      <h4>User Name</h4>
    </Wrapper>
    <Wrapper display="flex" justifyContent="center" alignItems="center" fontSize="0.8rem" > 
      <span>online</span>
      <Wrapper width="6px" height="6px" backgroundColor="#7FFF00" borderRadius="50%" margin="5px"/>
    </Wrapper>
    <Wrapper display="flex" justifyContent="center" alignItems="center">
      <IoMdCall css={iconStyles}/>
      <IoVideocam css={iconStyles}/>
      <IoSettings css={iconStyles}/>
    </Wrapper>
  </Wrapper>
  )
}

export default OpenConversationHead;
