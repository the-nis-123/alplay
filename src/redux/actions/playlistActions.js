
export const markSongAsFavorite = ()=>{
  return {type:'MARK_SONG_AS_FAVORITE'}
}

export const saveSongForOffline = ()=>{
  return {type:'SAVE_A_SONG_FOR_OFFLINE'}
}

export const shareThisSong = ()=>{
  return {type:'SHARE_THIS_SONG'}
}


export const songCollectionClicked = (songsList)=>{
  return {
    type:'SHOW_CLICKED_SONGS_COLLECTION',
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
    type:'LOAD_AND_PLAY_A_PLAYLIST',
    payload:playlistId
  }
}


export const playAnAlbum = (albumId)=>{
  return {
    type:'LOAD_AND_PLAY_AN_ALBUM',
    payload:albumId
  }
}
