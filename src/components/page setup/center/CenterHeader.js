/**@jsxImportSource @emotion/react */
import Wrapper from "../../global components/Wrapper";
import Inputform from "../../global components/Inputform";
import {IoMdSearch} from"react-icons/io";
import { css } from "@emotion/css";
import {useEffect, useState} from "react";
import axios from "axios";
import facepaint
from "facepaint";

const CenterHeader = () => {
  const [searchvalue, setSearchVAlue] = useState('');

  const bp = facepaint([
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  const wrapperStyles = css(bp({
    width: ['', '50%'],
    height:'60px',
    display:['none','flex'],
    justifyContent:'center',
    alignItems:'center',
  }));

  const iconStyles = {
    '&:hover':{
      cursor: 'pointer'
    }
  }

  useEffect( ()=>{
    const options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
      params: {q: `${searchvalue}`},
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '2ce6541653msh6b3fb4d89eb2d48p1bcea1jsn8ce75a4064a4'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    })},[searchvalue]
  )

  return (
    <div className={wrapperStyles}
    >
      <Wrapper width="85% " height="30px" borderRadius="15px" backgroundColor="rgba(3, 61, 0,0.8)"
       display="flex" alignItems="center" justifyContent="center">
        <Inputform value={searchvalue} onChange={(event)=>setSearchVAlue(event.target.value)} width="95% " height="30px" padding="0 10px" borderRadius="15px" 
        backgroundColor="rgba(3, 61, 0,0.8)" placeholder="search alplay" color="lightgreen"/>
        <IoMdSearch css={iconStyles}/>
      </Wrapper>
    </div>
  )
}

export default CenterHeader;
