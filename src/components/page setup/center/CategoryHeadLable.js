/**@jsxImportSource @emotion/react */

const  CategoryHeadLabel = ({categoryName, linkText}) => {
  
  const wrapper = {
    width:'100%',
    height:'30px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 10px',
    margin:'10px 0',
  }

  const link = {
    '&:hover':{
      textDecoration:'underline 1.3px limegreen',
      cursor:'pointer'
    }
  }


return (
    <div css={wrapper}>
      <h3>{categoryName}</h3>
      <h5 css={link}>{linkText}</h5>
    </div>
  );
}

export default CategoryHeadLabel;