/**@jsxImportSource @emotion/react */
import EventReactions from "./EventReactions";

const EventBlock = ({eventPhoto, eventName, eventVenue, eventFee, eventHost, eventDate}) => {

  const eventStyles = {
    width:'95%',
    height:'150px',
    cursor:'pointer',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    margin: '5px',
    borderRadius:'10px',
    background:`linear-gradient(rgba(3, 61, 0, 0.1), rgba(0,0,0,0.6)), url(${eventPhoto})`,  
  }


  return (
    <div css={eventStyles}>
      <EventReactions/>
    </div>
  )
}

export default EventBlock;
