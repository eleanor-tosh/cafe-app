import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Location from './pages/Location'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className=' bg-grey-ish'>
      <div>
        <Navbar />
        <Home />
        <About/>
        <Menu />
        <Location />
        <Contact />
      <div>
        <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
