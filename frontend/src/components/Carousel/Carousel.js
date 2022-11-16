import React, { useEffect, useState } from 'react';
import { CarouselData } from './CarouselData';
import { useSwipeable } from 'react-swipeable';

import './Carousel.css';

const Carousel = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  /* SWIPING FOR MOBILE */
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide()
  });

  /* BUTTONS */

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


  return (
    <>
      <div {...handlers} className='slider' >
        <button className='left-arrow' onClick={prevSlide}>&larr;</button>
        <button className='right-arrow' onClick={nextSlide}>&rarr;</button>
        {
          CarouselData.map((slide, index) => {
            return (
              <div className={index === current ? 'slide active' : 'slide'}
                key={index}>
                {index === current && (<img src={slide.image} className='slider-image' alt="flower img" />)}
              </div>
            )

          })
        }
      </div>
    </>
  )
}

export default Carousel;

/*<div className={index === current ? 'slide active' : 'slide'}
                key={index}>
                {index === current && (<img src={slide.image} className='slider-image' alt="flower img" />,
                  <img src={slide.image} className='slider-image' alt="flower img" />)}
              </div> */