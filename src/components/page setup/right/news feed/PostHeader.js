/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import User from "../../../global components/User";
import {BsThreeDots} from "react-icons/bs";


const PostHeader = () => {
  const capStyles = {
    margin:'0 10px',
    fontSize:'0.8rem'
  }

  const iconStyles = {
    '&:hover':{
      cursor: 'pointer'
    }
  }

  return (
    <Wrapper width="100%" display="flex" justifyContent="space-between" 
    alignItems="center" padding="10px 10px 0 10px" borderRadius="10px" color='#E1E8ED'>
      <User/>
      <Wrapper display="flex" justifyContent="center" alignItems="center" fontSize="0.8rem"> 
        <span css={capStyles}>12-Nov-21</span>
        <BsThreeDots css={iconStyles}/>
      </Wrapper>
    </Wrapper>
  )
}

export default PostHeader
