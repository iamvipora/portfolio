import React from 'react'

const About = () => {

  return (
    <>
      <div id='about' className='h-screen w-screen flex items-center'>
        <div className='flex items-center bg-[#1A1818] px-96 h-screen w-screen text-[#ECE7E1]'>
          <div className='w-1/2 font-luxurious'>
            <p className='font-bold text-8xl mb-6'>ABOUT</p>
            <p className='text-2xl mb-6'>I'm Henry. A web developer, and former Esports team manager.</p>
            <p className='mb-3'>I am an IT graduate from the Pamantasan ng Lungsod ng Maynila. It was during my early college years that has piqued my interest in coding. As of now, I currently know <span className='underline'>HTML, CSS, Tailwind, JavaScript, and ReactJS.</span></p>
            <p className='mb-3'>My first full-time job was as an Esports team manager for Metaverse Ventures & Platforms. There, I managed the players, data about their practice matches, and tournaments.</p>
            <p>Now I am looking for opportunities in the field of Web Development as a Front-end Developer.</p>
          </div>
          <div className='px-20 w-full flex justify-center'>
            <img src='/images/profile-picture.jpg' className='w-96 object-cover object-top rounded-3xl'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default About