import React from 'react'
import Login from './Login';
import Signup from './Signup';
import { useSelector } from 'react-redux';

const Authentication = () => {
  let registerStatus = useSelector(state=>state.authenticationReducer.isRegistered)
  return (
    <>
      {registerStatus?<Login/> :<Signup/>}
    </>
  )
}

export default Authentication;
