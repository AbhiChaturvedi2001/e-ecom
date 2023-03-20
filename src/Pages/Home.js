import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'

const Home = ( {Toggle , Mode, showNavbar, changeMode} ) => {
  return (
    <>
     <div className={`home-page h-[100vh] ${Mode ? `bg-black text-white border-white` : `bg-white text-black border-white`} `}>
     <Navbar Toggle={Toggle} Mode={Mode} showNavbar={showNavbar} changeMode={changeMode}/>
     <Hero /> 
     </div>
    </>
  )
}

export default Home