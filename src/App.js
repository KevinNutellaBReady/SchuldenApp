import * as React from 'react';

import HomePage from './pages/Home/Home'
import RenderAbout from './pages/About/About'
import LoginPage from './pages/LoginPage/LoginPage';

import './App.css';


import { Routes, Route } from 'react-router-dom';



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="about" element={<RenderAbout />} />
      </Routes>
    </div>
  );
}
