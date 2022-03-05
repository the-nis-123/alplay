/**@jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import CategoryReactions from "./CategoryReactions";
import {IoMdPause, IoMdPlay} from "react-icons/io";
import { useDispatch} from "react-redux";
import axios from "axios";
import {playAnAlbum, songCollectionClicked} from "../../../redux/actions/playlistActions";
import {pauseButtonPressed} from "../../../redux/actions/audioPlayerActions";

const AlbumBlock = ({albumId}) => {

  
  const [album, setAlbum] = useState({});
  const [songsList, setSongsList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const categoryStyles = {
    width:'220px',
    height:'300px',
    position:'relative',
    margin: '5px',
    backgroundColor:'rgba(10, 61, 0, 0.2)',
    padding:'15px',
    borderRadius:'5px',
    //background:"linear-gradient(rgba(3, 61, 0, 0.1), rgba(0,0,0,0.6))", 
    '&:hover':{
      cursor:"pointer",
      backgroundColor:'rgba(10, 61, 0, 0.5)',
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
      height:"200px",
      borderRadius:"8px"
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
    dispatch(playAnAlbum(albumId));
  }
  
  let openThisCategory = (e) => {
    e.stopPropagation();
    dispatch(songCollectionClicked(songsList));
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
      //console.log(returnedAlbum);
      setSongsList(returnedAlbum.tracks);
    }).catch(function (error) {
      console.error(error);
    });}, [albumId]
  );


  return (
    <div onDoubleClick={openThisCategory} css={categoryStyles}>
      <img src={album.cover_medium} alt="" css={imageStyles}/>
      <CategoryReactions categoryName={album.title}/>
      <div id="playpause" css={playpauseStyles}>
        {isPlaying ?  <IoMdPause css={playPauseIconStyles} onClick={pauseCategory}/>:
        <IoMdPlay css={playPauseIconStyles} onClick={playCategory}/>}
      </div>
    </div>
  )
}

export default AlbumBlock;
