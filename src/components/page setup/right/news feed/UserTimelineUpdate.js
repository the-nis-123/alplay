/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import Button from "../../../global components/Button";
import User from "../../../global components/User";
import PostInputBlock from "./PostInputBlock";

const UserTimelineUpdate = () => {
 
  return (
    <Wrapper width="100%" height="100px" display="flex" flexDirection="column" justifyContent="center"
    alignItems="flex-start" borderRadius="10px"  padding="0 10px 10px 10px">
      <User/>
      <Wrapper width="100%" display="flex" justifyContent="center" alignItems="center"
      margin="5px 0 0 0">
        <PostInputBlock/>
        <Button width="100px" height="30px" borderRadius="30px" backgroundColor="lightgreen" 
          color="black" cursor="pointer" margin="0 0 0 10px"
        >
          Post
        </Button>
      </Wrapper>
    </Wrapper>
  )
}

export default UserTimelineUpdate
