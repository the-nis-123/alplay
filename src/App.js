import {useEffect, useState} from "react";
import axios from "axios";
//import Authentication from './components/authentication/Authentication';
import Home from './components/page setup/Home';
//import { useSelector } from 'react-redux';


export const initialAppState = {
  playingPlaylist:{},
  playlistToShow:[],
  tracklistToShow:{},
  songIndex:0,
  isPlaying:false,
  searchValue:'',
  homeMenu:true,
  isAnAlbum:false, 
  isAPlaylist:true,
  showAplaylist:false,
  showAnAlbum:false,
  volumeOn:true,
  showActiveSong:false,
  songTitle:"",
  songDuration:"",
  artistName:"", 
}




function App() {
  //let loginStatus = useSelector(state=>state.authenticationReducer.isLoggedIn);
  const [playlist, setPlaylist]  = useState({});
  
  useEffect( () => {
    const options = {
      method: 'GET',
      url: "https://deezerdevs-deezer.p.rapidapi.com/playlist/1282483245",
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '2ce6541653msh6b3fb4d89eb2d48p1bcea1jsn8ce75a4064a4'
      }
    };

    axios.request(options).then(function (response) {
      let returnedPlaylist = response.data;
      setPlaylist(returnedPlaylist);
      initialAppState.playingPlaylist = playlist;
    }).catch(function (error) {
      console.error(error);
    })
  }, [playlist]);
  
  return (
    <>
    {/* {loginStatus?  <Home/> : <Authentication/>} */}
    <Home/> 
    </>
  );
}

export default App;
