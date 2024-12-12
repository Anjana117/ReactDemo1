import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

const companyDetail={
  name:"Skyach Software solution",
  logo:'./logo192.png'
}

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar props={companyDetail}/>
    <Routes>
      <Route path='/' element={<Home props={companyDetail}/> }/>
      <Route path='/about' element={<h1>About_component</h1>}/>
      <Route path='/contact' element={<h1>Contact_component</h1>}/>
      <Route path='/service' element={<h1>Service_component</h1>}/>
       <Route path='/blog' element={<h1>Blog_component</h1>}/>
        </Routes>
    </BrowserRouter>

   </>
  )
}

export default App