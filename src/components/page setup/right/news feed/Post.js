/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import PostReactions from "./PostReactions";
import PostHeader from "./PostHeader";

const Post = ({photo}) => {
  const photoStyles ={
    width:'95%',
    height:'auto',
    "&:hover":{
       cursor:'pointer'
     }
  }

  const postCaptionStyles = {
    width:'100%',
    margin:'5px 0 ',
    padding:"0 10px",
    height:'80px',
    whiteSpace:'wrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    fontSize:'0.8rem'
  }

  return (
    <Wrapper width="100%" borderRadius="10px" margin="3px 0"
     display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center"
     >
      <PostHeader/>
      <Wrapper width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <p css={postCaptionStyles}>
          Callback to handle every time the selected item changes, 
          receives the current index and item as arguments
          receives the current index and item as arguments
        </p>
        <img src={photo} alt="" css={photoStyles}/>
      </Wrapper>
      <PostReactions/>
    </Wrapper>
  )
}

export default Post;
