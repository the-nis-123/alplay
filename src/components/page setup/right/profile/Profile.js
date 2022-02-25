/**@jsxImportSource @emotion/react */
import Wrapper from "../../../global components/Wrapper";
import {FaUserFriends, FaUsers, FaUserEdit} from "react-icons/fa";
import {AiOutlineLogout} from "react-icons/ai";
import {IoInformationCircle} from "react-icons/io5";
import {BsFillDisplayFill} from "react-icons/bs";
import {RiAdvertisementFill} from "react-icons/ri";
import {FcPrivacy} from "react-icons/fc";

const Profile = () => {
  const headingStyles={
    width: '95%',
    height: '30px',
    padding: '10px',
  }

  const IconsStyles = {
    margin:'0 5px',
    color:'limegreen',
    fontSize:'1.3rem'
  }

  return (
    <Wrapper Wrapper width="100%" height ="100%"  padding="0 10px 10px 0" 
     display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center"
       
    >
      <h3 css={headingStyles}>Profile</h3>
      <Wrapper width="100%" height="100%" display="flex" flexDirection="column" justifyContent="flex-start" 
      alignItems="flex-start" borderRadius="10px">
        <Wrapper width="100%"  cursor="pointer" padding="10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <FaUserFriends css={IconsStyles}/><span>Followers</span>
        </Wrapper>
        <Wrapper width="100%" cursor="pointer" padding="10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <FaUsers css={IconsStyles}/><span>Following</span>
        </Wrapper>
        <Wrapper width="100%" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <FaUserEdit css={IconsStyles}/><span>Edit Profile</span>
        </Wrapper> 
        <Wrapper width="100%" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <BsFillDisplayFill css={IconsStyles}/><span>Dispaly Settings</span>
        </Wrapper>
        <Wrapper width="100%" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <FcPrivacy css={IconsStyles}/><span>Privacy and Security Settings</span>
        </Wrapper>
        <Wrapper width="100%"  cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <span>Terms of Use</span>
        </Wrapper>
        <Wrapper width="100%" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <RiAdvertisementFill css={IconsStyles}/><span>Advertising</span>
        </Wrapper>
        <Wrapper width="100%" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <IoInformationCircle css={IconsStyles}/><span>About</span>
        </Wrapper>
        <Wrapper width="100%" cursor="pointer" margin="4px 0" padding="5px 10px" borderRadius="10px" display="flex" justifyContent="flex-start" alignItems="center" fontSize="1rem">
          <AiOutlineLogout css={IconsStyles}/><span>Logout</span>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default Profile;
