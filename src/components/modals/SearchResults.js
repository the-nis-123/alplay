/**@jsxImportSource  @emotion/react */
import { useSelector, useDispatch } from "react-redux";
import {RiShareForwardFill} from "react-icons/ri";
import {ImDownload3} from "react-icons/im";
import {MdFavorite} from "react-icons/md";
import {
  markSongAsFavorite, saveSongForOffline, 
  shareThisSong, songInPlaylistDoubleClicked
} from "../../redux/actions/audioPlayerActions";
import { css } from "@emotion/css";
import {useEffect, useState} from "react";
import axios from "axios";
import facepaint from "facepaint";
import {closeButton} from "../../redux/actions/otherActions";


const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  
  const searchvalue = useSelector(state => state.searchReducer.searchValue); 
  
  useEffect( () => {
    if(searchvalue){
        const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: `${searchvalue}`},
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': '2ce6541653msh6b3fb4d89eb2d48p1bcea1jsn8ce75a4064a4'
        }
      };

      axios.request(options).then((response) => {
        const returnedData = response.data;
       if(returnedData.data){
          setSearchResults(returnedData.data);
          console.log(returnedData.data);
       }else{
          console.log('something went wrong');
       }
    }).catch((error) => {
      console.error(error);
    })
  }
},[searchvalue]);



  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);


  const wrapperStyles={
    width:'100%',
    height:'calc(100% - 60px)',
    background:`linear-gradient(rgb(0,0,0) 20%, rgba(0,0,0,0.2) 300%)`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize:'contain',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center', 
    position:'absolute',
    top:'40px'  
  }

  const headingStyles={
    width: '100%',
    color:'#D1B894',
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: '10px',
    fontSize:'1rem'
  }

  const listContainerStyles = {
    width:'100%',
    height:'calc(100% - 30px)',
    overflow:'auto',
    opacity:'0.7',
    padding: '0 10px',
  }

  const listStyles = css(bp({
    margin: '5px 0',
    padding:"5px 0",
    fontSize:'0.9rem',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:hover':{
      backgroundColor:'yellow',
      color:'darkgreen',

      '#songActions':{
        display: 'flex',
      }
    },

    '#songActions':{
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex:'100000'
    }
  }));

  const icons = css(bp({
    margin: '5px',
    color:'darkgreen',
    cursor: 'pointer',
    fontSize:'0.9rem'
  }))

  const songCoverPicStyles={
    width:'40px',
    height:'40px',
    borderRadius:'3px',
    margin:'0 10px'
  }

  const numbered = {
    width:'20px',
    textAlign:'center',
    fontWeight:'bold'
  }

  const boldDetails = {
    fontWeight:'bold',
    display:'inline-block',
    width:"120px",
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
  }

   const title = {
    textAlign:'left',
    width:'45%',
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
  }

   const album = {
    textAlign:'left',
    width:'20%',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
  }

   const duration = {
    textAlign:'center',
    width:'30%',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }

   const closebutton = {
   color:"red",
   cursor:"pointer"
  }

  //dispatch some actions 
  let dispatch = useDispatch();
  //song double clicked, play import PropTypes from 'prop-types'
  let songDoubleClicked = (e) => {
    e.stopPropagation();
    dispatch(songInPlaylistDoubleClicked());
  }

  let markThisSongAsFavorite = (e) => {
    e.stopPropagation();
    dispatch(markSongAsFavorite());
  }

  let downloadThisSong = (e) => {
    e.stopPropagation();
    dispatch(saveSongForOffline());
  }

  let shareSong = (e) => {
    e.stopPropagation();
    dispatch(shareThisSong());
  }

  let close = (e) => {
    e.stopPropagation();
    dispatch(closeButton());
  }
  

  return (
    <div css={wrapperStyles}>
      <h3 css={headingStyles}>
        <span css={title}># TITLE</span>
        <span css={album}>ALBUM</span>
        <span css={duration}>DURATION</span>
        <span onClick={close} css={closebutton}>X</span>
      </h3>
      <ul css={listContainerStyles}>
        {searchResults.length > 0 ?
          searchResults.map(song => 
          <li key={song.id} className={listStyles} 
          onDoubleClick={songDoubleClicked}
          >  
            <div css={title}>
              <span css={numbered}>
                {searchResults.indexOf(song) + 1}
              </span>
              <img src={song.album['cover']} alt="" css={songCoverPicStyles} />
              <p>
                <span css={boldDetails}>{song.title}</span>
                <br/>
                <span>{song.artist['name']}</span>
              </p>
            </div>
            <span css={album}>{song.album['title']}</span>
            <p css={duration}>
              <span id="songActions">
                <ImDownload3 className={icons} onClick={downloadThisSong}/>
                <MdFavorite className={icons} onClick={markThisSongAsFavorite}/>
                <RiShareForwardFill className={icons} onClick={shareSong}/>
              </span>
              <span>
                {Math.floor(song.duration / 60)+ ':' + song.duration % 60}
              </span>
            </p>
          </li>
          ):""}
      </ul>
    </div>
  )
}

export default SearchResults;
