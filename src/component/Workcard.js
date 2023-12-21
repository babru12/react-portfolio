import "./Workcardstyle.css"
import React from 'react'
import pro1 from "../assets/student-849822.jpg"

const Workcard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">projects</h1>
      <div className="project-container">
        <div className="project-card">
            <img src={pro1} alt="mypic" />
            <h2 className="project-title">A responsive portfolio site </h2>
            <div className="pro-detail">
                <p>this is a paragraph </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Workcard
