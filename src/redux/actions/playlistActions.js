
export const markSongAsFavorite = ()=>{
  return {type:'MARK_SONG_AS_FAVORITE'}
}

export const playlistClicked = (songsList)=>{
  return {
    type:'SHOW_SONGS_IN_CLICKED_PLAYLIST',
    payload:songsList
  }
}


export const albumClicked = (songsList)=>{
  return {
    type:'SHOW_SONGS_IN_CLICKED_ALBUM',
    payload:songsList
  }
}


export const songInPlaylistDoubleClicked = (id)=>{
  return {
    type:'LOAD_AND_PLAY_THIS_TRACK',
    payload:id
  }
}


export const playAplaylist = (playlist, id)=>{
  return {
    type:'LOAD_AND_PLAY_THIS_PLAYLIST',
    payload:{playlist, id}
  }
}


export const playAnAlbum = (playlist, id)=>{
  return {
    type:'LOAD_AND_PLAY_THIS_ALBUM',
    payload:{playlist, id}
  }
}
