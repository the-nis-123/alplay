import React from "react";
import PlaylistBlock from "./PlaylistBlock";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const  PlaylistWrapper = ({playlistsArr}) => {
 const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

return (
  <Carousel 
    swipeable={true}
    showDots={false}
    responsive={responsive}
    infinite={true}
    keyBoardControl={true}
    removeArrowOnDeviceType={["mobile"]}
  >
   
      {
        playlistsArr.map(item => {
          return(
            <PlaylistBlock key={item} playlistId={item} />
          )
        })
      }  
  </Carousel>
  );
}

export default PlaylistWrapper;