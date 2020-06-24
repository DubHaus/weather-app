import React from 'react';
import { useState, useEffect } from 'react';

import icon from './next.svg';
import './slider.sass';


const Slider = ({ children, count, step = count }) => {
  const [slide, setSlide] = useState(0);
  const length = children.length ? children.length : 1;
  const slideCount = ((length - count) / step);
  const width = length / count * 100;
  const stepWidth = 100 / (length / step);

  useEffect(() => {
    setSlide(0);
  }, [children, count, step])


  const decreaseSlide = () => {
    setSlide(slide < 1 ? slideCount : slide - 1)
  }
  const increaseSlide = () => {
    setSlide(slide > (slideCount - 1) ? 0 : slide + 1)
  }

  const makeBtn = (direction, onClick) => {
    return count >= length ?
      null
      : < button onClick={onClick} className={`slider__btn ${direction}`}> <img src={icon} alt="arrow" /></button >
  }


  return (
    <div className="slider">
      {makeBtn('prev', decreaseSlide)}
      <div className="slider__track">
        <div style={{ width: `${width}%`, transform: `translateX(-${stepWidth * slide}%)` }} className="slider__items">
          {children}
        </div>
      </div>
      {makeBtn('next', increaseSlide)}
    </div>
  )
}

export default Slider;