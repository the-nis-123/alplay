/**@jsxImportSource @emotion/react */
import Wrapper from "../../global components/Wrapper";
import {IoMdPause, IoMdPlay,IoMdSkipBackward, IoMdSkipForward, IoMdShuffle, IoMdVolumeMute, IoMdVolumeHigh} from "react-icons/io";
import {RiPlayListFill} from "react-icons/ri";
import { useDispatch, useSelector} from "react-redux";
import * as audioPlayerActions from "../../../redux/actions/audioPlayerActions";
import {RiRepeatOneFill, RiRepeat2Line} from "react-icons/ri";



const Player = () => {
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
  

  const {isPlaying, repeatOff, repeatOneSong, repeatPlaylist, shuffleButton,
     volumeOn,showCurrentPlaylist ,songIndex ,chosenPlaylist,songTime, songDuration
    } = useSelector( state => state.audioPlayerReducer );

 

  //Player Stylings
  const playerIconStyles = {
    fontSize:'0.8rem',
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
    fontSize:'0.8rem',
    textAlign:'left',
    width:'80%',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    color:'limegreen',
  }


  const songCountStyles = {
    fontSize:'0.8rem',
    textAlign:'right',
    color:'limegreen',
    width:'60px'
  }

  const songCoverPicStyles={
    width:'40px',
    height:'30px',
    borderRadius:'15%',
    margin:'0 10px'
  }


  return (
    <Wrapper width="100%" height ="100px" backgroundColor="black" padding="10px"
    display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center"  
    > 
      
        <Wrapper width="80%" display="flex" justifyContent="space-between" alignItems="center" margin="0 0 10px 0">
          <Wrapper width="80%" display="flex" justifyContent="flex-start" alignItems="center">
            <img src={chosenPlaylist[songIndex].songPic} alt="" css={songCoverPicStyles} />
            <p css={songTitleStyles}>{chosenPlaylist[songIndex].songName}</p>
          </Wrapper>
          <p css={songCountStyles}>{songIndex + 1} / {chosenPlaylist.length}</p>
        </Wrapper>
        <Wrapper width="100%" display="flex" justifyContent="center" alignItems="center" 
        fontSize="0.8rem" color="#D5EAF2">
          <p id="curreSongPostion" >{songTime}</p> 
          <input type="range" min="0"  max="100" step="1" id="songSlider" value="0" onChange={changeSongPosition}/>
          <p id="songDuration">{songDuration}</p>
        </Wrapper>
      

      <Wrapper width="100%" padding="10px 20px" display="flex" justifyContent="space-between" alignItems="center">
        <Wrapper display="flex" justifyContent="center" alignItems="center">
          <IoMdSkipBackward css={playerIconStyles} onClick={previousSong} />
          <Wrapper display="flex" justifyContent="center" alignItems="center">
            {isPlaying && <IoMdPause css={playerIconStyles} onClick={pauseSong}/> }
            {!isPlaying && <IoMdPlay css={playerIconStyles} onClick={playSong}/> }  
          </Wrapper>
          <IoMdSkipForward css={playerIconStyles} onClick={nextSong} />
        </Wrapper>

        <Wrapper display="flex" justifyContent="center" alignItems="center"> 
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
        </Wrapper>
      </Wrapper>  
    </Wrapper>
  )
}

export default Player;
