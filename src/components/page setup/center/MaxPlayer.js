/**@jsxImportSource @emotion/react */
import {IoMdPause, IoMdPlay,IoMdSkipBackward, IoMdSkipForward} from "react-icons/io";
import { useDispatch, useSelector} from "react-redux";
import * as playerActions from "../../../redux/actions/playerActions";
import {MdOutlineFavorite, MdOutlineKeyboardArrowDown} from "react-icons/md";
import {BsFillVolumeMuteFill, BsFillVolumeUpFill} from "react-icons/bs";
import {HiOutlineDotsVertical} from "react-icons/hi";
import { css } from "@emotion/css";
import facepaint from "facepaint";
import Wrapper from "../../global components/Wrapper";

const MAxPlayer = () => {
  const dispatch = useDispatch();

   const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 1000px)',
    '@media(min-width: 3000px)'
  ]);


 const { songIndex, 
    volumeOn, playingPlaylist,isPlaying, isAnAlbum,isAPlaylist 
  } = useSelector(state=>state.playerReducer);

  
  let songCover, songTitle, artistName="";
  let songDuration="0:00";
  
  if(isAPlaylist && Object.keys(playingPlaylist).length!==0){
    songCover=playingPlaylist.tracks.data[songIndex].album['cover_big'];
    songTitle=playingPlaylist.tracks.data[songIndex].title;
    songDuration=`${Math.floor(playingPlaylist.tracks.data[songIndex].duration /60)+":"+Math.ceil(playingPlaylist.tracks.data[songIndex].duration%60)}`;
    artistName=playingPlaylist.tracks.data[songIndex].artist['name'];
  }else if(isAnAlbum && Object.keys(playingPlaylist).length!==0){
    songCover=playingPlaylist.cover_big;
    songTitle=playingPlaylist.tracks.data[songIndex].title;
    songDuration=`${Math.floor(playingPlaylist.tracks.data[songIndex].duration /60)+":"+Math.ceil(playingPlaylist.tracks.data[songIndex].duration%60)}`;
    artistName=playingPlaylist.tracks.data[songIndex].artist['name'];
  }else{
    console.log("song cover not loaded");
  }


  const playSong = (e) => {
    e.stopPropagation();
    dispatch(playerActions.playButtonPressed(playingPlaylist, songIndex));
  }

  const mute = (e) => {
    e.stopPropagation();
    dispatch(playerActions.muteSong());
  }

  const unmute = (e) => {
    e.stopPropagation();
    dispatch(playerActions.unmuteSong());
  }

  const pauseSong = (e)=>{
    e.stopPropagation();
    dispatch(playerActions.pauseButtonPressed());
  }

  const  nextSong = (e)=>{
    e.stopPropagation();
    dispatch(playerActions.nextSongButtonPressed());
  }

  const previousSong = (e) => {
    e.stopPropagation();
    dispatch(playerActions.previousSongButtonPressed());
  }

   const close = (e) => {
    e.stopPropagation();
    dispatch(playerActions.closeMaxPlayer());
  }
  
  
  const maxPlayerStyles = css(bp({
    position:"absolute",
    top:"0",
    left:"0",
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    display:"flex",
    flexDirection:"column",
    alignItems:"center"  
  }));

  const playerIconStyles = {
    width:'18px',
    height:'18px',
    color:'#D1B894',
    cursor:'pointer'
  }

  const songTitleStyles = {
    textAlign:'left',
    width:'100%',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    color:'limegreen',
    margin:'5px 0'
  }

   const maxSongCoverPicStyles=css(bp({
    width:['90%','60%','45% !important'],
    height:'auto',
    borderRadius:'3px',
  }))

  const detailsWrapper = css(bp({
    width:['90%','60%','45%'],
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    margin:'20px 0 0 0'
  }))

  const playButtonWrapper = {
    width:"40px",
    height:"40px",
    backgroundColor:"rgba(3, 61, 0,0.8)",
    borderRadius:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"0 10px"
  }

  const activeSongDetails = css(bp({
    width:['90%','60%','50%'],
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    margin:["20px 0 100px 0","40px 0","20px 0"],
    color:"#588C32"
  }))

 


  return (
    <div  className={maxPlayerStyles}>
      <p className={activeSongDetails}>
        <MdOutlineKeyboardArrowDown style={{cursor:"pointer"}} onClick={close} />
        <span>now playling</span>
        <HiOutlineDotsVertical />
      </p>

      {songCover? <img src={songCover} alt="" className={maxSongCoverPicStyles} />:'loading'}
      {songCover? <div className={detailsWrapper}>
        <h3 css={songTitleStyles}>{songTitle}</h3> 
        <p css={songTitleStyles}>{artistName}</p> 

        <Wrapper margin="5px 0" width="100%" display="flex" justifyContent="space-between" alignItems="center" 
        fontSize="0.8rem" color="#D5EAF2">
          <p id="curreSongPostion" >0:00</p> 
          <input type="range" min="0"  max="100" step="1" id="songSlider" />
          <p id="songDuration">
             {songDuration}
          </p>
        </Wrapper>
        
          
        <Wrapper width="100%" margin="5px 0" display="flex" justifyContent="space-between" alignItems="center">  
          <MdOutlineFavorite css={playerIconStyles}  />
          <Wrapper width="60%"  display="flex" justifyContent="center" alignItems="center">
            <IoMdSkipBackward css={playerIconStyles} onClick={previousSong} />
            <div css={playButtonWrapper} >
              {isPlaying && <IoMdPause css={playerIconStyles} onClick={pauseSong}/> }
              {!isPlaying && <IoMdPlay css={playerIconStyles} onClick={playSong}/> }  
            </div>
            <IoMdSkipForward css={playerIconStyles} onClick={nextSong} />
          </Wrapper>

          {volumeOn?
            <BsFillVolumeUpFill  css={playerIconStyles}  onClick={unmute}/>  
            :<BsFillVolumeMuteFill css={playerIconStyles} onClick={mute} />
          }       
        </Wrapper>
      </div>:""}
    </div>  
  )
}

export default MAxPlayer;
