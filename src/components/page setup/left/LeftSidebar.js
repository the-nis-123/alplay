/**@jsxImportSource @emotion/react */
import div from "../../global components/Wrapper";
import EventBlock from "./EventBlock";
import photo1 from "../../../media/pic/8.jpeg"
import photo2 from "../../../media/pic/10.jpeg"
import photo3 from "../../../media/pic/2.jpeg"
import photo4 from "../../../media/pic/14.jpeg"
import photo5 from "../../../media/pic/13.jpeg"
import photo6 from "../../../media/pic/15.jpeg"
import photo7 from "../../../media/pic/9.jpeg"
import facepaint from "facepaint";
import {css} from "@emotion/css";

const LeftSidebar = () => {
  

  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  const wrapperStyles = css(bp({
    width: ['', '35%', '25%'],
    height:'100%',
     padding:'0 7px 0 0',
    display:['none', 'flex', 'flex'],
    flexDirection:'column',
    justifyContent:['flex-start', 'flex-start', 'flex-start'],
    alignItems:['center', 'center', 'center'],
     background: "linear-gradient(to bottom, rgba(0, 51, 0,0.5), rgba(0, 0, 0,0.5) 70%)",
  }));

  const headingStyles={
   width: '95%',
    height: '30px',
    padding: '10px',
  }

  const innerWrapper = {
    overflowY:'scroll',
    width:"100%",
    height:"calc(100% - 30px)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
    padding:"0 0 10px 10px",
    margin:"10px 0 10px 0" 
      
  }

  return (
    <div className={wrapperStyles}
    >
      
      <h3 css={headingStyles}>Upcoming Music Events</h3>
      
      <div css={innerWrapper} >
        <EventBlock eventPhoto={photo1}/>
        <EventBlock eventPhoto={photo2}/>
        <EventBlock eventPhoto={photo3}/>
        <EventBlock eventPhoto={photo4}/>
        <EventBlock eventPhoto={photo5}/>
        <EventBlock eventPhoto={photo6}/>
        <EventBlock eventPhoto={photo7}/>
      </div>
    </div>
  )
}

export default LeftSidebar;
