/**@jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import CategoryReactions from "./CategoryReactions";
import axios from "axios";
import {useDispatch} from "react-redux";
import {IoMdPause, IoMdPlay} from "react-icons/io";
import {pauseButtonPressed} from "../../../redux/actions/audioPlayerActions";
import {playAplaylist, songCollectionClicked} from "../../../redux/actions/playlistActions";


const PlaylistBlock = ({playlistId}) => {
   
  const [playlist, setPlaylist] = useState({});
  const [songsList, setSongsList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  

  
  const categoryStyles = {
    width:'240px',
    height:'320px',
    margin: '5px',
    backgroundColor:'rgba(10, 61, 0, 0.2)',
    padding:'10px',
    borderRadius:"5px",
    position:"relative",
    //background:"linear-gradient(rgba(3, 61, 0, 0.1), rgba(0,0,0,0.6))", 
    '&:hover':{
      cursor:"pointer",
      backgroundColor: 'rgba(10, 61, 0, 0.3)',
      '#playpause':{
       display:'flex'
      }
    }
  }

   const playpauseStyles = {
    width: "45px",
    height:"45px",
    borderRadius:'50%',
    backgroundColor:'rgba(0, 0, 0, 0.9)',
    display: "none",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top:'20%',
    left: '74%',
    transform: 'translate(-22.5px, -22.5px)',
    zIndex:'1000',
    '&:hover':{
      cursor:'pointer'
    }
   };

  const playPauseIconStyles = {
    color:"lawngreen",
    width: '50%',
    height:'auto',
  }

  const imageStyles = {
    width:"100%",
    height:"190px",
    borderRadius:"8px",
  }
  

  ///dispatching category actions
  let dispatch = useDispatch();

  let pauseCategory = (e) => {
     e.stopPropagation();
    dispatch(pauseButtonPressed());
  }

  let playCategory = (e) => {
     e.stopPropagation();
     setIsPlaying(true);
     dispatch(playAplaylist(playlistId));
  }
 
  let openThisCategory = (e) => {
    e.stopPropagation();
    dispatch(songCollectionClicked(songsList));
  }

  useEffect(()=>{
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
      //console.log(returnedPlaylist.tracks.data);
      setSongsList(returnedPlaylist.tracks.data);
    }).catch(function (error) {
      console.error(error);
    });
    },[playlistId]
  );

  return (
    <div onDoubleClick={openThisCategory} css={categoryStyles}>
      {playlist.picture_medium? <img src={playlist.picture_medium} alt="" css={imageStyles} /> : ''}
      {playlist.description? <CategoryReactions description={playlist.description} categoryName={playlist.title}/> : ''}
      <div id="playpause" css={playpauseStyles}>
          {isPlaying ?  <IoMdPause css={playPauseIconStyles} onClick={pauseCategory}/>:
          <IoMdPlay css={playPauseIconStyles} onClick={playCategory}/>}
      </div>
    </div>
  )
}

export default PlaylistBlock;
