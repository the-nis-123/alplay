/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import {MdOutlinePlaylistAdd, MdFavorite, MdFileDownload} from "react-icons/md";

const Playlist = () => {
  const headingStyles={
   width: '95%',
    padding: '10px',
  }

  const IconsStyles = {
    margin:'0 5px',
    color:'limegreen',
     fontSize:'1.3rem'
  }

  return (
    <Wrapper Wrapper width="100%" height ="100%"  
     display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center"
        padding="0 10px 10px 0" 
    >
      <h3 css={headingStyles}>Playlists</h3>
      <Wrapper width="100%"  display="flex" flexDirection="column" justifyContent="flex-start"
       alignItems="flex-start" borderRadius="10px">
        <Wrapper width="100%" backgroundColor="black" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <MdOutlinePlaylistAdd css={IconsStyles}/><span>Create New Playlist</span>
        </Wrapper>
        <Wrapper width="100%" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <MdFavorite css={IconsStyles}/><span>Favorites</span>
        </Wrapper>
        <Wrapper width="100%" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <MdFileDownload css={IconsStyles}/><span>Downloads</span>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default Playlist;
