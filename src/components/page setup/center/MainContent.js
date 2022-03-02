/**@jsxImportSource @emotion/react */
import Wrapper from "../../global components/Wrapper";
import AlplayCategoryContainers from "../center/AlplayCategoryContainers";
import Player from "./Player";
import OpenedPlaylist from "../../modals/OpenedPlaylist";
import { useSelector } from "react-redux";
import { css } from "@emotion/css";
import facepaint from "facepaint";
import SearchResults from "../../modals/SearchResults";

const MainContent = () => {


  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  const wrapperStyles = css(bp({
    width: ['100%', '65%', '50%'],
    height:'100%',
    padding:'20px 0',
    display:['flex', 'flex', 'flex'],
    flexDirection:'column',
    justifyContent:['flex-start', 'flex-start', 'flex-start'],
    alignItems:['center', 'center', 'center'],
    background: "linear-gradient(to bottom, rgba(3, 61, 0,0.8), rgba(0, 0, 0,0.4) 70%)",
  }));

  let menu = useSelector(state=>state.searchReducer.homeMenu);
  let search = useSelector(state=>state.searchReducer.searchValue);
  let playlist = useSelector(state=>state.audioPlayerReducer.showPlaylist);
  let songsList = useSelector(state=>state.playlistReducer.songsCollection);

  return (
    <div className={wrapperStyles}
    >
      <Wrapper width="95%" height ="calc(100% - 100px)" position="relative">
       { menu && <AlplayCategoryContainers/>}
       { search && <SearchResults/>} 
       { playlist && <OpenedPlaylist/>}
        { songsList && <OpenedPlaylist/>}
      </Wrapper>
      <Player/>
    </div>
  )
}

export default MainContent;
