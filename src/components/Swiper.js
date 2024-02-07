import React, { useState } from 'react';
import './Styles/Swiper.css';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import { BsCaretRightFill } from "react-icons/bs";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";

function Swiper() {
  const [cardIndex, setCardIndex] = useState(0);

  const cardWidth = 100;
  const cardCount = 4;

  function updateCarousel() {
      const offset = -cardIndex * cardWidth;
      const cardWrapper = document.querySelector('.swiper-section');
      if (cardWrapper) {
          cardWrapper.style.transition = 'transform 0.5s ease';
          cardWrapper.style.transform = `translateX(${offset}%)`;
      }
  }

  function scrollLeft() {
      setCardIndex((prevIndex) => (prevIndex === 0 ? cardCount - 1 : prevIndex - 1));
  }

  function scrollRight() {
      setCardIndex((prevIndex) => (prevIndex === cardCount - 1 ? 0 : prevIndex + 1));
  }

  const isAtStart = cardIndex === 0;
  const isAtEnd = cardIndex === cardCount - 1;

  React.useEffect(() => {
      updateCarousel();
  }, [cardIndex]);

  return (
    <div className='swiper'>
        <div className='swiper-section'>
            <div className='swiper-card'>
                <video autoPlay loop muted playsInline>
                    <source src={video1} type="video/mp4"/>
                </video>
                <div className='swiper-content'>
                  <h1>REDEFINING BUSINESS</h1>
                  <div className='swiper-btns'>
                    <button className='play-btn'> <BsCaretRightFill className='play-icon'/> </button>
                    <button className='learn-more'>Learn more</button>
                  </div>
                </div>
            </div>
            <div className='swiper-card'>
                <video autoPlay loop muted playsInline>
                    <source src={video2} type="video/mp4"/>
                </video>
                <div className='swiper-content'>
                  <h1>SIRANNA</h1>
                  <p>Where nature and design come together</p>
                  <div className='swiper-btns'>
                    <button className='play-btn'> <BsCaretRightFill className='play-icon'/> </button>
                    <button className='learn-more'>Learn more</button>
                  </div>
                </div>
            </div>
            <div className='swiper-card'>
                <video autoPlay loop muted playsInline>
                    <source src={video3} type="video/mp4"/>
                </video>
                <div className='swiper-content'>
                  <h1>UTAMO</h1>
                  <p>The gateway of new world</p>
                  <div className='swiper-btns'>
                    <button className='play-btn'> <BsCaretRightFill className='play-icon'/> </button>
                    <button className='learn-more'>Learn more</button>
                  </div>
                </div>
            </div>
            <div className='swiper-card'>
                <video autoPlay loop muted playsInline>
                    <source src={video4} type="video/mp4"/>
                </video>
                <div className='swiper-content'>
                  <h1>NEOM IN PROGRESS</h1>
                  <p>Watch the lastest developments</p>
                  <div className='swiper-btns'>
                    <button className='play-btn'> <BsCaretRightFill className='play-icon'/> </button>
                    <button className='learn-more'>Learn more</button>
                  </div>
                </div>
            </div>
        </div>
        <div className='swiper-navigation'>
          {!isAtStart && <HiArrowNarrowLeft className='arrow-left arrow' onClick={scrollLeft}/>}
          {!isAtEnd && <HiArrowNarrowRight className='arrow-right arrow' onClick={scrollRight}/>}
        </div>
    </div>
  )
}

export default Swiper;