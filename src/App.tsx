import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className=' bg-grey-ish'>
      <div>
        <Navbar />
        <Home />
        <About/>
      <div>

        <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
