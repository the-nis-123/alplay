
export const userChatClicked = ()=>{
  return {type:'SHOW_THIS_CONVERSATION'}
}

export const chatSettingsIconClicked = ()=>{
  return {type:'SHOW_THIS_CHAT_SETTINGS'}
}

export const chatCallIconClicked = ()=>{
  return {type:'START_A_VOICE_CALL'}
}

export const chatVideoIconClicked = ()=>{
  return {type:'START_A_VIDEO_CALL'}
}

export const chatBackIconClicked = ()=>{
  return {type:'GO_BACK_TO_PREVIOUS_STATE'}
}