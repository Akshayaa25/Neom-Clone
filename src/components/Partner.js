import React, { useEffect, useRef, useState } from 'react';
import './Styles/Partner.css'
import video1 from '../assets/neom.mp4';

function Partner() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { 
        rootMargin: "0px",
        threshold: 0
      }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll(".animate").forEach((el) => {
        el.classList.add("slide-in");
      });
    }
  }, [isIntersecting]);
  
  return (
    <div className='partner-section'>
        <video autoPlay loop muted playsInline>
            <source src={video1} type="video/mp4"/>
        </video>
        <div className='partner-content' ref={ref}>
            <h1 className='animate'>OUR PARTNERS</h1>
            <p className='animate'>
                All of our partners are working towards progressive goals, just like
                NEOM. By building relationships based on our core principles, we
                create partnerships that are meaningful.
            </p>
            <button className='animate'>LEARN MORE</button>
        </div>
    </div>
  )
}

export default Partner;