import React from 'react'
import Navbar from '../Components/Navbar'

const Contact = ({Toggle , Mode, showNavbar, changeMode}) => {
  return (
    <>
    <div className='contact-page'>
      <Navbar Toggle={Toggle} Mode={Mode} showNavbar={showNavbar} changeMode={changeMode}/>
    </div>
    </>
  )
}

export default Contact