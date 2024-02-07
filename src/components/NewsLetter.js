import React from 'react';
import './Styles/NewsLetter.css';
import bgImg from '../assets/newsletter-bg.jpg';

function NewsLetter() {
  return (
    <div className='news-letter'>
        <img src={bgImg} />
        <div className='news-content'> 
            <h1>GET NEWS & UPDATES</h1>
            <p>
                Sign up for the latest news on how we are shaping a new future.
            </p>
            <div className='email'>
                <input type='text' placeholder='name@mail.com'/>
                <button>SIGN UP</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter;