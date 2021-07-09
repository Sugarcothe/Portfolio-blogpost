import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <div className='landing' id='landing'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/panda.jpg' alt=''/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h1>Hi There, i'm</h1>
          <h2>Hi There, i'm</h2>
          <h3>Freelance<span>Developer</span></h3>
        </div>
        <a href="#projects">
          <i className="fas fa-angle-double-down fa-3x"></i>
        </a>
      </div>
    </div>
  )
}

export default Landing
