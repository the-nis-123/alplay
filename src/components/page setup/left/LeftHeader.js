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
    height:'60px',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:'0 10px'
  }));


  const logoStyles = {
    width:'50px',
    height:'50px',
    marginRight:'10px',
  }


  const appNameStyles = css(bp({
   color:'#30F284',
  }));

  return (
    <div className={wrapperStyles}>
      <img src={logo} alt=""  css={logoStyles}/>
      <h2 className={appNameStyles}>Alplay</h2>
    </div>
  )
}

export default LeftHeader;
