/**@jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import axios from "axios";
import facepaint from "facepaint";
import { css } from "@emotion/css";
import {IoMdPause, IoMdPlay} from "react-icons/io";
import {useDispatch} from "react-redux";
import {playAplaylist} from "../../../redux/actions/playlistActions";
import {pauseButtonPressed} from "../../../redux/actions/playerActions";


const  MiniBlock = ({playlistId, colorOne, colorTwo}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  
  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);
  
  const wrapperTwo = {
    width: '100%',
    height:"80px",
    margin:"2px 0",
    display: 'flex',
    background:`linear-gradient(to right, ${colorOne}, ${colorTwo})`,
     '&:hover':{
       cursor:'pointer',
      '#playpause':{
       visibility:'visible'
      }
    }
  }

  const wrapperThree = {
    width:'calc(100% - 60px)',
    padding:'0 10px',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position:"relative"
  }

  const photo = {
    width:'80px',
    height:'80px'
  }

   const playpauseStyles = css(bp({
    width: "45px",
    height:"45px",
    borderRadius:'50%',
    backgroundColor:'rgba(0, 0, 0, 0.9)',
    position:"absolute",
    right:"10px",
    display:"flex",
    visibility:['visible','hidden','hidden'],
    justifyContent: 'center',
    alignItems: 'center',
  }));

   const playPauseIconStyles = {
    color:"lawngreen",
    width: '50%',
    height:'auto'
  }


  const [playlist, setPlaylist] = useState(' ');
  //const [songsList, setSongsList] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://deezerdevs-deezer.p.rapidapi.com/playlist/${playlistId}`,
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '2ce6541653msh6b3fb4d89eb2d48p1bcea1jsn8ce75a4064a4'
      }
    };

    axios.request(options).then(function (response) {
      let returnedPlaylist = response.data;
      setPlaylist(returnedPlaylist);
      //console.log(returnedPlaylist);
    }).catch(function (error) {
      console.error(error);
    });
  }, [playlistId]
  );


  
  ///dispatching category actions
  let dispatch = useDispatch();

  let pauseCategory = (e) => {
     e.stopPropagation();
    dispatch(pauseButtonPressed());
    setIsPlaying(false);
  }

  let playCategory = (e) => {
     e.stopPropagation();
    dispatch(playAplaylist());
    setIsPlaying(true);
  }

 

  return(
    <div css={wrapperTwo} key={playlistId}>
      {playlist.picture?<img src={playlist.picture} alt="" css={photo} />:""}
      <div css={wrapperThree}>
        <h4>{playlist.title}</h4>
       {playlist.picture? <div id="playpause" className={playpauseStyles}>
          {isPlaying ?  <IoMdPause css={playPauseIconStyles} onClick={pauseCategory}/>:
          <IoMdPlay css={playPauseIconStyles} onClick={playCategory}/>}
        </div>:""}
      </div>
    </div>
  );
}
  

export default MiniBlock;