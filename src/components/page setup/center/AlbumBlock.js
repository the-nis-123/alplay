/**@jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import CategoryReactions from "./CategoryReactions";
import {IoMdPause, IoMdPlay} from "react-icons/io";
import { useDispatch} from "react-redux";
import axios from "axios";
import {playAnAlbum, albumClicked} from "../../../redux/actions/playlistActions";
import {pauseButtonPressed} from "../../../redux/actions/playerActions";

const AlbumBlock = ({albumId}) => {

  
  const [album, setAlbum] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  
  const categoryStyles = {
    width:'240px',
    height:'320px',
    position:'relative',
    margin: '5px',
    backgroundColor:'rgba(10, 61, 0, 0.2)',
    padding:'10px',
    borderRadius:'5px',
  
    '&:hover':{
      cursor:"pointer",
      backgroundColor:'rgba(10, 61, 0, 0.3)',
      '#playpause':{
       display:'flex'
      }
    }
  }

   const categoryPlayingStyles = {
    width:'240px',
    height:'320px',
    position:'relative',
    margin: '5px',
    backgroundColor:'rgba(10, 61, 0, 0.2)',
    padding:'10px',
    borderRadius:'5px',
   
    cursor:"pointer",
    '&:#backgroundColor':'rgba(10, 61, 0, 0.3)',
    '#playpause':{
      display:'flex'
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
    zIndex:'1000',
    transform: 'translate(-22.5px, -22.5px)',
    '&:hover':{
      cursor:'pointer'
    }
   };

    const playPauseIconStyles = {
      color:"lawngreen",
      width: '50%',
      height:'auto'
    }

      
    const imageStyles = {
      width:"100%",
      height:"190px",
      borderRadius:"8px"
    }
   
  ///dispatching category actions
  let dispatch = useDispatch();

  let pauseCategory = (e) => {
    e.stopPropagation();
    dispatch(pauseButtonPressed());
    setIsPlaying(false);
  }

  let playCategory = (e) => {
    e.stopPropagation();
    setIsPlaying(true);
    dispatch(playAnAlbum(albumId));
  }
  
  let openThisCategory = (e) => {
    e.stopPropagation();
    dispatch(albumClicked(album));
  }
 
  

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: `https://deezerdevs-deezer.p.rapidapi.com/album/${albumId}`,
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '2ce6541653msh6b3fb4d89eb2d48p1bcea1jsn8ce75a4064a4'
      }
    };

    axios.request(options).then(function (response) {
      let returnedAlbum = response.data;
      setAlbum(returnedAlbum);
    }).catch(function (error) {
      console.error(error);
    });}, [albumId]
  );


  return (
    <div onDoubleClick={openThisCategory} css={ isPlaying? categoryPlayingStyles : categoryStyles}>
      {album.cover_medium?<img src={album.cover_medium} alt="" css={imageStyles}/>:''}
      {album.title?<CategoryReactions categoryName={album.title}/>:''}
      <div id="playpause" css={playpauseStyles}>
        {isPlaying ?  <IoMdPause css={playPauseIconStyles} onClick={pauseCategory}/>:
        <IoMdPlay css={playPauseIconStyles} onClick={playCategory}/>}
      </div>
    </div>
  )
}

export default AlbumBlock;
