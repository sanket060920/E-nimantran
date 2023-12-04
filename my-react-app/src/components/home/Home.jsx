import React from "react"
import Hero from "../hero/Hero"
import Header from '../common/header/Header';
import './home.css'; // Import your styles


const Home = () => {
  return (
    <div className="hme">
        <div><Header/></div>
        <div><Hero/></div>
  </div>
  )
}

export default Home