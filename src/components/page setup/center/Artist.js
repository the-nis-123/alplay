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
      console.log(returnedArtist);
      setArtist(returnedArtist);
    }).catch(function (error) {
      console.error(error);
    });
    },[artistid]
  );

  const profilepic = {
    width:'100px',
    height:'100px',
    borderRadius:'50%',
    margin:'0 0 6px 0',
    '&:hover':{
      cursor:'pointer'
    }
  }

  const wrapperStyles = {
   width:'200px',
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',
   margin:'0 10px'
  }

  const buttonStyles = {
    padding:'5px 15px',
    borderRadius:'20px',
    border:'none',
    outline:'none',
    margin:'6px 0',
    '&:hover': {
      cursor: 'pointer'
    }
  }

  return (
    <div css={wrapperStyles}>
      <img src={artist.picture} alt="" css={profilepic} />
      <h2>{artist.name}</h2>
      <button css={buttonStyles}>Follow</button>
      <div> 
        <p>Albums: {artist.nb_album}</p> 
        <p>Followers: {artist.nb_fan}</p>
      </div>
    </div>
  )
}

export default Artist