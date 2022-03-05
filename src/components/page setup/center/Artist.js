/**@jsxImportSource @emotion/react */
import axios from 'axios';
import { useEffect, useState } from 'react';

const Artist = ({artistid}) => {

  const [artist, setArtist] = useState([]);
 
  useEffect(()=>{
        
    const options = {
      method: 'GET',
      url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistid}`,
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '2ce6541653msh6b3fb4d89eb2d48p1bcea1jsn8ce75a4064a4'
      }
    };


    axios.request(options).then(function (response) {
      let returnedArtist = response.data;
      //console.log(returnedArtist);
      setArtist(returnedArtist);
    }).catch(function (error) {
      console.error(error);
    });
    },[artistid]
  );

  const profilepic = {
    position: 'absolute',
    top: '0',
    left: '0',
    width:"100%",
    height:"220",
    borderRadius:"8px",
    border:"none",
    outline:"none"
  }

  const wrapperStyles = {
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

  const buttonStyles = {
    width:"160px",
    padding:'10px 30px',
    borderRadius:'20px',
    border:'none',
    outline:'none',
    margin:'6px 0',
    '&:hover': {
      cursor: 'pointer'
    }
  }

  const detailsWrapper = {
    width:"100%",
    height :"70px",
    display:"flex",
    flexDirection:"column",
    justifyContent:'space-between',
    alignItems:'center',
    position:'absolute',
    bottom:'10px',
    left:'0',
  }

  const innerWrapper = {
    display:"flex",
    width:"100%",
    alignItems:"center",
    justifyContent:"space-evenly"
  }

  return (
    <div css={wrapperStyles}>
      <img src={artist.picture} alt="" css={profilepic} />
      <div css={detailsWrapper}>
        <h2>{artist.name}</h2>
        <button css={buttonStyles}>Follow</button>
        <div css={innerWrapper}> 
          <p>Albums: {artist.nb_album}</p> 
          <p>Followers: {artist.nb_fan}</p>
        </div>
      </div>
    </div>
  )
}

export default Artist