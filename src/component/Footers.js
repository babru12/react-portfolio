import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footersstyle.css"
import React from 'react'
const Footers = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size = {20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>Infosity , Patia , Near surajplace</p>
                    <p>Bhubaneswar</p>
                </div>
            </div>
            <div className="phone">
                <h4>
                <FaPhone size = {20} style={{color:"#fff", marginRight:"2rem"}}/>
                9556013448
                </h4>
            
            </div>
            <div className="email">
                <h4>
                <FaMailBulk size = {20} style={{color:"#fff", marginRight:"2rem"}}/>
                babrubahanmaharana085@gmail.com
                </h4>
            
            </div>
        </div>
        <div className="right">
            <h4>Which Skill required to make this type of website</h4>
            <p> React , HTML, Basics of javascript  , Css</p>
            <div className="social">
                <FaFacebook size = {20} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaTwitter size = {20} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaLinkedin size = {20} style={{color:"#fff", marginRight:"2rem"}}/> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footers
