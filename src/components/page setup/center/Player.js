/**@jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import Wrapper from "../../global components/Wrapper";
import {IoMdPause, IoMdPlay,IoMdSkipBackward, IoMdSkipForward, IoMdShuffle, IoMdVolumeMute, IoMdVolumeHigh} from "react-icons/io";
import {RiPlayListFill} from "react-icons/ri";
import { useDispatch, useSelector} from "react-redux";
import * as audioPlayerActions from "../../../redux/actions/audioPlayerActions";
import {RiRepeatOneFill, RiRepeat2Line} from "react-icons/ri";
import axios from "axios";



const Player = () => {
  const [playlist, setPlaylist] = useState([]);
  
  const isAnAlbum  = useSelector( state => state.playlistReducer.isAnAlbum);
  const isAplaylist  = useSelector( state => state.playlistReducer.isAplaylist);
  const loadedPlaylistId  = useSelector( state => state.playlistReducer.loadedPlaylistId);

  useEffect( () => {

    if(isAplaylist && !isAnAlbum){
      const options = {
        method: 'GET',
        url: `https://deezerdevs-deezer.p.rapidapi.com/playlist/${loadedPlaylistId}`,
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': '2ce6541653msh6b3fb4d89eb2d48p1bcea1jsn8ce75a4064a4'
        }
      };

      axios.request(options).then(function (response) {
        let returnedPlaylist = response.data;
        setPlaylist(returnedPlaylist.tracks.data);
        console.log(returnedPlaylist.tracks.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
    else if(isAnAlbum && !isAplaylist){
       const options = {
      method: 'GET',
      url: `https://deezerdevs-deezer.p.rapidapi.com/album/${loadedPlaylistId}`,
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '2ce6541653msh6b3fb4d89eb2d48p1bcea1jsn8ce75a4064a4'
      }
    };

    axios.request(options).then(function (response) {
      let returnedAlbum = response.data;
      setPlaylist(returnedAlbum.tracks);
      console.log(returnedAlbum);
    }).catch(function (error) {
      console.error(error);});
    }else{
      console.log("playlist not found");
    }
  }, [loadedPlaylistId, isAnAlbum,isAplaylist]);

  

  
let audioTrack, volumeBar, seekBar;
audioTrack = document.createElement('audio');
//load track
const loadSong = (index) => {
  if(playlist){
    let loadedPlaylist = playlist;
    audioTrack.src= loadedPlaylist[index].link;
  }else{
    console.log('something went wrong');
  }
}

//loadSong(0);

// //change volume
// volumeBar = document.getElementById('volumeSlider');
// const setVolume  = () => {
//   audioTrack.volume = volumeBar.value / 100;
// }


// //seek in song
// seekBar = document.getElementById('songSlider');

// const seek  = () => {
//   let seekto = (seekBar.value/100) * audioTrack.duration;
//   audioTrack.currentTime = seekto;
// }

// //play next song
// const playNext = (state, index) => {
//   if(index < state.chosenPlaylist.length - 1){
//     loadSong(index + 1);
//     audioTrack.play();
//     return index + 1;
//   }else{
//     index = 0;
//     loadSong(index);
//     audioTrack.play();
//     return index;
//   }
// }

// //play previous song
// const playPrevious = (state, index) => {
//   if(index > 0 && index < state.chosenPlaylist.length){
//     loadSong(index - 1);
//     audioTrack.play();
//     return index - 1;
//   }else{
//     loadSong(state.chosenPlaylist.length - 1);
//     audioTrack.play();
//     return state.chosenPlaylist.length - 1;
//   }
// }



const songTime = playlist.length !== 0 ? Math.floor(playlist[0].duration / 60).toString() + ':' +( playlist[0].duration % 60).toString() :'0:00';
const songTitle = playlist.length !== 0 ? playlist[0].title : '';
const artistName = playlist.length !== 0 ? playlist[0].artist['name'] :'';
const songImage = playlist.length !== 0 ? playlist[0].album['cover'] : '';



































  //Play functionality implementations
  const dispatch = useDispatch();
  const playSong = (e) => {
    e.stopPropagation();
    dispatch(audioPlayerActions.playButtonPressed());
  }

  const pauseSong = (e)=>{
    e.stopPropagation();
    dispatch(audioPlayerActions.pauseButtonPressed());
  }

  const shuffleSongs = (e) => {
    e.stopPropagation();
    dispatch(audioPlayerActions.shuffleButtonPressed());
  }


  const shuffleSongsOff = (e) => {
    e.stopPropagation();
    dispatch(audioPlayerActions.shuffleButtonOffPressed());
  }

  const nextSong = (e)=>{
    e.stopPropagation();
    dispatch(audioPlayerActions.nextSongButtonPressed());
  }

  const previousSong = (e) => {
    e.stopPropagation();
    dispatch(audioPlayerActions.previousSongButtonPressed());
  }

  const unmuteSong = (e) => {
    e.stopPropagation();
    dispatch(audioPlayerActions.muteButtonPressed());
  }

  const muteSong = (e) =>{
    e.stopPropagation();
    dispatch(audioPlayerActions.volumeButtonPressed());
  }

  const showPlaylist = (e) => {
    e.stopPropagation();
    dispatch(audioPlayerActions.playlistButtonPressed());
  }

  const hidePlaylist = (e) => {
    e.stopPropagation();
    dispatch(audioPlayerActions.hidePlaylistButtonPressed());
  }

  const changeVolume = (e) =>{
    e.stopPropagation();
    dispatch(audioPlayerActions.songVolumeSliderMoved());
  }

  const changeSongPosition = (e) =>{
    e.stopPropagation();
    dispatch(audioPlayerActions.songDurationSliderMoved());
  }
  
  const repeatCurrentSong = (e)=> {
    e.stopPropagation();
    dispatch(audioPlayerActions.songRepeatButtonPressed());
  }

  const repeatCurrentPlaylist = (e) => {
    e.stopPropagation();
    dispatch(audioPlayerActions.repeatAllSongsButtonPressed())
  }

  const repeatIsOff = (e)=>{
    e.stopPropagation();
    dispatch(audioPlayerActions.songRepeatOff());
  }
  

  const {isPlaying, repeatOff, repeatOneSong, repeatPlaylist, 
    shuffleButton, volumeOn, showCurrentPlaylist, songIndex 
    } = useSelector( state => state.audioPlayerReducer );

 

  //Player Stylings
  const playerIconStyles = {
    width:'18px',
    height:'18px',
    margin:'0 10px',
    color:'#D1B894',
    cursor:'pointer'
  }

  const volumeStyles = {
    width:'60px !important'
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
    width:'80%',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    color:'limegreen',
    padding:'3px 0'
  }


  const songCountStyles = {
    textAlign:'right',
    color:'limegreen',
    width:'60px'
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


  return (
    <Wrapper width="100%" height ="100px" backgroundColor="black" padding="10px"
    display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center"  
    > 
      
        <Wrapper width="80%" display="flex" justifyContent="space-between" alignItems="center" margin="0 0 10px 0">
          <Wrapper width="80%" display="flex" justifyContent="flex-start" alignItems="center">
            <img src={songImage} alt="" css={songCoverPicStyles} />
            <Wrapper width="100%" display="flex" flexDirection="column">
              <h3 css={songTitleStyles}>{songTitle}</h3> 
              <p css={songTitleStyles}>{artistName}</p> 
            </Wrapper>
          </Wrapper>
          <p css={songCountStyles}>{songIndex + 1} / {playlist.length}</p>
        </Wrapper>
        <Wrapper width="100%" display="flex" justifyContent="center" alignItems="center" 
        fontSize="0.8rem" color="#D5EAF2">
          <p id="curreSongPostion" >0:00</p> 
          <input type="range" min="0"  max="100" step="1" id="songSlider" value="0" onChange={changeSongPosition}/>
          <p id="songDuration">{songTime}</p>
        </Wrapper>
      

      <Wrapper width="100%" padding="10px 20px" display="flex" justifyContent="center" alignItems="center">
        <Wrapper display="flex" justifyContent="center" alignItems="center">
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

        {/* <Wrapper display="flex" justifyContent="center" alignItems="center"> 
          <Wrapper display="flex" justifyContent="center" alignItems="center" width="calc(100% - 60px) !important">
            <Wrapper display="flex" justifyContent="center" alignItems="center">
              {repeatOneSong && <RiRepeatOneFill css={playerActiveIconStyles}  onClick={repeatCurrentPlaylist}/>}
              {repeatPlaylist && <RiRepeat2Line css={playerActiveIconStyles} onClick={repeatIsOff}/>} 
              {repeatOff && <RiRepeat2Line css={playerIconStyles}  onClick={repeatCurrentSong}/>}
            </Wrapper>
            <Wrapper display="flex" justifyContent="center" alignItems="center">
              {shuffleButton && <IoMdShuffle css={playerActiveIconStyles} onClick={shuffleSongsOff}/>}
              {!shuffleButton && <IoMdShuffle css={playerIconStyles} onClick={shuffleSongs}/>}
            </Wrapper>
            <Wrapper display="flex" justifyContent="center" alignItems="center">
              {showCurrentPlaylist ? <RiPlayListFill css={playerActiveIconStyles} onClick={hidePlaylist}/> :
              <RiPlayListFill css={playerIconStyles} onClick={showPlaylist}/>}
            </Wrapper>
            <Wrapper display="flex" justifyContent="center" alignItems="center">
              {!volumeOn && <IoMdVolumeMute css={playerIconStyles} onClick={unmuteSong}/> }
              {volumeOn && <IoMdVolumeHigh css={playerIconStyles} onClick={muteSong}/>}
            </Wrapper>
          </Wrapper>
          <input type="range" min="0" max="100" step="1" id="volumeSlider" onChange={changeVolume} css={volumeStyles}/>
        </Wrapper> */}
      </Wrapper>  
    </Wrapper>
  )
}

export default Player;
