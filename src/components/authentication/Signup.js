/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import facepaint from "facepaint";
import Inputform from "../global components/Inputform";
import Button from "../global components/Button";
import logoPic from "../../media/pic/c.png";
import { useDispatch } from "react-redux";
import { signup} from "../../redux/actions/authenticationActions";


const Signup = () => {

  const bp = facepaint([
    '@media(min-width: 200px)',
    '@media(min-width: 420px)',
    '@media(min-width: 620px)',
    '@media(min-width: 900px)',
    '@media(min-width: 1200px)'
  ]);
  
  const wrapperStyles = css(bp({
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:['center', 'center', 'center', 'center', 'space-evenly'],
    alignItems:"center",
  }));


  const signupCaptionStyles = css(bp({
    width:"30%",
    height:"100%",
    display:['none', 'none', 'none', 'none', 'flex'],
    flexDirection:"column" ,
    justifyContent:"center",
    alignItems:"flex-start",
  }));


  const signupContainerStyles = css(bp({
    width:['100%','100%', '70%','50%','35%'],
    height:"auto",
    display:'flex',
    flexDirection:"column" ,
    ustifyContent:"center",
    alignItems:"center",
    borderRadius:"20px",
    padding:'20px 0',
  }));

  const formStyles = css(bp({
    width:'100%',
    height:'auto',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  }));

    const logo = {
    width:'6rem',
    height:'auto',
    margin:'0.625em auto',
    display: 'block'
  }

   const headStyles = {
    textAlign: 'center',
    color: 'teal',
    margin:'0.625em 0'
  }

  const leftheadStyles = {
    textAlign: 'left',
    color: 'teal',
    margin:'0.625em 0'
  }

  const linkStyles = {
    color:'lawngreen',
    textDecoration: 'none',
    fontSize:'0.8rem'
  }

  const linkContainerStyles = {
    fontSize:['1.2rem', '1rem'],
    textAlign: 'center',
  }

  let dispatch = useDispatch();
  let signMeUp = (e)=>{
    e.stopPropagation();
    dispatch(signup())
  }

  
  
  return (
    <div className={wrapperStyles}>
      <div className={signupCaptionStyles}>
        <h3 css={leftheadStyles}>Alplay</h3>
        <p>
          Signup today and get unlimited access to music, music events, music news and get to 
          connect with your favorite acts in the music business from all over the world.
        </p>
      </div>

      <div className={signupContainerStyles}>
        <h2 css={headStyles}>Sign Up</h2>
        <img src={logoPic} alt="" css={logo} />
        <form action="" className={formStyles}>
          <Inputform width="90%" height="35px"  padding="0 20px" borderRadius="30px" 
          margin="0.3125em auto" backgroundColor="#181818" placeholder="username or email"/>
          <Inputform width="90%" height="35px"  padding="0 20px" borderRadius="30px" 
          margin="0.3125em auto" backgroundColor="#181818" placeholder="firstname"/>
          <Inputform width="90%" height="35px"  padding="0 20px" borderRadius="30px" 
          margin="0.3125em auto" backgroundColor="#181818" placeholder="lastname"/>
          <Inputform width="90%" height="35px"  padding="0 20px" borderRadius="30px" 
          margin="0.3125em auto" backgroundColor="#181818" placeholder="display name"/>
          <Inputform width="90%" height="35px"  padding="0 20px" borderRadius="30px" 
          margin="0.3125em auto" backgroundColor="#181818" placeholder="password"/>
          <Inputform width="90%" height="35px"  padding="0 20px" borderRadius="30px" 
          margin="0.3125em auto" backgroundColor="#181818" placeholder="confirm password"/>
          <Button width="90%" height="35px" margin="0.9375em auto"cursor="pointer" onClick={signMeUp} 
          color="white" borderRadius="30px" backgroundColor="teal">SignUp</Button>
        </form>
        <p css={linkContainerStyles}>Already have a Alplay account? <a href="#" css={linkStyles}  onClick={signMeUp}>SignIn Here</a></p>
      </div>
    </div>
  )
}

export default Signup;
