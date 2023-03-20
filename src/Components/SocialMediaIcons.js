import React from 'react'
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiMailSend  } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { Link } from 'react-router-dom';


const SocialMediaIcons = () => {
  return (
   <>
    <div className='fixed bottom-40 right-10'>
      <Link to='https://www.instagram.com/abhi_chatrvedi/'><AiOutlineInstagram className='text-3xl cursor-pointer' /></Link>
      <Link to='https://www.linkedin.com/in/abhishek1949/'><AiFillLinkedin  className='mt-4 text-3xl cursor-pointer' /></Link>
      <Link to='https://github.com/AbhiChaturvedi2001'><AiFillGithub className='mt-4 text-3xl cursor-pointer' /></Link>
      <Link to='mailto:chaturvedia435@gmail.com'><BiMailSend  className='mt-4 text-3xl cursor-pointer'/></Link>
      <Link><SiLeetcode  className='mt-4 text-3xl cursor-pointer'/></Link>
      <div className='border border-black mt-1 border-l-15 z-10 left-3.5 absolute h-[30vh]' ></div>
    </div>
   </>

  )
}

export default SocialMediaIcons