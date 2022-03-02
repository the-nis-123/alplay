/**@jsxImportSource @emotion/react */

const  GenreLabel = ({genreName}) => {
  const genrename = {
    padding:'20px',
    borderRadius:'15px',
    backgroundColor:'yellow',
    margin:'10px',
    color:'red',
    textAlign:'center'
  }


return (
    <h2 css={genrename}>{genreName}</h2>
  );
}

export default GenreLabel;