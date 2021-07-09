import Navbar from './components/Navbar/Navbar'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Landing from './components/Landing/Landing'
import Project from './components/Proj/Proj'
import Testimonials from './components/Testimonials/Testimonials'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>

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
