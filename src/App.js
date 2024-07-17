import * as React from 'react';
import RenderHome from './pages/Home/Home'
import RenderAbout from './pages/About/About'
import './App.css';


import { Routes, Route } from 'react-router-dom';



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RenderHome />} />
        <Route path="about" element={<RenderAbout />} />
      </Routes>
    </div>
  );
}
