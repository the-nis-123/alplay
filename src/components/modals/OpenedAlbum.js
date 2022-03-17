/**@jsxImportSource  @emotion/react */
import { useSelector, useDispatch } from "react-redux";
import { songInPlaylistDoubleClicked
 } from "../../redux/actions/playlistActions";
import { css } from "@emotion/css";
import facepaint from "facepaint";
import {closeButton} from "../../redux/actions/otherActions";




const OpenedAlbum = () => {
  
  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);
 
  let trackList = useSelector(state => state.playlistReducer.tracklistToShow);

  const wrapperStyles={
    width:'100%',
    height:'100%',
    background:`linear-gradient(rgba(0,0,0,0.99), rgba(0,0,0,0.99))`,
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
        <span className={album}>ALBUM</span>
        <span css={duration}>DURATION</span>
        <span onClick={close} css={closebutton}>X</span>
      </h3>
      <ul css={listContainerStyles}>
       { Object.keys(trackList).length !== 0 ?
            trackList.tracks.data.map(song => 
            <li key={song.id} className={listStyles} 
              onClick={songDoubleClicked}
            >  
              <div css={title}>
                <span css={numbered}>
                  {trackList.tracks.data.indexOf(song) + 1}
                </span>
                <img src={trackList.cover} alt="" css={songCoverPicStyles} />
                <p>
                  <span css={boldDetails}>{song.title}</span>
                  <br/>
                  <span>{song.artist['name']}</span>
                </p>
              </div>
              <span className={album}>{trackList.title}</span>
              <p css={duration}>
                {Math.floor(song.duration / 60)+ ':' + song.duration % 60}
              </p>
            </li>
          ):"loading"
        }
      </ul>
    </div>
  )
}

export default OpenedAlbum;
