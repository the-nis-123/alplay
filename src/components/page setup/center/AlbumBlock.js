/**@jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import CategoryReactions from "./CategoryReactions";
import {IoMdPause, IoMdPlay} from "react-icons/io";
import { useDispatch} from "react-redux";
import axios from "axios";
import facepaint from "facepaint";
import { css } from "@emotion/css";
import {playAnAlbum, albumClicked} from "../../../redux/actions/playlistActions";
import {pauseButtonPressed} from "../../../redux/actions/playerActions";

const AlbumBlock = ({albumId}) => {

  
  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);


  
  const [album, setAlbum] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  
  const categoryStyles = css(bp({
    width:'240px',
    height:'300px',
    position:'relative',
    margin: '10px 0',
    backgroundColor:['rgba(10, 61, 0, 0.4)','rgba(10, 61, 0, 0.2)','rgba(10, 61, 0, 0.2)'],
    padding:'10px',
    borderRadius:'5px',
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",

    '&:hover':{
      cursor:"pointer",
      backgroundColor:'rgba(10, 61, 0, 0.3)',
      '#playpause':{
       display:'flex'
      }
    }
  }));

   const categoryPlayingStyles = css(bp({
    width:'240px',
    height:'300px',
    position:'relative',
    margin: '10px 0',
    backgroundColor:['rgba(10, 61, 0, 0.4)','rgba(10, 61, 0, 0.2)','rgba(10, 61, 0, 0.2)'],
    padding:'10px',
    borderRadius:'5px',
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
   
    cursor:"pointer",
    '&:#backgroundColor':'rgba(10, 61, 0, 0.3)',
    '#playpause':{
      display:'flex'
    }
  }))

   const playpauseStyles = css(bp({
    width: "45px",
    height:"45px",
    borderRadius:'50%',
    backgroundColor:'rgba(0, 0, 0, 0.9)',
    display: ["flex","none","none"],
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
   }));

    const playPauseIconStyles = {
      color:"#D9910D",
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
    dispatch(playAnAlbum(album,0));
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
    <div onClick={openThisCategory} className={ isPlaying? categoryPlayingStyles : categoryStyles}>
      {album.cover_medium?<img src={album.cover_medium} alt="" css={imageStyles}/>:''}
      {album.title?<CategoryReactions categoryName={album.title}/>:''}
      {album.cover_medium ? <div id="playpause" className={playpauseStyles}>
        {isPlaying ?  <IoMdPause css={playPauseIconStyles} onClick={pauseCategory}/>:
        <IoMdPlay css={playPauseIconStyles} onClick={playCategory}/>}
      </div>:"loading"}
    </div>
  )
}

export default AlbumBlock;
