/**@jsxImportSource  @emotion/react */
import { useSelector, useDispatch } from "react-redux";
import { songInPlaylistDoubleClicked
} from "../../redux/actions/audioPlayerActions";
import { css } from "@emotion/css";
import facepaint from "facepaint";
import {closeButton} from "../../redux/actions/otherActions";




const OpenedPlaylist = () => {
  
  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);
 
  let songslist = useSelector(state => state.playlistReducer.playlistToShow);
  
  console.log(songslist);

  const wrapperStyles={
    width:'100%',
    height:'calc(100% - 20px)',
    background:`linear-gradient(rgb(0,0,0) 20%, rgba(0,0,0,0.7) 300%)`,
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center', 
    position:'absolute',
    top:'0'  
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
    opacity:'0.7',
    padding: '0 10px',
    overflow:'hidden',
    '&:hover':{
      overflowY:'scroll',
    }
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
        { songslist.length > 0 ?
          songslist.map(song => 
          <li key={song.id} className={listStyles} 
          onDoubleClick={songDoubleClicked}
          >  
            <div css={title}>
              <span css={numbered}>
                {songslist.indexOf(song) + 1}
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
                {Math.floor(song.duration / 60)+ ':' + song.duration % 60}
            </p>
          </li>
          ):""}
      </ul>
    </div>
  )
}

export default OpenedPlaylist;
