/**@jsxImportSource @emotion/react */
import Wrapper from "../../global components/Wrapper";
import Inputform from "../../global components/Inputform";
import {IoMdSearch} from"react-icons/io";
import { css } from "@emotion/css";
import {useSelector, useDispatch} from "react-redux";
import facepaint from "facepaint";
import {userSearching} from "../../../redux/actions/otherActions";

const CenterHeader = () => {
  const searchValue = useSelector(state => state.searchReducer.searchValue);
  const dispatch = useDispatch();

  const searching = () =>{
    dispatch(userSearching());
  }

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

  
  return (
    <div className={wrapperStyles}
    >
      <Wrapper width="85% " height="30px" borderRadius="15px" backgroundColor="rgba(3, 61, 0,0.8)"
       display="flex" alignItems="center" justifyContent="center">
        <Inputform id="main-search" value={searchValue} onChange={searching} width="95% " height="30px" padding="0 10px" borderRadius="15px" 
        backgroundColor="rgba(3, 61, 0,0.8)" placeholder="search alplay" color="lightgreen"/>
        <IoMdSearch css={iconStyles}/>
      </Wrapper>
    </div>
  )
}

export default CenterHeader;
