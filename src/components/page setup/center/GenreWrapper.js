import React from "react";
import GenreLable from "./GenreLable";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const  GenreWrapper = ({genresArr}) => {
   const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 999 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 999, min: 700 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
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
      genresArr.map(item => {
        return(
          <GenreLable  key={genresArr.indexOf(item) + 1} genreName={item} />
        )}
      )
    }
  </Carousel>
  );
}

export default GenreWrapper;