import Wrapper from "../../../global components/Wrapper";
import UserTimelineUpdate from "./UserTimelineUpdate";
import PostsContainer from "./PostsContainer";

const Newsfeed = () => {
  return (
    <Wrapper width="100%" height ="100%"  
     display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center"
      padding="0 10px 10px 0" 
    >
      <UserTimelineUpdate/>
      <PostsContainer/>
    </Wrapper>
  )
}

export default Newsfeed;
