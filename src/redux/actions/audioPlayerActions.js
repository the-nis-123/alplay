export const nextSongButtonPressed = ()=>{
  return {type:'PLAY_NEXT_SONG'}
}

export const previousSongButtonPressed = ()=>{
  return {type:'PLAY_PREVIOUS_SONG'}
}

export const playButtonPressed = ()=>{
  return {type:'PLAY_SONG'}
}

export const pauseButtonPressed = ()=>{
  return {type:'PAUSE_SONG'}
}

export const shuffleButtonPressed = ()=>{
  return {type:'SHUFFLE_SONGS'}
}

export const shuffleButtonOffPressed = ()=>{
  return {type:'SHUFFLE_SONGS_OFF'}
}

export const playlistButtonPressed = ()=>{
  return {type:'SHOW_CURRENT_PLAYLIST'}
}

export const hidePlaylistButtonPressed = ()=>{
  return {type:'HIDE_CURRENT_PLAYLIST'}
}

export const songRepeatButtonPressed = ()=>{
  return {type:'REPEAT_CURRENT_SONG'}
}

export const repeatAllSongsButtonPressed = ()=>{
  return {type:'REPEAT_CURRENT_PLAYLIST'}
}

export const songRepeatOff = ()=>{
  return {type:'PUT_REPEAT_OFF'}
}

export const muteButtonPressed = ()=>{
  return {type:'UNMUTE_SONG'}
}

export const volumeButtonPressed = ()=>{
  return {type:'MUTE_SONG'}
}

export const songDurationSliderMoved = ()=>{
  return {type:'CHANGE_CURRENT_SONG_POSITION'}
}


export const songDurationSliderDown = ()=>{
  return {type:'SEEK_SLIDER_DOWN'}
}


export const songDurationSliderUp = ()=>{
  return {type:'SEEK_SLIDER_UP'}
}

export const songVolumeSliderMoved = ()=>{
  return {type:'CHANGE_CURRENT_SONG_VOLUME'}
}


export const songInPlaylistDoubleClicked = ()=>{
  return {
    type:'PLAY_A_DOUBLE_CLICKED_SONG_FROM_PLAYLIST',
    payload:{
      id:''
    }
  }
}

export const markSongAsFavorite = ()=>{
  return {type:'MARK_SONG_AS_FAVORITE'}
}

export const saveSongForOffline = ()=>{
  return {type:'SAVE_A_SONG_FOR_OFFLINE'}
}

export const shareThisSong = ()=>{
  return {type:'SHARE_THIS_SONG'}
}





