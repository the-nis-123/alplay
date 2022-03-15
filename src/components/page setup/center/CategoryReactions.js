/**@jsxImportSource @emotion/react */

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
   width:"100%"
  }
  
  const wrapperStyles = {
    width:"100%",
    height :"100px",
    fontSize:"0.8rem",
    display:"flex",
    flexDirection:"column",
    alignItems:'center',
    position:'absolute',
    bottom:'0',
    left:'0',
    padding:"10px"
   }

  


  return (
    <div css={wrapperStyles} >
      <h3 css={playlistNameStyles}>{props.categoryName}</h3>
      <p css={playlistDescriptionStyles}>
        {props.description}
      </p>
    </div>
  )
}

export default CategoryReactions;
