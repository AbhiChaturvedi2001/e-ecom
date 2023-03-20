import React from 'react'
import Navbar from '../Components/Navbar'

const Project = ({Toggle , Mode, showNavbar, changeMode}) => {
  return (
    <>
    <div className='project-container'>
      <Navbar Toggle={Toggle} Mode={Mode} showNavbar={showNavbar} changeMode={changeMode} />
    </div>
    </>
  )
}

export default Project