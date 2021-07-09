import React from 'react';
import './Menu.scss'

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'menu '+(menuOpen && "active")}>
      <ul>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#proj'>Projects</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#certification'>Certifications</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#blog'>Blog</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
