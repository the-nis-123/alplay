/**@jsxImportSource @emotion/react */

const  GenreLabel = ({genreName}) => {
  const genrename = {
    width:'105px',
    height:'60px',
    padding:'10px',
    borderRadius:'5px',
    backgroundColor:"rgba(3, 61, 0,0.8)",
    margin:'10px 5px',
    color:'red',
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer'
  }


return (
    <div css={genrename}>
      <h2>{genreName}</h2>
    </div>
  );
}

export default GenreLabel;