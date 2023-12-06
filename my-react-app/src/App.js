// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Card_1 from './components/cards-design/card-1/card-1';
import Card_2 from './components/cards-design/card-2/card-2';

import './App.css';

function App() {
  return (
    <>    
          
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Card_1" element={<Card_1/>} />
        <Route path="/Card_2" element={<Card_2/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
