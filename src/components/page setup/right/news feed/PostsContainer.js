import Post from "./Post";
import Wrapper from "../../../global components/Wrapper";
import photo1 from "../../../../media/pic/3.jpeg";
import photo2 from "../../../../media/pic/me.jpg";
import photo3 from "../../../../media/pic/6.jpeg";
import photo4 from "../../../../media/pic/7.jpeg";
import photo5 from "../../../../media/pic/9.jpeg";


const PostsContainer = () => {
  return (
    <Wrapper width="100%" height="calc(100% - 100px)" overflow="auto" display="flex" 
    flexDirection="column" justifyContent="flex-start" alignItems="center">
      <Post photo={photo1}/>
      <Post photo={photo5}/>
      <Post photo={photo3}/> 
      <Post photo={photo4}/> 
      <Post photo={photo2}/> 
    </Wrapper>
  )
}

export default PostsContainer;
