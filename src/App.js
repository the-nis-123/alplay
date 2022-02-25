import Authentication from './components/authentication/Authentication';
import Home from './components/page setup/Home';
import { useSelector } from 'react-redux';
import musicStoreTwo from './media/MusicStoreTwo';



export const playlists = [
  {playlistName:'House of DJs', playlistPath:musicStoreTwo},
  {playlistName:'Best of House', playlistPath:musicStoreTwo},
  {playlistName:'Bill Board ', playlistPath:musicStoreTwo},
  {playlistName:'EDM Exclusive', playlistPath:musicStoreTwo},
  {playlistName:'Deep House', playlistPath:musicStoreTwo},
  {playlistName:'Trance House', playlistPath:musicStoreTwo},
  {playlistName:'The Dance Off', playlistPath:musicStoreTwo},
  {playlistName:'Happy and Dancing', playlistPath:musicStoreTwo},
  {playlistName:'House of Dance', playlistPath:musicStoreTwo},
  {playlistName:'House Exclusive', playlistPath:musicStoreTwo},
  {playlistName:'Hits of Tomorrow', playlistPath:musicStoreTwo},
  {playlistName:'Dont Come Alone', playlistPath:musicStoreTwo},
  {playlistName:'House of EDM', playlistPath:musicStoreTwo},
  {playlistName:'Crazy Hours', playlistPath:musicStoreTwo},
  {playlistName:'Made for Now', playlistPath:musicStoreTwo},
  {playlistName:'Untapped', playlistPath:musicStoreTwo},
  {playlistName:'Indoor Party', playlistPath:musicStoreTwo},
  {playlistName:'Tomorrowland Special', playlistPath:musicStoreTwo},
  {playlistName:'Happy Vibes', playlistPath:musicStoreTwo},
  {playlistName:'Made for You', playlistPath:musicStoreTwo},
  {playlistName:'Meditation', playlistPath:musicStoreTwo},
  {playlistName:'Party Zombies', playlistPath:musicStoreTwo},
  {playlistName:'Dancemania', playlistPath:musicStoreTwo},
  {playlistName:'All Ages', playlistPath:musicStoreTwo},
  {playlistName:'Jam To This', playlistPath:musicStoreTwo},
  {playlistName:'Chill Vibes', playlistPath:musicStoreTwo},
  {playlistName:'The Young,and Partying', playlistPath:musicStoreTwo},
  {playlistName:'Uplifting', playlistPath:musicStoreTwo},
  {playlistName:'Dance Floor', playlistPath:musicStoreTwo},
  {playlistName:'Ibiza at Home', playlistPath:musicStoreTwo},
]


export const initialAppState = {
  isRegistered:true,
  isLoggedIn:false,
  leftsideBar:true,
  centerComponent:true,
  rightsideBar:true,
  chosenPlaylist:musicStoreTwo,
  songIndex:0,
  isPlaying:false,
  categoryIsPlaying:false,
  isSeeking:false,
  volumeOn:true,
  shuffleButtonOn:false,
  showPlaylist:false,
  repeatOneSong:false,
  repeatAllSongs:false,
  repeatOff:true,
  homeComponentIsLoaded: true,
  chatComponentIsLoaded: false,
  notificationComponentIsLoaded :false,
  profileComponentIsLoaded: false,
  playlistComponentIsLoaded:false,
  songTime:'--:--',
  songDuration:'--:--'
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
