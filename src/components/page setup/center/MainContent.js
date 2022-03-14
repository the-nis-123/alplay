/**@jsxImportSource @emotion/react */
import Wrapper from "../../global components/Wrapper";
import AlplayCategoryContainers from "../center/AlplayCategoryContainers";
import Player from "./Player";
import OpenedPlaylist from "../../modals/OpenedPlaylist";
import { useSelector } from "react-redux";
import { css } from "@emotion/css";
import facepaint from "facepaint";
import SearchResults from "../../modals/SearchResults";
import OpenedAlbum from "../../modals/OpenedAlbum";

const MainContent = () => {


  const bp = facepaint([
    '@media(min-width: 500px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  const wrapperStyles = css(bp({
    width:["100%","calc(100% - 230px)","calc(100% - 230px)"],
    height:'100%',
    overflowY:"scroll",
    overflowX:"hidden",
    padding:'5px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    background: "linear-gradient(to bottom, rgba(3, 61, 0,0.5), rgba(0, 0, 0,0.4) 70%)",
  }));

  let menu = useSelector(state=>state.searchReducer.homeMenu);
  let search = useSelector(state=>state.searchReducer.searchValue);
  let showAPlaylist = useSelector(state=>state.playlistReducer.showAPlaylist);
  let showAnAlbum = useSelector(state=>state.playlistReducer.showAnAlbum);

  return (
    <div className={wrapperStyles}
    >
      <Wrapper width="100%" height ="calc(100% - 80px)" position="relative">
       { menu && <AlplayCategoryContainers/>}
       { search && <SearchResults/>} 
       { showAnAlbum && <OpenedAlbum/>}
       { showAPlaylist && <OpenedPlaylist/>}
      </Wrapper>
      <Player/>
    </div>
  )
}

export default MainContent;
