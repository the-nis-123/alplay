/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import {AiTwotoneLike} from "react-icons/ai";
import {RiShareForwardFill} from "react-icons/ri";
import {FaCommentDots} from "react-icons/fa";

const PostReactions = () => {
  const iconStyles={
    margin :'0 5px',
     "&:hover":{
       cursor:'pointer'
     }
  }
  return (
    <Wrapper width="100%" margin="5px 0"  padding="10px"
    display="flex" justifyContent="space-between" alignItems="center"  color='#E1E8ED'>
     <span>Reactions</span>
     <Wrapper>
        <AiTwotoneLike css={iconStyles}/>
        <FaCommentDots css={iconStyles}/>
        <RiShareForwardFill css={iconStyles}/>
     </Wrapper>
    </Wrapper>
  )
}

export default PostReactions;
