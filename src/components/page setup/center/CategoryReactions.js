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
    width:'100%',
    color:"#daddda",
  }

  const playlistNameStyles = {
   color:'honeydew',
   textAlign:"center"
  }
  
  const reactionsIconsStyles = {
    color:'lightgreen',
    margin:['5px 1.1em', '5px 1.1em', '5px 0.6em'], 
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
    height :"70px",
    display:"flex",
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:'10px',
    left:'0',
   }

  


  return (
    <div css={wrapperStyles} >
      <Wrapper display="flex" flexDirection="column" padding="0.625em" position="relative"
      >
        <h3 css={playlistNameStyles}>{props.categoryName}</h3>
        <p css={playlistDescriptionStyles}>
         {props.description}
        </p>
      </Wrapper>
        
      <div className={reactionContainerStyles} id="categoryReactions" >
        
        <Wrapper display="flex" flexDirection="column-reverse" alignItems="center" 
        justifyContent="center" margin="0.3125em" 
        >
          <span className={labelStyles}>2.2B</span>
          <BsHeadphones css={reactionsIconsStyles}/>
        </Wrapper>
        <Wrapper display="flex" flexDirection="column-reverse" alignItems="center" 
        justifyContent="center" margin="0.3125em" 
        >
          <span className={labelStyles}>3.5k</span>
          <ImDownload3 css={reactionsIconsStyles}/>
        </Wrapper>
        <Wrapper display="flex" flexDirection="column-reverse" alignItems="center" 
        justifyContent="center" margin="0.3125em"
        >
          <span className={labelStyles}>456</span>
          <MdFavorite css={reactionsIconsStyles}/>
        </Wrapper>
        <Wrapper display="flex" flexDirection="column-reverse" alignItems="center" 
        justifyContent="center" margin="0.3125em"
        >
          <span className={labelStyles}>1.3k</span>
          <RiShareForwardFill css={reactionsIconsStyles}/>
        </Wrapper>
        </div>
    </div>
  )
}

export default CategoryReactions;
