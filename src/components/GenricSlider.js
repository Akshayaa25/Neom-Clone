import React, { useState } from 'react';
import './Styles/GenricSlider.css';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { sliderImages } from './Images.js';

function GenricSlider() {
    const [cardIndex, setCardIndex] = useState(0);

    const cardWidth = 490;
    const cardCount = 10;

    function updateCarousel() {
        const offset = -cardIndex * cardWidth;
        const cardWrapper = document.querySelector('.cards-holder');
        if (cardWrapper) {
            cardWrapper.style.transition = 'transform 0.3s';
            cardWrapper.style.transform = `translateX(${offset}px)`;
        }
    }

    function scrollLeft() {
        setCardIndex((prevIndex) => (prevIndex === 0 ? cardCount - 3 : prevIndex - 1));
    }

    function scrollRight() {
        setCardIndex((prevIndex) => (prevIndex === cardCount - 3 ? 0 : prevIndex + 1));
    }

    const isAtStart = cardIndex === 0;
    const isAtEnd = cardIndex === cardCount - 3;

    React.useEffect(() => {
        updateCarousel();
    }, [cardIndex]);

  return (
    <div className='genric-slider'>
        <div className='slider-head'>
            <h1>WHAT'S HAPPENING AT <span>NEOM</span> </h1>
            <div className='slider-navigation'>
                <p>10 ARTICLES IN TOTAL</p>
                <div className='arrow-btns'>
                    <div className='btn'>
                        {!isAtStart && <HiArrowNarrowLeft className='left-arrow' onClick={scrollLeft}/>}
                    </div>
                    <div className='btn'>
                        {!isAtEnd && <HiArrowNarrowRight className='right-arrow' onClick={scrollRight}/>}
                    </div>
                </div>
            </div>
        </div>
        <div className='slider-section'>
            {/* <div className='slider-tag'>
                <p>NEWEST</p>
                <p>OLDEST</p>
            </div> */}
            <div className='cards-holder'>
                {sliderImages.map((item, i) => (
                    <div className='card' key={i}>
                        <div className='card-image'>
                            <img src={item.img} />
                        </div>
                        <div>
                            <p>NEOM ANNOUNCES 'TOPIAN', THE NEOM FOOD COMPANY, REVOLUTIONIZING GLOBAL FOOD SYSTEMS</p>
                            <a href='#'>Read More <HiArrowNarrowRight/></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default GenricSlider;