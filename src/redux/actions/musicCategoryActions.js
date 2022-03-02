
export const downloadIconClicked = (playlistid)=>{
  return {
    type:'SAVE_THIS_AS_CATEGORY',
    payload:playlistid
  }
}

export const recommendIconClicked = (playlistid)=>{
    return {
    type:'RECOMMEND_THIS_CATEGORY',
    payload:playlistid
  }
}

export const likeIconClicked = (playlistid)=>{
  return {
    type:'LIKE_THIS_CATEGORY',
    payload:playlistid
  }
}

export const musicCategoryClicked = (playlistid) =>{
  return {
    type:'PLAY_THIS_CATEGORY',
    payload:playlistid
  }
}