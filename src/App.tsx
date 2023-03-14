import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <div>
      </div>
    </div>
  );
}

export default App;
