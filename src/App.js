import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import MenCollection from './pages/MenCollection';
import { sliderData } from './pages/sliderData';
import WomenCollection from './pages/WomenCollection';
import KidCollection from './pages/KidCollection';
import Accessories from './pages/Accessories'
import Error from './pages/Error';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='MenCollection' element={<MenCollection slide={sliderData}/>}/>
          <Route path='WomenCollection' element={<WomenCollection />}/>
          <Route path="KidsCollection" element={<KidCollection/>} />
          <Route path='Accessories' element={<Accessories />} />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
