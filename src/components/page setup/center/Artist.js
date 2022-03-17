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
    width:"170px",
    height:"170px",
    borderRadius:"50%",
    border:"none",
    outline:"none",
    margin:"0 auto"
  }

  const wrapperStyles = {
    width:'240px',
    height:'320px',
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"space-between",
    margin: '10px 0',
    backgroundColor:'rgba(10, 61, 0, 0.2)',
    padding:'15px',
    borderRadius:'5px',
    //background:"linear-gradient(rgba(3, 61, 0, 0.1), rgba(0,0,0,0.6))", 
    '&:hover':{
      cursor:"pointer",
      backgroundColor:'rgba(10, 61, 0, 0.3)',
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
    backgroundColor:"#588C32",
    '&:hover': {
      cursor: 'pointer'
    }
  }

  const detailsWrapper = {
    width:"100%",
    height :"120px",
    display:"flex",
    flexDirection:"column",
    justifyContent:'space-evenly',
    alignItems:'center',
  }

  const innerWrapper = {
    display:"flex",
    width:"100%",
    alignItems:"center",
    justifyContent:"space-evenly",
    fontSize:'0.8rem'
  }

  return (
    <div css={wrapperStyles}>
     {artist.picture_medium? <img src={artist.picture_medium} alt="" css={profilepic} />:''}
      <div css={detailsWrapper}>
       {artist.name? <h4>{artist.name}</h4> :''}
        {artist.name ?<button css={buttonStyles}>Follow</button>:''}
        <div css={innerWrapper}> 
         {artist.nb_album? <p>Albums: {artist.nb_album}</p>:'' }
         {artist.nb_fan? <p>Followers: {artist.nb_fan}</p>: ''}
        </div>
      </div>
    </div>
  )
}

export default Artist