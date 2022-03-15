/**@jsxImportSource @emotion/react */
import Wrapper from "../../global components/Wrapper";
import Inputform from "../../global components/Inputform";
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
    width: '100%',
    height:'45px',
    display:"flex",
    marginTop:"10px",
    justifyContent:'center',
    alignItems:'center',
  }));


  
  return (
    <div className={wrapperStyles}
    >
      <Wrapper margin="0 10px" width="100%"  height="45px" backgroundColor="rgba(3, 61, 0,0.1)"
       display="flex" alignItems="center" justifyContent="center">
        <Inputform id="main-search" value={searchValue} onChange={searching} width="100% " height="45px" padding="0 10px"
        backgroundColor="rgba(3, 61, 0,0.2)" placeholder="search alplay" color="lightgreen"/>
      </Wrapper>
    </div>
  )
}

export default CenterHeader;
