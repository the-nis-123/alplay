import Authentication from './components/authentication/Authentication';
import Home from './components/page setup/Home';
import { useSelector } from 'react-redux';
import musicStoreTwo from './media/MusicStoreTwo';


export const initialAppState = {
  isRegistered:true,
  isLoggedIn:false,
  leftsideBar:true,
  centerComponent:true,
  rightsideBar:true,
  chosenPlaylist:[],
  songIndex:0,
  isPlaying:false,
  categoryIsPlaying:false,
  isSeeking:false,
  volumeOn:true,
  shuffleButtonOn:false,
  showPlaylist:false,
  songsCollection:false,
  repeatOneSong:false,
  repeatAllSongs:false,
  repeatOff:true,
  homeComponentIsLoaded: true,
  chatComponentIsLoaded: false,
  notificationComponentIsLoaded :false,
  profileComponentIsLoaded: false,
  playlistComponentIsLoaded:false,
  songTime:'--:--',
  songDuration:'--:--',
  
  searchValue:'',
  homeMenu:true,
  loadedPlaylistId:1282483245,
  isAplaylist:true,
  isAnAlbum:false,
  currentSongID:'',
  playlistToShow:[]
}


function App() {
  let loginStatus = useSelector(state=>state.authenticationReducer.isLoggedIn);
  return (
    <>
    {loginStatus?  <Home/> : <Authentication/>}
    </>
  );
}

export default App;
