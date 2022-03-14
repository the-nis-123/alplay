
export const markSongAsFavorite = ()=>{
  return {type:'MARK_SONG_AS_FAVORITE'}
}

export const saveSongForOffline = ()=>{
  return {type:'SAVE_A_SONG_FOR_OFFLINE'}
}

export const shareThisSong = ()=>{
  return {type:'SHARE_THIS_SONG'}
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


export const songInPlaylistDoubleClicked = ()=>{
  return {
    type:'PLAY_A_DOUBLE_CLICKED_SONG_FROM_PLAYLIST',
    payload:{
      id:''
    }
  }
}


export const playAplaylist = (playlistId)=>{
  return {
    type:'LOAD_AND_PLAY_THIS_PLAYLIST',
    payload:playlistId
  }
}


export const playAnAlbum = (albumId)=>{
  return {
    type:'LOAD_AND_PLAY_THIS_ALBUM',
    payload:albumId
  }
}
