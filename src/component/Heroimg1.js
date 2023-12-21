import "./Heroimg1.css"
import React from 'react'
import Introimg from '../assets/manhattan-3866140.jpg';
import {Link} from 'react-router-dom'
const Heroimg1 = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img  className ="intro-img" src={Introimg} alt="intro-img" />
      </div>
      <div className="content">
        <p>Hi, i'am a Fresher</p>
        <h3>My name is Babrubahan Maharana</h3>
        <h1>Fullstack Devloper</h1>
        <div>
            <Link to="/About" className="btn">About</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg1
