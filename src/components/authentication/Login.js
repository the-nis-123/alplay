/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import Inputform from "../global components/Inputform";
import Button from "../global components/Button";
import logo from "../../media/pic/c.png";
import { useDispatch } from "react-redux";
import { signin, signupLink } from "../../redux/actions/authenticationActions";
import facepaint from "facepaint";



const Login = () => {

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
    alignItems:"center"
  }));


  const loginCaptionStyles = css(bp({
    width:"30%",
    height:"100%",
    display:['none', 'none', 'none', 'none', 'flex'],
    flexDirection:"column" ,
    justifyContent:"center",
    alignItems:"flex-start",
    fontSize:['1.2rem', '1rem']
  }));

  const paraStyles = {
    fontSize:['1.2rem', '1rem']
  }


  const loginContainerStyles = css(bp({
    width:['100%','100%', '70%','50%','35%'],
    height:"auto",
    display:'flex',
    flexDirection:"column" ,
    ustifyContent:"center",
    alignItems:"center",
    outline:"solid 1px #181818", 
    borderRadius:"20px",
    padding:'20px 0'
  }));

  const formStyles = {
    width:'100%',
    height:'auto',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  }

  const dp = {
    width:'80px',
    height:'auto',
    margin:'10px 0'
  }

  const headStyles = {
    color: 'teal',
    fontSize: '1.4rem',
    margin:'10px 0'
  }
  
  const linkStyles = {
    color:'lawngreen',
    textDecoration: 'none',
    fontSize:'0.7rem'
  }


  let dispatch = useDispatch();
  let logMeIn = (e)=>{
    e.stopPropagation();
    dispatch(signin());
  }

  let signMeUpLink = (e)=>{
    e.stopPropagation();
    dispatch(signupLink())
  }

  return (
    <div className={wrapperStyles}>
      <div className={loginCaptionStyles} >
        <h3 css={headStyles}>Alplay</h3>
        <p>
         Listen to your favorite music at all times and from anywhere around the globe
         at your own comfort with Alplay
        </p>
      </div>

      <div className={loginContainerStyles}
      >
       <img src={logo} alt="" css={dp} />
        <form action="" css={formStyles}>
          <Inputform width="90%" height="35px" padding="0 20px" borderRadius="30px" 
          margin="5px auto" backgroundColor="#181818" placeholder="username or email"/>
          <Inputform width="90%" height="35px" padding="0 20px" borderRadius="30px"
           margin="5px auto" backgroundColor="#181818" placeholder="password"/>
          <Button width="90%" height="35px" margin="15px auto"cursor="pointer" 
          color="white" borderRadius="30px" backgroundColor="teal" 
          onClick={logMeIn}
          >
            Login
          </Button>
        </form>
        <p css={paraStyles}>New to Alplay? <a href="#" css={linkStyles}    
        onClick={signMeUpLink}>SignUp Here</a></p>
      </div>
    </div>
  )
}

export default Login;
