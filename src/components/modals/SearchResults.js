/**@jsxImportSource  @emotion/react */
import { useSelector, useDispatch } from "react-redux";
import {
  songInPlaylistDoubleClicked
} from "../../redux/actions/playlistActions";
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
    height:'calc(100% - 50px)',
    background:`linear-gradient(rgba(0,0,0,0.99), rgba(0,0,0,0.99))`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize:'contain',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center', 
    position:'absolute',
    top:'50px'  
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
     margin: '10px 0',
    height:"60px",
    width:"100%",
    padding:"5px 10px",
    fontSize:'0.9rem',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'rgba(255,255,255, 0.06)',
  }));

  const songCoverPicStyles={
    width:'60px',
    height:'60px',
    borderRadius:'3px',
    margin:'0 5px'
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

   const album = css(bp({
    display:["none", "none","inline-block"], 
    textAlign:'left',
    width:'20%',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
  }));

   const duration = css(bp({
    textAlign:'center',
    width:'30%',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    display:["none", "flex","flex"],
    alignItems:'center',
    justifyContent:'center'
  }))


  //dispatch some actions 
  let dispatch = useDispatch();
  //song double clicked, play import PropTypes from 'prop-types'
  let songDoubleClicked = (e) => {
    e.stopPropagation();
    dispatch(songInPlaylistDoubleClicked());
  }
  

  return (
    <div css={wrapperStyles}>
      <h3 css={headingStyles}>
        <span css={title}># TITLE</span>
        <span className={album}>ALBUM</span>
        <span css={duration}>DURATION</span>
      </h3>
      <ul css={listContainerStyles}>
        {searchResults.length > 0 ?
          searchResults.map(song => 
          <li key={song.id} className={listStyles} 
          onClick={songDoubleClicked}
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
            <span className={album}>{song.album['title']}</span>
            <p css={duration}>
              {Math.floor(song.duration / 60)+ ':' + song.duration % 60} 
            </p>
          </li>
          ):""}
      </ul>
    </div>
  )
}

export default SearchResults;
