/**@jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import CategoryReactions from "./CategoryReactions";
import axios from "axios";
import {useDispatch} from "react-redux";
import {songCollectionClicked} from "../../../redux/actions/playlistActions";

const AlbumBlock = ({albumId}) => {
   const [album, setAlbum] = useState(' ');
   const [songsList, setSongsList] = useState([]);
 
  

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
      setSongsList(returnedAlbum.tracks.data);
    }).catch(function (error) {
      console.error(error);
    });}, [albumId]
  );


  const categoryStyles = {
    width:'97%',
    height:'180px',
    display:'flex',
    alignItems: 'center',
    margin: '5px',
    borderRadius:'6px',
    backgroundColor:'rgba(10, 61, 0, 0.8)',
    padding:'20px',
    // background:`linear-gradient(rgba(3, 61, 0, 0.1), rgba(0,0,0,0.6)), url(${album.cover})`, 
    '&:hover':{
      '#categoryReactions, #playpause':{
       display:'flex'
      }
    }
  }

  let dispatch = useDispatch();
  
  let openThisCategory = (e) => {
    e.stopPropagation();
    dispatch(songCollectionClicked(songsList));
  }



  return (
    <div onDoubleClick={openThisCategory} css={categoryStyles}>
      <CategoryReactions categoryName={album.title}/>
    </div>
  )
}

export default AlbumBlock;
