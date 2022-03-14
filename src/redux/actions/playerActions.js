export const songInPlaylistDoubleClicked = (songID) =>{
  return{
    type:"PLAY_THIS_SONG",
    payload:songID
  }
}

export const pauseButtonPressed = () => {
  return {
    type:"PAUSE_MUSIC"
  }
}

export const playButtonPressed = (playlist, songIndex) =>{
  return{
    type:"PLAY_SONG",
    payload:{
      playlist:playlist,
      songIndex:songIndex
    }
  }
}

export const shuffleButtonPressed = () =>{
  
}

export const shuffleButtonOffPressed = () =>{
  
}


export const nextSongButtonPressed  = () =>{
  
}

export const previousSongButtonPressed = () =>{
  
}

export const songRepeatButtonPressed = () =>{
  
}


export const repeatAllSongsButtonPressed = () =>{
  
}

export const songRepeatOff = () =>{

}
  