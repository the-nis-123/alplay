/**@jsxImportSource @emotion/react */
import logo from "../../../media/pic/c.png";
import { css } from "@emotion/css";
import facepaint from "facepaint";

const LeftHeader = () => {
  const bp = facepaint([
    '@media(min-width: 680px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  const wrapperStyles = css(bp({
    width: ['20%','40%', '25%'],
    height:'60px',
    display:['flex', 'flex', 'flex'],
    justifyContent:'flex-start',
    alignItems:'center',
    padding:'0 10px'
  }));


  const logoStyles = {
    width:'45px',
    height:'auto',
    marginRight:'10px'
  }


  const appNameStyles = css(bp({
   color:'lawngreen',
   fontSize:['', '1.5rem !important', '1rem'],
   display:['none', 'block', 'block']
  }));

  return (
    <div className={wrapperStyles}>
      <img src={logo} alt=""  css={logoStyles}/>
      <h2 className={appNameStyles}>Alplay</h2>
    </div>
  )
}

export default LeftHeader;
