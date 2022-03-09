/**@jsxImportSource @emotion/react */
import Wrapper from "../../global components/Wrapper";
import {BsHeadphones} from "react-icons/bs";
import {RiShareForwardFill} from "react-icons/ri";
import {ImDownload3} from "react-icons/im";
import {MdFavorite} from "react-icons/md";
import { css } from "@emotion/css";
import facepaint from "facepaint";

const CategoryReactions = (props) => {

  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  const playlistDescriptionStyles = {
    textAlign:"left",
    padding:"3px 0",
    color:"#daddda",
  }

  const playlistNameStyles = {
   color:'honeydew',
   textAlign:"left",
   padding:"3px 0",

  }
  
  const reactionsIconsStyles = {
    color:'lightgreen',
    margin:'5px' 
  }

  const reactionContainerStyles = css(bp({
    width:"100%",
    display:'flex', 
    justifyContent:"space-evenly", 
  }));

  const labelStyles = css(bp({
    display:'inline-block',
  }));
  
  const wrapperStyles = {
    width:"100%",
    height :"100px",
    fontSize:"0.8rem",
    display:"flex",
    flexDirection:"column",
    alignItems:'center',
    position:'absolute',
    bottom:'10px',
    left:'0',
    padding:"0 10px"
   }

  


  return (
    <div css={wrapperStyles} >
      <Wrapper display="flex" flexDirection="column" position="relative"
      >
        <h3 css={playlistNameStyles}>{props.categoryName}</h3>
        <p css={playlistDescriptionStyles}>
         {props.description}
        </p>
      </Wrapper>
    </div>
  )
}

export default CategoryReactions;
