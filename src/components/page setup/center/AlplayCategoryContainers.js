/**@jsxImportSource @emotion/react */
import React from "react";
import CategoryWrapper from "./CategoryWrapper";
import {albums, playlists} from "./musicStore";


const AlplayCategoryContainers = () => {  
  const styles={
    width:"calc(100% - 5px)",
    height:'calc(100% - 20px)',  
    display:"grid",
    gridTemplateColumns:'1fr 1fr',
    gap:'10px',
    overflow:"auto"
  }
  return (
    <div css={styles}>
       <CategoryWrapper playlistsArr={playlists} albumsArr={albums} />
    </div>
  )
}

export default AlplayCategoryContainers
