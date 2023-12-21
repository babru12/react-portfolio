import "./Formstyle.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>your name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message</label>
        <textarea rows="6" placeholder="type your message here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
