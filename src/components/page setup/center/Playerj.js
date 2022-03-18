/**@jsxImportSource @emotion/react */
import React from "react";
import {IoMdPause, IoMdPlay,IoMdSkipBackward, IoMdSkipForward} from "react-icons/io";
import { useDispatch, useSelector} from "react-redux";
import * as playerActions from "../../../redux/actions/playerActions";
import {MdOutlineFavorite} from "react-icons/md";
import {BsFillVolumeMuteFill, BsFillVolumeUpFill} from "react-icons/bs";
import axios from "axios";
import { useState, useEffect } from "react";
import { css } from "@emotion/css";
import facepaint from "facepaint";
import Wrapper from "../../global components/Wrapper";

const Player = () => {

const dispatch = useDispatch();
const [playlist, setPlaylist] = useState({});    


const {
  songTitle, songIndex, songDuration, isPlaying,
  playlistIDfromUser, volumeOn,
  artistName, playingPlaylist, isAnAlbum,isAPlaylist 
} = useSelector(state=>state.playerReducer);

  
const bp = facepaint([
  '@media(min-width: 600px)',
  '@media(min-width: 999px)',
  '@media(min-width: 1000px)'
]);


useEffect( () => {
  const options = {
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/playlist/${playlistIDfromUser}`,
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '2ce6541653msh6b3fb4d89eb2d48p1bcea1jsn8ce75a4064a4'
    }
  };

  axios.request(options).then(function (response) {
    let returnedPlaylist = response.data;
    setPlaylist(returnedPlaylist);
  }).catch(function (error) {
    console.error(error);
  })
}, [playlistIDfromUser]);


 

  let songCover="";
  if(isAPlaylist && Object.keys(playingPlaylist).length!==0){
    songCover=playingPlaylist.tracks.data[songIndex].album['cover_big'];
  }else if(isAnAlbum && Object.keys(playingPlaylist).length!==0){
    songCover=playingPlaylist.cover_big;
  }else{
    return;
  }
 // const songCover= isAPlaylist && Object.keys(playingPlaylist) !== 0 ? playingPlaylist.tracks.data[songIndex].cover:playingPlaylist.cover;


  const playSong = (e) => {
    e.stopPropagation();
    dispatch(playerActions.playButtonPressed(playlist, songIndex));
  }

  const mute = (e) => {
    e.stopPropagation();
    dispatch(playerActions.muteSong());
  }

  const unmute = (e) => {
    e.stopPropagation();
    dispatch(playerActions.unmuteSong());
  }

  const activeSong = (e) => {
    e.stopPropagation();
    dispatch(playerActions.showActiveSong());
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

  //Player Stylings
  const wrapperStyles = css(bp({
    width:"100%",
    height:"80px",
    padding:"0 10px",
    display:"flex",
    justifyContent:"space-evenly",
    alignItems:"center"  
  }))
  const playerIconStyles = {
    width:'18px',
    height:'18px',
    margin:'0 10px',
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
    padding:'3px 0'
  }

  const songCoverPicStyles={
    width:'40px',
    height:'40px',
    borderRadius:'3px',
    margin:'0 10px',
  }


  const playButtonWrapper = {
    width:"40px",
    height:"40px",
    backgroundColor:"rgba(3, 61, 0,0.8)",
    borderRadius:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }

  const mobilePlayWrapper = css(bp({
    width:"40px",
    height:"40px",
    backgroundColor:"rgba(3, 61, 0,0.8)",
    borderRadius:"50%",
    display:["flex","none","none"],
    justifyContent:"center",
    alignItems:"center"
  }))

   const mplayerIconStyles = css(bp({
    display:['flex',"none","none"],
    width:'18px',
    height:'18px',
    margin:'0 10px',
    color:'#D1B894',
    cursor:'pointer'
  }));

  const playingSong = css(bp({
    width:["100%","200px","200px"],
    display:"flex",
    height:"100%",
    fontSize:"0.8rem",
    justifyContent:"space-between",
    alignItems:"center",
  }));
  

  const rangeWrapper = css(bp({
    width:["100%","calc(100% - 200px)","calc(100% - 400px)"],
    height:"100%",
    padding:"10px 20px",
    display:["none","flex","flex"],
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"column"
  }))

   const volumeStyles = css(bp({
    width:"200px",
    display:["none","none","flex"],
    height:"100%",
    fontSize:"0.8rem",
    justifyContent:"flex-start",
    alignItems:"center",
  }));


  return (
    <div className={wrapperStyles} onClick={activeSong}> 
     
      <div className={playingSong}>
       {songCover? <Wrapper width="60%">
          {songCover? <img src={songCover} alt="" css={songCoverPicStyles} />:''}
          <Wrapper width="calc(100% - 40px)" display="flex" flexDirection="column">
            <h3 css={songTitleStyles}>{songTitle}</h3> 
            <p css={songTitleStyles}>{artistName}</p> 
          </Wrapper>
        </Wrapper>: ""}

        {<Wrapper width="40%" display="flex" justifyContent="center" alignItems="center">  
          <MdOutlineFavorite css={playerIconStyles}  />
          
          <div className={mobilePlayWrapper} >
            {isPlaying && <IoMdPause className={mplayerIconStyles} onClick={pauseSong}/> }
            {!isPlaying && <IoMdPlay className={mplayerIconStyles} onClick={playSong}/> }  
          </div>
        </Wrapper>}
      </div>
          
       

      <div className={rangeWrapper}>
        <Wrapper width="100%" display="flex" justifyContent="center" alignItems="center" 
        fontSize="0.8rem" color="#D5EAF2">
          <p id="curreSongPostion" >0:00</p> 
          <input type="range" min="0"  max="100" step="1" id="songSlider" />
          <p id="songDuration">{songDuration}</p>
        </Wrapper>
      
         
        <Wrapper display="flex" justifyContent="center" alignItems="center">  
          <IoMdSkipBackward css={playerIconStyles} onClick={previousSong} />
          <div css={playButtonWrapper} >
            {isPlaying && <IoMdPause css={playerIconStyles} onClick={pauseSong}/> }
            {!isPlaying && <IoMdPlay css={playerIconStyles} onClick={playSong}/> }  
          </div>
          <IoMdSkipForward css={playerIconStyles} onClick={nextSong} />
        </Wrapper>
      </div>  

      <div className={volumeStyles}>
      {volumeOn?
          <BsFillVolumeUpFill  css={playerIconStyles}  onClick={unmute}/>  
          :<BsFillVolumeMuteFill css={playerIconStyles} onClick={mute} />
        }

        <input type="range" min="0" max="100" step="1" id="volumeSlider" className={playingSong}/>
      </div>
    </div>
  )
}

export default Player;
