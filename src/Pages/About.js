import React from 'react'
import Navbar from '../Components/Navbar'

const About = ({Toggle , Mode, showNavbar, changeMode}) => {
  return (
    <>
    <div className='about-page-container'>
      <Navbar Toggle={Toggle} Mode={Mode} showNavbar={showNavbar} changeMode={changeMode} />
    </div>
    </>
  )
}

export default About