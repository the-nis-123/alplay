/**@jsxImportSource  @emotion/react */
import { useSelector, useDispatch } from "react-redux";
import {RiShareForwardFill} from "react-icons/ri";
import {ImDownload3} from "react-icons/im";
import {MdFavorite} from "react-icons/md";
import {
  markSongAsFavorite, saveSongForOffline, 
  shareThisSong, songInPlaylistDoubleClicked
} from "../../redux/actions/audioPlayerActions";
import Wrapper from "../global components/Wrapper";
import { css } from "@emotion/css";
import {useEffect, useState} from "react";
import axios from "axios";
import facepaint from "facepaint";



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

  let chosenPlaylist = useSelector(state=>state.audioPlayerReducer.chosenPlaylist);
  let currentSong = useSelector(state=>state.audioPlayerReducer.songIndex);

  const wrapperStyles={
    width:'100%',
    height:'calc(100% - 20px)',
    background:`linear-gradient(rgb(0,0,0) 20%, rgba(0,0,0,0.2) 300%), url(${chosenPlaylist[currentSong].songPic})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize:'contain',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    margin:"10px 0",   
  }

  const headingStyles={
    width: '90%',
    color:'lightgreen',
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    margin: '0 0 5px 0',
    fontSize:'1rem'
  }

  const listContainerStyles = {
    width:'100%',
    height:'calc(100% - 30px)',
    overflow:'auto',
    opacity:'0.7',
    padding:'0 0 0 40px'
  }

  const listStyles = css(bp({
    margin: '0 0 5px 0',
    fontSize:'0.9rem',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:hover':{
      color:'lightgreen',
    '#songActions':{
        display: 'flex',
      }
    },

    '#songActions':{
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }));

  const icons = css(bp({
    margin: '5px',
    color:'lightgreen',
    cursor: 'pointer',
    fontSize:'0.9rem'
  }))

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
  

  return (
    <div css={wrapperStyles}>
      <h3 css={headingStyles}>
        <Wrapper display="flex" justifyContent="space-between" alignItems="center" width="90%">
          <span>Results </span>
          <span></span>
        </Wrapper>
      </h3>
      <ul css={listContainerStyles}>
        {
          searchResults.map(song => 
          <li key={song.id} className={listStyles} 
          onDoubleClick={songDoubleClicked}
          >
            <span>{searchResults.indexOf(song) + 1}. {song.title}</span>
            <span id="songActions">
              <ImDownload3 className={icons} onClick={downloadThisSong}/>
              <MdFavorite className={icons} onClick={markThisSongAsFavorite}/>
              <RiShareForwardFill className={icons} onClick={shareSong}/>
            </span>
          </li>
          )}
      </ul>
  </div>
  )
}

export default SearchResults;
