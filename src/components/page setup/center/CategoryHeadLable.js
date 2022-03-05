/**@jsxImportSource @emotion/react */

const  CategoryHeadLabel = ({categoryName, linkText}) => {
  
  const wrapper = {
    width:'100%',
    height:'30px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 10px',
    margin:'20px 0 10px 0'
  }

  const link = {
    '&:hover':{
      textDecoration:'underline 1.3px limegreen',
      cursor:'pointer'
    }
  }


return (
    <div css={wrapper}>
      <h2>{categoryName}</h2>
      <h3 css={link}>{linkText}</h3>
    </div>
  );
}

export default CategoryHeadLabel;