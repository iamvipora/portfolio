import React from 'react'

const Home = () => {

  return (
    <>
      <div id='home' className='h-screen w-screen flex items-center'>
        <div className='flex items-center bg-[#ECE7E1] px-96 h-screen w-screen text-[#1A1818]'>
          <div className='w-1/2 font-montserrat'>
            <p className='font-bold text-3xl mb-3'>JOHN HENRY DIZON</p>
            <p>Aspiring Sofware Engineer</p>
            <p className='mb-3'>Located in Makati City, Philippines</p>
            <p>HTML | CSS | Tailwind | JavaScript | ReactJS</p>
          </div>
          <div className='px-20 w-full'>
            <ul className='text-9xl font-luxurious'>
              <li className='hover:italic hover:translate-x-2 transition-all'><a href="#about">ABOUT</a></li>
              <li className='hover:italic hover:translate-x-2 transition-all'><a href="#projects">PROJECTS</a></li>
              <li className='hover:italic hover:translate-x-2 transition-all'><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home