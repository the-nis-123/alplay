/**@jsxImportSource  @emotion/react */
import { useSelector, useDispatch } from "react-redux";
import {RiShareForwardFill} from "react-icons/ri";
import {ImDownload3} from "react-icons/im";
import {MdFavorite} from "react-icons/md";
import {IoMdArrowBack} from "react-icons/io";
import {markSongAsFavorite, saveSongForOffline, shareThisSong, songInPlaylistDoubleClicked, hidePlaylistButtonPressed } from "../../redux/actions/audioPlayerActions";
import Wrapper from "../global components/Wrapper";
import { css } from "@emotion/css";
import facepaint from "facepaint";



const CurrentPlaylist = () => {


  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  let chosenPlaylist = useSelector(state=>state.audioPlayerReducer.chosenPlaylist);
  let currentSong = useSelector(state=>state.audioPlayerReducer.songIndex);

  const playlistContainerStyles={
    width:'100%',
    height:'calc(100% - 20px)',
    background:`linear-gradient(rgb(0,0,0) 20%, rgba(0,0,0,0.2) 300%), url(${chosenPlaylist[currentSong].songPic})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize:'contain',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    margin:"10px 0",   
  }

  const headingStyles={
    width: '90%',
    color:'lightgreen',
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    margin: '0 0 5px 0',
    fontSize:'1rem'
  }

  const listContainerStyles = {
    width:'100%',
    height:'calc(100% - 30px)',
    overflow:'auto',
    opacity:'0.7',
    padding:'0 0 0 40px'
  }

  const listStyles = css(bp({
    margin: '0 0 5px 0',
    fontSize:'0.9rem',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:hover':{
      color:'lightgreen',
    '#songActions':{
        display: 'flex',
      }
    },

    '#songActions':{
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }));

  const icons = css(bp({
    margin: '5px',
    color:'lightgreen',
    cursor: 'pointer',
    fontSize:'0.9rem'
  }))

  const backButtonStyles = {
    width: '30px',
    height:'30px',
    borderRadius:'50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor:'pointer',
  }

  const backIconStyles = {
    color:'lawngreen',
    fontSize: '1.2rem'
  }

  //dispatch some actions 
  let dispatch = useDispatch();
  //song double clicked, play import PropTypes from 'prop-types'
  let songDoubleClicked = (e) => {
    e.stopPropagation();
    dispatch(songInPlaylistDoubleClicked());
  }

  let markThisSongAsFavorite = (e) => {
    e.stopPropagation();
    dispatch(markSongAsFavorite());
  }

  let downloadThisSong = (e) => {
    e.stopPropagation();
    dispatch(saveSongForOffline());
  }

  let shareSong = (e) => {
    e.stopPropagation();
    dispatch(shareThisSong());
  }

  let awayFromPlaylist = (e) => {
    e.stopPropagation();
    dispatch(hidePlaylistButtonPressed());
  }
  

  return (
    <div css={playlistContainerStyles}>
      <h3 css={headingStyles}>
        <span css={ backButtonStyles } onClick={awayFromPlaylist}>
          <IoMdArrowBack css={backIconStyles}/>
        </span>
        <Wrapper display="flex" justifyContent="space-between" alignItems="center" width="90%">
          <span>Playlist Name </span>
          <span>{currentSong + 1}/{chosenPlaylist.length}</span>
        </Wrapper>
      </h3>
      <ul css={listContainerStyles}>
        {
          chosenPlaylist.map(song => 
          <li key={chosenPlaylist.indexOf(song) + 1} className={listStyles} 
          onDoubleClick={songDoubleClicked}
          >
            <span>{chosenPlaylist.indexOf(song) + 1}. {song.songName}</span>
            <span id="songActions">
              <ImDownload3 className={icons} onClick={downloadThisSong}/>
              <MdFavorite className={icons} onClick={markThisSongAsFavorite}/>
              <RiShareForwardFill className={icons} onClick={shareSong}/>
            </span>
          </li>
          )}
      </ul>
  </div>
  )
}

export default CurrentPlaylist;
