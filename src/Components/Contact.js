import React from 'react'
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillInstagram,
  } from "react-icons/ai";
const Contact = () => {
  return (
    <>
    <div className='contact-container grid place-content-center h-[50vh] mt-2 bg-[#1f1f1f] px-3 py-3 text-white'>
        <h1 className='text-center text-4xl font-poppins'>Stay Connected </h1>
        <div className='text-center mt-3' >Bharatpur , India</div>
        <div className='text-center font-bold text-xl font-poppins cursor-pointer'><a href='mailto:chaturvedia435@gmail.com'>chaturvedia435@gmail.com</a></div>
        <div className='text-center mt-1'> (+91) 8005811245</div>
        <div
        className={`flex justify-center items-center mt-7`}
      >
        <AiFillLinkedin className="text-3xl ml-4 cursor-pointer" />
        <AiFillGithub className="text-3xl ml-4 cursor-pointer" />
        <AiFillTwitterCircle className="text-3xl ml-4 cursor-pointer" />
        <AiFillInstagram className="text-3xl ml-4 cursor-pointer" />
      </div>
    </div>
    </>
  )
}

export default Contact