import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const OurClassesCarousel = ({imgCarousel}) => {
  return (
      <Carousel>
        {imgCarousel.map((item, index) => (
          <div key={'carouselItem_' + index}>
            <img alt={item.name} src={item.image} />
          </div>
          ))}
      </Carousel>
  )
}

export {OurClassesCarousel}; 