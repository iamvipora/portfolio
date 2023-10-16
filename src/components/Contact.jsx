import React from 'react'

const Contact = () => {

  return (
    <>
      <div id='contact' className='h-screen w-screen flex items-center'>
        <div className='flex items-center bg-[#1A1818] px-96 h-screen w-screen text-[#ECE7E1]'>
          <div className='w-full font-luxurious'>
            <p className='font-bold text-8xl mb-6'>CONTACT</p>
            <p className='pl-2 text-2xl mb-6'>Reach out to me using the following:</p>
              <ul className='pl-2'>
                <li>henrydizon99@gmail.com</li>
                <li>henrydizon91@yahoo.com</li>
                <li>(+63) 998 342 6056</li>
                <li>(+63) 916 341 2304</li>
                <li>Makati City, Philippines</li>
              </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact