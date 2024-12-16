import About from './components/About'
import CardSec from './components/CardSec'
import Eyes from './components/Eyes'
import Fetured from './components/Fetured'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'

import './index.css'

import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='text-white'>
      <Navbar/>
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Fetured />
      <CardSec />
      <Footer />
    </div>
  )
}

export default App
