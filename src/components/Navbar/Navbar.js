import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#landing' className='logo' >Utomsinachi</a>
          <div className='itemContainer'><i className="fas fa-user icon"></i>+2347067869822</div>
          <div className='itemContainer'><i className="fas fa-envelope icon"></i>utomsinachi@gmail.com</div>
        </div>
        
        <div className='right'>
          <div className='harmburger'>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
            <span className='line4'></span>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Navbar
