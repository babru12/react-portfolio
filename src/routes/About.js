import React from 'react'
import Navbar from '../component/Navbar'
import Footers  from '../component/Footers'
import Heroimg2 from '../component/Heroimg2'
import Workcard from '../component/Workcard'
import Aboutcontent1 from '../component/Aboutcontent1'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading = "ABOUT ME " text="Technical Skills"  skill="Java , Javascript , Reactjs , Html , Css ,SQL"/>
      <Aboutcontent1/>
      <Workcard/>
      <Footers/>
    </div>
  )
}

export default About
