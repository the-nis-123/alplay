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


export const nextSongButtonPressed  = (playlist,songindex) =>{
  return{
    type:"PLAY_NEXT_SONG",
    payload:{
      songindex:songindex,
      playlist:playlist
    }
  }
}

export const previousSongButtonPressed = (playlist,songindex) =>{
   return{
    type:"PLAY_PREVIOUS_SONG",
    payload:{
      songindex:songindex,
      playlist:playlist
    }
  }
  
}

export const songRepeatButtonPressed = () =>{
  
}


export const repeatAllSongsButtonPressed = () =>{
  
}

export const songRepeatOff = () =>{

}
  