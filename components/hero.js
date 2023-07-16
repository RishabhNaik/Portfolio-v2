import React from 'react';
import herostyles from './../styles/hero.module.css';

const Hero = () => {
  return (
    <div className='section'>
    <div className={herostyles.container}>
      <div className={herostyles.leftContent}>
        <h1 style={{fontSize :60}} >With your idea we can design a better future</h1>
        <p>Content specific to the homepage goes here.</p>
      </div>
      <div className={herostyles.rightContent}>
        <img src="path_to_your_image.jpg" alt="Image" />
        
      </div>
      </div>
      </div>
  );
};

export default Hero;
