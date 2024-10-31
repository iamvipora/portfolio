import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  
  const projects = [
    {
      title: 'RJ Dizon Printing Press',
      date: 'August 2022',
      lang: 'PHP',
      link: 'https://rjdizon.onrender.com',
      image: '/images/rj-dizon.jpg',
      desc: 'A full-stack website created for the company RJ Dizon Printing Press as a college thesis. It serves as a way for the company to digitally store documentations, check inventory, and track orders.'
    },
    {
      title: 'Beerus',
      date: 'December 2022',
      lang: 'Flowlab',
      link: 'https://flowlab.io/game/play/2119358',
      image: '/images/beerus.png',
      desc: 'A college thesis that aims to educate people on antiviruses, malware, and cybersecurity in an enjoyable and interactive way while being educational through web-based gaming.'
    },
    { 
      title: 'Expense Tracker',
      date: 'July 2023',
      lang: 'JavaScript',
      link: 'https://henrydizon-expense-tracker.vercel.app/',
      image: '/images/expense-tracker.jpg',
      desc: 'A simple expense tracker created with JavaScript. A personal project that was made to help me with tracking my personal daily spendings.'
    },
    {
      title: 'Business Card',
      date: 'September 2023',
      lang: 'ReactJS',
      link: 'https://henrydizon-business-card.vercel.app/',
      image: '/images/business-card.jpg',
      desc: 'A business card created with ReactJS. My first React project that shows details about myself and my interests.'
    },
    {
      title: 'Temp. Feelings',
      date: 'March 2024',
      lang: 'ReactJS',
      link: 'https://https://tempfeelings.vercel.app/',
      image: '/images/temp-feelings.png',
      desc: 'A blog where users can rant to other people about their problems, while staying anonymous. My first project that involved a back-end.'
    },
    {
      title: 'Arcane Duel',
      date: 'May 2024',
      lang: 'ReactJS',
      link: 'https://arcane-duel.vercel.app/',
      image: '/images/arcane-duel.png',
      desc: 'A single-player, duel-based, RPG game. Feel the nostalgia with its pixelated aesthetic, and vibes.'
    },
    {
      title: 'Coin Insight',
      date: 'October 2024',
      lang: 'ReactJS',
      link: 'https://coin-insight.vercel.app/',
      image: '/images/coin-insight.png',
      desc: 'Coin Insight is a website that tracks cryptocurrency and its digital market.'
    }
  ]

  return (
    <>
      <div id='projects' className='h-screen w-screen flex items-center'>
        <div className='flex flex-wrap gap-10 justify-center items-center bg-[#ECE7E1] h-screen w-screen text-[#1A1818]'>
          {projects.map((project) => {
            return (
              <ProjectCard 
                {...project}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Projects