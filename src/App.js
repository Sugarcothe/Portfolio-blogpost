import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Landing from './components/Landing/Landing'
import Project from './components/Proj/Proj'
import Testimonials from './components/Testimonials/Testimonials'
import Menu from './components/Menu/Menu'
import './App.scss'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Navbar 
      menuOpen={menuOpen} 
      setMenuOpen={setMenuOpen}
      />
      <Menu
       menuOpen={menuOpen} 
       setMenuOpen={setMenuOpen}
       />

      <section className='sections'>
        <Landing/>
        <Project/>
        <Blog/>
        <Contact/>
        <Testimonials/>
      </section>
    </div>
  );
}

export default App;
