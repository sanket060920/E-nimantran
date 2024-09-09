// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../src/components/cards-design/card-1/card-1.css';
import './App.css';
// import Card1 from './components/cards-design/card-1/card-1';
// import Card2 from './components/cards-design/card-2/card-2';
// import Card4 from './components/cards-design/card-4/card-4';
import Home from './components/Home/Home';
import About from './components/Home/Portfolio/Components/About';
import Resume from './components/Home/Portfolio/Components/Resume';


function App() {
  return (
    <>    
          
      <Router>
        <Routes>
        <Route path="/PortFolio" element={<Home/>} />
        <Route path="/Portfolio/About" element={<About/>} />
        <Route path="/Portfolio/Resume" element={<Resume/>} />
        {/* <Route path="/Card_1" element={<Card1/>} />
        <Route path="/Card_2" element={<Card2/>} />
        <Route path="/Card_4" element={<Card4/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
