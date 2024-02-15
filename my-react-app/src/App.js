// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/home/Home';
import '../src/components/cards-design/card-1/card-1.css'; 
import Card1 from './components/cards-design/card-1/card-1';
import Card2 from './components/cards-design/card-2/card-2';
import Card4 from './components/cards-design/card-4/card-4';

import './App.css';

function App() {
  return (
    <>    
          
      <Router>
        <Routes>
        <Route path="/" element={<Card1/>} />
        <Route path="/Card_1" element={<Card1/>} />
        <Route path="/Card_2" element={<Card2/>} />
        <Route path="/Card_4" element={<Card4/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
