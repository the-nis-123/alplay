/**@jsxImportSource @emotion/react */
import Wrapper from "../../global components/Wrapper";
import {IoMdPause, IoMdPlay,IoMdSkipBackward, IoMdSkipForward, IoMdShuffle} from "react-icons/io";
import { useDispatch, useSelector} from "react-redux";
import * as playerActions from "../../../redux/actions/playerActions";
import {RiRepeatOneFill, RiRepeat2Line} from "react-icons/ri";
import axios from "axios";
import { useState, useEffect } from "react";
import { css } from "@emotion/css";
import facepaint from "facepaint";

const Player = () => {

   const bp = facepaint([
    '@media(min-width: 200px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

const [playlist, setPlaylist] = useState({});
const [albumObject, setAlbumObject] = useState({});
const [songTitle, setSongTitle] = useState('');  
const [songCover, setSongCover] = useState('');  
const [artistName, setArtistName] = useState('');
const [songDuration, setSongDuration] = useState('');
const [songIndex, setSongIndex] = useState(0);      

let {isAnAlbum, isAPlaylist, playlistIDfromUser} = useSelector(state => state.playerReducer); 

useEffect( () => {
  if(!isAnAlbum && isAPlaylist){
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
      let songslist = returnedPlaylist.tracks.data;
      setPlaylist(songslist);
      setSongCover(songslist[0].album['cover']);
      setSongDuration(songslist[0].duration);
      setSongTitle(songslist[0].title);
      setArtistName(songslist[0].artist['name']);
    }).catch(function (error) {
      console.error(error);
    })

  }else if(!isAPlaylist && isAnAlbum){
      const options = {
      method: 'GET',
      url: `https://deezerdevs-deezer.p.rapidapi.com/album/${playlistIDfromUser}`,
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '2ce6541653msh6b3fb4d89eb2d48p1bcea1jsn8ce75a4064a4'
      }
    };

    axios.request(options).then(function (response) {
      let returnedAlbum = response.data;
      const songslist = returnedAlbum.tracks.data;
      setAlbumObject(returnedAlbum);
      setPlaylist(songslist);
      setSongCover(returnedAlbum.cover);
      setSongDuration(songslist[0].duration);
      setSongTitle(songslist[0].title);
      setArtistName(songslist[0].artist['name']);
    }).catch(function (error) {
      console.error(error);
    })

  }else{
    console.log('playlist not found');
  }

}, [playlistIDfromUser, isAnAlbum, isAPlaylist]);


  //Play functionality implementations
  const dispatch = useDispatch();
  const playSong = (e) => {
    e.stopPropagation();
    dispatch(playerActions.playButtonPressed(playlist, songIndex));
  }

  const pauseSong = (e)=>{
    e.stopPropagation();
    dispatch(playerActions.pauseButtonPressed());
  }

  const shuffleSongs = (e) => {
    e.stopPropagation();
    dispatch(playerActions.shuffleButtonPressed());
  }

  const shuffleSongsOff = (e) => {
    e.stopPropagation();
    dispatch(playerActions.shuffleButtonOffPressed());
  }

  const nextSong = (e)=>{
    e.stopPropagation();
    if(songIndex === playlist.length - 1 && isAPlaylist){
      setSongIndex(0);
      setSongCover(playlist[songIndex].album['cover']);
      setSongDuration(playlist[songIndex].duration);
      setSongTitle(playlist[songIndex].title);
      setArtistName(playlist[songIndex].artist['name']);
    }
    else if(songIndex < playlist.length - 1 && isAPlaylist){
      setSongIndex(songIndex + 1);
      setSongCover(playlist[songIndex].album['cover']);
      setSongDuration(playlist[songIndex].duration);
      setSongTitle(playlist[songIndex].title);
      setArtistName(playlist[songIndex].artist['name']);
    }
    else if(songIndex === playlist.length - 1 && isAnAlbum){
      setSongIndex(0);
      setSongCover(albumObject.cover);
      setSongDuration(playlist[songIndex].duration);
      setSongTitle(playlist[songIndex].title);
      setArtistName(playlist[songIndex].artist['name']);
    }else{
      setSongIndex(songIndex + 1);
      setSongCover(albumObject.cover);
      setSongDuration(playlist[songIndex].duration);
      setSongTitle(playlist[songIndex].title);
      setArtistName(playlist[songIndex].artist['name']);
    }
    dispatch(playerActions.nextSongButtonPressed(playlist, songIndex));
  }

  const previousSong = (e) => {
    e.stopPropagation();
    
    if(songIndex > 0 && isAPlaylist){
      setSongIndex(songIndex - 1);
      setSongCover(playlist[songIndex].album['cover']);
      setSongDuration(playlist[songIndex].duration);
      setSongTitle(playlist[songIndex].title);
      setArtistName(playlist[songIndex].artist['name']);
    }
    else if(songIndex === 0 && isAPlaylist){
      setSongIndex(playlist.length - 1);
      setSongCover(playlist[songIndex].album['cover']);
      setSongDuration(playlist[songIndex].duration);
      setSongTitle(playlist[songIndex].title);
      setArtistName(playlist[songIndex].artist['name']);
    }
    else if(songIndex > 0 && isAnAlbum){
      setSongIndex(songIndex - 1);
      setSongCover(albumObject.cover);
      setSongDuration(playlist[songIndex].duration);
      setSongTitle(playlist[songIndex].title);
      setArtistName(playlist[songIndex].artist['name']);
    }else{
      setSongIndex(playlist.length - 1);
      setSongCover(albumObject.cover);
      setSongDuration(playlist[songIndex].duration);
      setSongTitle(playlist[songIndex].title);
      setArtistName(playlist[songIndex].artist['name']);
    }

    if(songIndex > 0){
      setSongIndex(songIndex - 1);
    }
    else{
      setSongIndex(playlist.length - 1);
    }
     dispatch(playerActions.previousSongButtonPressed(playlist, songIndex));
  }

  const repeatCurrentSong = (e)=> {
    e.stopPropagation();
    dispatch(playerActions.songRepeatButtonPressed());
  }

  const repeatCurrentPlaylist = (e) => {
    e.stopPropagation();
    dispatch(playerActions.repeatAllSongsButtonPressed())
  }

  const repeatIsOff = (e)=>{
    e.stopPropagation();
    dispatch(playerActions.songRepeatOff());
  }
  
  const {isPlaying, repeatOff, repeatOneSong, repeatPlaylist, 
    shuffleButton 
    } = useSelector( state => state.playerReducer );

  //Player Stylings
  const playerIconStyles = {
    width:'18px',
    height:'18px',
    margin:'0 10px',
    color:'#D1B894',
    cursor:'pointer'
  }

  const playerActiveIconStyles = {
    fontSize:'0.8rem',
    margin:'0 10px',
    color:'teal',
    cursor:'pointer',
    "&:hover" : {
      cursor: 'pointer'
    }
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

  const playingSong = css(bp({
    display:["none","flex","flex"],
    fontSize:"0.8rem",
    justifyContent:"flex-start",
    alignItems:"center",
  }));

  const rangeWrapper = css(bp({
    width:["100%","100%","70%"],
    height:"100%",
    padding:"10px 20px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"column"
  }))


  return (
    <Wrapper width="100%" height ="80px"  padding="0 10px"
    display="flex" justifyContent="center" alignItems="center"  
    > 
      
      <div className={playingSong}>
        {songCover? <img src={songCover} alt="" css={songCoverPicStyles} />:''}
        <Wrapper width="100%" display="flex" flexDirection="column">
          <h3 css={songTitleStyles}>{songTitle}</h3> 
          <p css={songTitleStyles}>{artistName}</p> 
        </Wrapper>
      </div>
          
       

      <div className={rangeWrapper}>
        <Wrapper width="100%" display="flex" justifyContent="center" alignItems="center" 
        fontSize="0.8rem" color="#D5EAF2">
          <p id="curreSongPostion" >0:00</p> 
          <input type="range" min="0"  max="100" step="1" id="songSlider" />
          <p id="songDuration">{songDuration}</p>
        </Wrapper>
      
        <Wrapper width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <RiRepeat2Line css={playerIconStyles}  onClick={repeatCurrentSong}/>
          
          <Wrapper width="100%" display="flex" justifyContent="center" alignItems="center">  
            <Wrapper display="flex" justifyContent="center" alignItems="center">
              {shuffleButton && <IoMdShuffle css={playerActiveIconStyles} onClick={shuffleSongsOff}/>}
              {!shuffleButton && <IoMdShuffle css={playerIconStyles} onClick={shuffleSongs}/>}
            </Wrapper>
            
            <IoMdSkipBackward css={playerIconStyles} onClick={previousSong} />
            <div css={playButtonWrapper} >
              {isPlaying && <IoMdPause css={playerIconStyles} onClick={pauseSong}/> }
              {!isPlaying && <IoMdPlay css={playerIconStyles} onClick={playSong}/> }  
            </div>
            <IoMdSkipForward css={playerIconStyles} onClick={nextSong} />

            <Wrapper display="flex" justifyContent="center" alignItems="center">
              {repeatOneSong && <RiRepeatOneFill css={playerActiveIconStyles}  onClick={repeatCurrentPlaylist}/>}
              {repeatPlaylist && <RiRepeat2Line css={playerActiveIconStyles} onClick={repeatIsOff}/>} 
              {repeatOff && <RiRepeat2Line css={playerIconStyles}  onClick={repeatCurrentSong}/>}
            </Wrapper>
          </Wrapper>
{/* 
          <Wrapper display="flex" justifyContent="center" alignItems="center"> 
            <input type="range" min="0" max="100" step="1" id="volumeSlider" css={volumeStyles}/>
          </Wrapper> */}
        </Wrapper>
      </div>  
    </Wrapper>
  )
}

export default Player;
