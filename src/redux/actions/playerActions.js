
export const pauseButtonPressed = () => {
  return {
    type:"PAUSE_MUSIC"
  }
}

export const playButtonPressed = () =>{
  return{
    type:"PLAY_SONG"
  }
}


export const nextSongButtonPressed  = () =>{
  return{
    type:"PLAY_NEXT_SONG",
  }
}

export const previousSongButtonPressed = () =>{
   return{
    type:"PLAY_PREVIOUS_SONG"
  }
  
}

export const unmuteSong = () =>{
  return {
    type:"UNMUTE_SONG"
  }
}


export const muteSong = () =>{
   return {
    type:"MUTE_SONG"
  }
}


export const showActiveSong = () =>{
  return {
    type:"SHOW_ACTIVE_SONG"
  }
}

export const closeMaxPlayer = () => {
  return{
    type:"CLOSE_MAX_PLAYER"
  }
}
  