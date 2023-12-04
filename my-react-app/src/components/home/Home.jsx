import React from "react"
import Hero from "../hero/Hero"
import Header from '../common/header/Header';
import Demo from '../demo/Demo';
import Footer from '../common/footer/Footer';
import './home.css'; // Import your styles


const Home = () => {
  return (
    <div className="hme">
        <div><Header/></div>
        <div><Hero/></div>
        <div><Demo/></div>
        <div><Footer/></div>
  </div>
  )
}

export default Home