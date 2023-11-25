import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Service from './pages/service/Service';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>

          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
     
      </Routes>
  

    </BrowserRouter>
  );
}

export default App;
