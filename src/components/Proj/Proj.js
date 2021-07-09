import React from 'react';
import './Proj.scss'

const Project = () => {
  return (
    <div className='projects' id='projects'>
      <div className='slider'>
        <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                <img src='assets/cart.png' alt='logo'/>
                </div> 
              </div>
              <h2>Books E-Commerce App</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
              </p>
              <span>Projects</span>
            </div>
            <div className='right'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
