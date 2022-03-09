import React from "react";
import AlbumBlock from "./AlbumBlock";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const  AlbumWrapper = ({albumsArr}) => {
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
    removeArrowOnDeviceType={["mobile","tablet","desktop"]}
  >
    {
      albumsArr.map(item => {
        return(
          <AlbumBlock  key={item} albumId={item} />
        )}
      )
    }
  </Carousel>
  );
}

export default AlbumWrapper;