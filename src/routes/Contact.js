import React from 'react'
import Navbar from '../component/Navbar'
import Footers  from '../component/Footers'
import Heroimg2 from '../component/Heroimg2'
import Form from '../component/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading = "CONTACT." text="Let's have a conversation"/>
      <Form/>
      <Footers/>
    </div>
  )
}

export default Contact
