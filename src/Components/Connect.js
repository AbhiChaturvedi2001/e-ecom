import React from 'react'

const Connect = (props) => {
  return (
    <>
    <div className='connect-container flex justify-center items-center px-5 py-5'>
        <div className={`bg-[#222222] max-md:w-[100%] w-[60%] h-[25vh] flex justify-between items-center px-10 py-10 rounded-md`}>
        <div>
            <h1 className='text-3xl text-white'>Work Inquiry</h1>
            <h2 className='text-white mt-2'>Let's work together and i'll help you by all my best</h2>
        </div>
        <button className=' font-poppins bg-orange-500 px-3 py-2 rounded-sm text-white cursor-pointer'><a href='mailto:chaturvedia435@gmail.com'>Let's Connect</a></button>
        </div>
    </div>
    </>
  )
}

export default Connect