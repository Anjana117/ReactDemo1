import React from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './Components/Header/Header.js';
import Navbar from './Components/Navbar/Navbar.js';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
   <div>
    <Header />
    <BrowserRouter>
    <Navbar />
   <div className='app'>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<h1>Contact_Page</h1>}/>
      <Route path='/gallery' element={<h1>Gallery_Page</h1>}/>
    </Routes>
    </div>
    </BrowserRouter>
   <Footer />
    </div>
  )
}

export default App