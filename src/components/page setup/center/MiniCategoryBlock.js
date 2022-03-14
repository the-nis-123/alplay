/**@jsxImportSource @emotion/react */
import MiniBlock from "./MiniBlock";
import { css } from "@emotion/css";
import facepaint from "facepaint";


const  MiniCategoryBlock = ({itemsArr}) => {
  
  const bp = facepaint([
    '@media(min-width: 260px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);
  
  const wrapperOne = css(bp({
    width:'100%',
    display:'grid',
    gridTemplateColumns:['1fr', '1fr 1fr', ' 1fr 1fr'],
    gridTemplateRows:'repeat(2, "80px")',
    gap:'10px',
    padding:'10px 5px',
  }));

 

 

return (
    <div className={wrapperOne}>
      <MiniBlock colorOne="#093637" colorTwo="#44a08d" playlistId={itemsArr[0]}/>
      <MiniBlock colorOne="#0f2027" colorTwo="#2c5364"  playlistId={itemsArr[1]}/>
      <MiniBlock colorOne="#2c3e50" colorTwo="#bdc3c7"  playlistId={itemsArr[2]}/>
      <MiniBlock colorOne="#636363" colorTwo="#a2ab58" playlistId={itemsArr[3]}/>
    </div>
  );
}

export default MiniCategoryBlock;