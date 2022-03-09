/**@jsxImportSource @emotion/react */
import Wrapper from "../../global components/Wrapper";

const CategoryReactions = (props) => {

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
