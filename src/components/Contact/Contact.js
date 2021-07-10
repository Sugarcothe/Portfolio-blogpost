import React from 'react'
import './Contact.scss'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/kunfupanda.png' alt='cotact'/>
      </div>
      <div className='right'>
        <h2>Contact.</h2>
        <h5><i class="fas fa-mobile-alt"></i>+2347067869822</h5>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email'/>
          <textarea placeholder='Message Panda...'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
