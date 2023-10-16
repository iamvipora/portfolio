import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const Nav = () => {

  const location = useLocation()
  const textColor = useMemo(() => {
    
    const activePage = window.location.href.split('#')[1]
  
    if (activePage === 'about' || activePage === 'contact') {
      return '#ECE7E1'
    } else {
      return '#1A1818'
    } 
  }, [ location ])
  
  return (
    <div className='fixed flex left-0 w-20 justify-center rotate-[270deg] top-[28.3rem]' style={{ color: textColor }}>
      <ul className='flex gap-8 items-center'>
        <li><hr className='w-32 h-[2px] bg-black'/></li>
        <li className='hover:line-through'><a href="#contact">Contact</a></li>
        <li className='hover:line-through'><a href="#projects">Projects</a></li>
        <li className='hover:line-through'><a href="#about">About</a></li>
        <li className='hover:line-through'><a href="#home">Home</a></li>
        <li><hr className='w-32 h-[2px] bg-black'/></li>
      </ul>
    </div>
  )
}

export default Nav