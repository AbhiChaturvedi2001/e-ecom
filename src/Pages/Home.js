import React from 'react'
import Hero from '../Components/Hero'

const Home = ( {Toggle , Mode, showNavbar, changeMode} ) => {
  return (
    <>
     <div className={`home-page h-[100vh] ${Mode ? `bg-black text-white border-white` : `bg-white text-black border-white`} `}>

     <Hero /> 
     </div>
    </>
  )
}

export default Home