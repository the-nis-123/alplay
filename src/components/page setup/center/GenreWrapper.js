import React from "react";
import GenreLable from "./GenreLable";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const  GenreWrapper = ({genresArr}) => {
   const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
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
    removeArrowOnDeviceType={["mobile"]}
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