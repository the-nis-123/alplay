/**@jsxImportSource @emotion/react */
import Wrapper from "../../global components/Wrapper";
import {BsAlarm} from "react-icons/bs";
import {RiShareForwardFill} from "react-icons/ri";
import {MdFavorite} from "react-icons/md";

const EventReactions = () => {
  const eventDetailsStyles = {
    fontSize:'0.9rem'
  }

  const eventNameStyles = {
   
  }
  
  const reactionsIconsStyles = {
    margin:'5px',
    color:'#D5EAF2'
  }
  return (
    <Wrapper width="100%" borderRadius="10px" height ="100%" display="flex" flexDirection="column"
    justifyContent="space-between" alignItems="flex-start"  
    padding="10px 0" background="linear-gradient(rgba(30, 113, 64, 0.4), rgba(0,0,0,0.8))"
    >
     <Wrapper display="flex" flexDirection="column" padding="10px" color=" #E1E8ED">
       <h3 css={eventNameStyles}>Event Name</h3>
       <p css={eventDetailsStyles}>Venue:</p>
       <p css={eventDetailsStyles}>Date:</p>
       <p css={eventDetailsStyles}>Host:</p>
       <p css={eventDetailsStyles}>Fee:</p>
     </Wrapper>
     <Wrapper width="100%" display="flex" alignItems="center" justifyContent="center" fontSize="0.8rem">
      <Wrapper display="flex" flexDirection="row-reverse" alignItems="center" 
      justifyContent="center" margin="5px"     color='#D5EAF2'
      >
        <span>Reminder</span><BsAlarm css={reactionsIconsStyles}/>
      </Wrapper>
      <Wrapper display="flex" flexDirection="row-reverse" alignItems="center" 
      justifyContent="center" margin="5px"   color='#D5EAF2'
      >
        <span>Interested</span><MdFavorite css={reactionsIconsStyles}/>
      </Wrapper>
      <Wrapper display="flex" flexDirection="row-reverse" alignItems="center" 
      justifyContent="center" margin="5px"   color='#D5EAF2'
      >
        <span>Share</span><RiShareForwardFill css={reactionsIconsStyles}/>
      </Wrapper>
     </Wrapper>
    </Wrapper>
  )
}

export default EventReactions;
