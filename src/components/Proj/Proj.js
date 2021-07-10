import React, { useState } from 'react';
import './Proj.scss'

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  


  const data = [
    {
      id: '1',
      icon: 'assets/cart.png',
      title: 'Amazon Clone',
      desc: 'Lorem Ipsum is simply dummy text',
      img:'assets/amazon.png',
      github:'',
      link:''


    },
    {
      id: '2',
      icon: 'assets/beatbox.png',
      title: 'Beat Box',
      desc: 'Lorem Ipsum is simply dummy text',
      img:'assets/drumbox.png',
      github:'',
      link:''

    },
    {
      id: '3',
      icon: 'assets/cart.png',
      title: 'Booker Buy',
      desc: 'Lorem Ipsum is simply dummy text',
      img:'assets/bookecommerce.png',
      github:'',
      link:''

    },
    {
      id: '4',
      icon: 'assets/chaticon.png',
      title: 'Pidgin Box',
      desc: 'Lorem Ipsum is simply dummy text',
      img:'assets/pidgin.png',
      github:'',
      link:''
      

    }, 
    {
      id: '5',
      icon: 'assets/mobile.png',
      title: 'Social Media',
      desc: 'Lorem Ipsum is simply dummy text',
      img:'assets/socialmedia.jpg',
      github:'',
      link:''
      

    },
    {
      id: '6',
      icon: 'assets/markdown.png',
      title: 'Markdown Previewer',
      desc: 'Lorem Ipsum is simply dummy text',
      img:'assets/markdown1.png',
      github:'',
      link:''
    }  
  ]

  const handleClick = (way) => {
    way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 5) : setCurrentSlide(currentSlide<data.length -1 ?currentSlide+1: 0)
  }

  return (
    <div className='projects' id='projects'>
      <div className='slider' style={{transform:`translateX(-${currentSlide *100}vw)`}}>    
        {data.map((d) => (
        <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                <img src={d.icon} alt='logo'/>
                </div> 
                <h4>{d.title}</h4>
              <p>{d.desc}</p>
              <span>Projects</span>
              <div className='links'>
                <a href=''><i class="fab fa-github"></i></a>
                <a className='lin' href=''><i class="fas fa-link m-3"></i></a>
              </div>
              </div>
            </div>
            <div className='right'>
              <img src={d.img} 
              alt='imago'/>
            </div>
          </div>
          
        </div>))}
      </div>
        <div onClick={()=> handleClick('left')}>
          <i className="fas fa-arrow-alt-circle-right fa-3x right" ></i>
        </div>
        <div onClick={()=> handleClick('left')}>
          <i className="fas fa-arrow-alt-circle-left fa-3x left"></i>
        </div>
    </div>
  )
}

export default Project
