import React from 'react'
import Button from '../ui/button/Button'
import First from '../components/aboutBlock/First'
import Second from '../components/aboutBlock2/Second'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>О бренде</h1> 
        <First/> 
        <Second/>
        <Link to='/shop'><Button/></Link>
    </div>
  )
}

export default About