//import Authentication from './components/authentication/Authentication';
import Home from './components/page setup/Home';
//import { useSelector } from 'react-redux';


export const initialAppState = {
  
  playingPlaylist:[],
  playlistToShow:[],
  tracklistToShow:{},
  songIndex:0,
  isPlaying:false,
  searchValue:'',
  homeMenu:true,
  isAnAlbum:false, 
  isAPlaylist:true,
  playlistIDfromUser:1282483245,
  showAplaylist:false,
  showAnAlbum:false,
  volumeOn:true
}


function App() {
  //let loginStatus = useSelector(state=>state.authenticationReducer.isLoggedIn);
  return (
    <>
    {/* {loginStatus?  <Home/> : <Authentication/>} */}
    <Home/> 
    </>
  );
}

export default App;
