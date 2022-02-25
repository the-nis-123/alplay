/**@jsxImportSource @emotion/react */
import RightHeader from "../page setup/right/RightHeader";
import LeftHeader from "../page setup/left/LeftHeader";
import CenterHeader from "../page setup/center/CenterHeader";

const Header = () => {
  const styles = {
    backgroundColor: "rgba(0, 51, 0,0.5)",
    width:"100%",
    height:"60px",
    display:"flex",
    justifyContent:"space-between", 
    alignItems:"center"
  }
  return (
    <div css={styles}>
      <LeftHeader/>
      <CenterHeader/>
      <RightHeader/>
    </div>
  )
}

export default Header;
