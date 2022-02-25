/** @jsxImportSource @emotion/react */
import Wrapper from "./Wrapper";
import photo from "../../media/pic/me.jpg"

const User = () => {
  const photoStyles = {
    width:'30px',
    height:'30px',
    borderRadius:'50%',
    margin:'0 5px 0 0',
    "&:hover":{
       cursor:'pointer'
     }
  }
  const userName={
    color:' #E1E8ED',
    "&:hover":{
       cursor:'pointer'
     }
  }

  return (
    <Wrapper dispaly="flex" justifyContent="center" alignItems="center" cursor="pointer">
      <img src={photo} alt="" css={photoStyles}/>
      <h4 css={userName}>User Name</h4>
    </Wrapper>
  )
}

export default User
