import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { FaGithubSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Social = () => {
  
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
    <div className='fixed flex right-0 w-20 justify-center top-[24rem]'>
      <ul className='flex flex-col gap-6 items-center' style={{color: textColor}}>
        <li><a href="https://github.com/iamvipora"><FaGithubSquare className='h-[2.25rem] w-[2.25rem] hover:-translate-x-2 transition-all'/></a></li>
        <li><a href="https://www.linkedin.com/in/john-henry-dizon"><BsLinkedin className='h-[2.05rem] w-[2.05rem] hover:-translate-x-2 transition-all'/></a></li>
        <li><a href="mailto:henrydizon99@gmail.com"><MdEmail className='h-[2.5rem] w-[2.5rem] hover:-translate-x-2 transition-all'/></a></li>
      </ul>
    </div>
  )
}

export default Social