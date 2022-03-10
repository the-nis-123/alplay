/**@jsxImportSource @emotion/react */
import facepaint from "facepaint";
import {css} from "@emotion/css";
import Wrapper from "../../global components/Wrapper";
import {MdOutlinePlaylistAdd, MdFavorite, MdFileDownload} from "react-icons/md";


const LeftSidebar = () => {
  

  const bp = facepaint([
    '@media(min-width: 200px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  const wrapperStyles = css(bp({
    width: '230px',
    height:'100%',
    padding:'0 7px 0 0',
    display:['none','flex','flex'],
    flexDirection:'column',
    justifyContent:['flex-start', 'flex-start', 'flex-start'],
    alignItems:['center', 'center', 'center'],
     background: "linear-gradient(to bottom, rgba(0, 51, 0,0.5), rgba(0, 0, 0,0.5) 70%)",
  }));

  

  const IconsStyles = {
    margin:'0 5px',
    color:'limegreen',
     fontSize:'1.3rem'
  }

  return (
    <div className={wrapperStyles}
    >
      <Wrapper width="100%"  display="flex" flexDirection="column" justifyContent="flex-start"
       alignItems="flex-start" borderRadius="10px">
        <Wrapper width="100%" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <MdOutlinePlaylistAdd css={IconsStyles}/><span>Create New Playlist</span>
        </Wrapper>
        <Wrapper width="100%" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <MdFavorite css={IconsStyles}/><span>Favorites</span>
        </Wrapper>
        <Wrapper width="100%" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <MdFileDownload css={IconsStyles}/><span>Downloads</span>
        </Wrapper>
        <Wrapper width="100%" cursor="pointer" padding="10px 20px"  display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <span>Your Playlists</span>
        </Wrapper>
      </Wrapper>
    </div>
  )
}

export default LeftSidebar;
