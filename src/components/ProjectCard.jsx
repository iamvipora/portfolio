import React from 'react'
import { useState } from 'react'

const ProjectCard = (props) => {

  const useHover = () => {
      const [hovering, setHovering] = useState(false)
      const onHoverProps = {
        onMouseEnter: () => setHovering(true),
        onMouseLeave: () => setHovering(false),
      }
      return [hovering, onHoverProps]
    }

  const [hovering, onHoverProps] = useHover()

  const projectDetails = <>
    <p>{props.title}</p>
    <p>{props.date}</p>
    <p>{props.lang}</p>
  </>

  return (
  <a href={props.link}>
      <div className='h-72 w-72 text-[#ECE7E1] !bg-cover !bg-no-repeat !bg-center rounded-xl border border-black' style={{background: `url(${props.image})`}}>
        <div className='font-montserrat bg-[#1A1818] opacity-90 h-full flex flex-col justify-center items-center transition-all duration-100 rounded-xl' {...onHoverProps}>
          {
            hovering ? <p className='text-center'>{props.desc}</p> : projectDetails
          }
        </div>
      </div>
    </a>  
  ) 
}

export default ProjectCard