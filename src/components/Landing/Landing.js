import React, { useEffect, useRef } from 'react';
import './Landing.scss';
import {init} from 'ityped'

const Landing = () => {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed:70,
      backDelay: 1500,
      strings: ["Fullstack", "JavaScript","Youtuber", "Designer", "Tech Blogger"]
    })
    
  }, [])

  return (
    <div className='landing' id='landing'>
      <div className='left'>
        <div className='imgContainer'>
          <img className='imagekungfu' src='assets/kunfi.png' alt=''/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h1>Hi There, I'm Val</h1>
          <h2>love Panda</h2>
          <h3>Panda <span ref={textRef}>Developer</span></h3>
        </div>
        <a href="#portfolio">
          <i className="fas fa-angle-double-down fa-3x"></i>
        </a>
      </div>
    </div>
  )
}

export default Landing
