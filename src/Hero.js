import React from 'react';

import './Hero.css';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='Hero1'>
        <h3>Is Your Birthday A Palindrome?</h3>
      </div>
      <div className='Hero2'>
        <div className='Hero-item-1'>
          <h1>Check out if your Birthdate is Palidrome.</h1>
          <p>
            A palindrome is a word/number which reads the same backward as
            forward
          </p>
          <a href='#scroll' className='Hero-button'>
            Let's Go
          </a>
        </div>
        <div
          style={{
            background: `url(${`https://thumbs.dreamstime.com/b/happy-birthday-cupcake-celebration-message-160558421.jpg`})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className='Hero-item-2'
        ></div>
      </div>
    </div>
  );
};

export default Hero;
