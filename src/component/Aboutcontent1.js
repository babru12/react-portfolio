import { Link } from "react-router-dom"
import "./Aboutcontent1.css"
import React from 'react'
import react1 from '../assets/IMG_20230502_164543_405-removebg.png'
// import react2 from '../assets/source-4280758.jpg'

const Aboutcontent1 = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ? </h1>
          <p>
            I am a Fullstack Devloper with skills <br />Java,Html,Css,Javascript,Reactjs,Database
          </p>
          <Link to="/contact">
            <button className="btn">contact</button>
          </Link>
      </div>
      <div className="right">
        <div className="image-container">
            <div className="image-stack top">
                <img src={react1} className="img" alt="myphoto" />
            </div>
            <div className="image-stack bottom">
                {/* <img src={react2} className="img2" alt="myphoto" /> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent1
