import React from "react";
import Artist from "./Artist";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const  ArtistWrapper = ({artistsArr}) => {
   const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
};

return (
  <Carousel 
    swipeable={true}
    showDots={false}
    responsive={responsive}
    infinite={true}
    keyBoardControl={true}
    removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
  >
    {
      artistsArr.map(item => {
        return(
          <Artist  key={item} artistid={item} />
        )}
      )
    }
  </Carousel>
  );
}

export default ArtistWrapper;