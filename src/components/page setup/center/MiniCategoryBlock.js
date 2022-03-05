/**@jsxImportSource @emotion/react */
import MiniBlock from "./MiniBlock";

const  MiniCategoryBlock = ({itemsArr}) => {
  
  const wrapperOne = {
    width:'100%',
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    gridTemplateRows:'repeat(2, "60px")',
    gap:'10px',
    margin:'20px 0 10px 0',
  }
 

return (
    <div css={wrapperOne}>
      <MiniBlock colorOne="#093637" colorTwo="#44a08d" playlistId={itemsArr[0]}/>
      <MiniBlock colorOne="#0f2027" colorTwo="#2c5364"  playlistId={itemsArr[1]}/>
      <MiniBlock colorOne="#2c3e50" colorTwo="#bdc3c7"  playlistId={itemsArr[2]}/>
      <MiniBlock colorOne="#636363" colorTwo="#a2ab58" playlistId={itemsArr[3]}/>
    </div>
  );
}

export default MiniCategoryBlock;