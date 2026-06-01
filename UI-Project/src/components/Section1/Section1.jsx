import React from 'react'
import Navbar from './Navbar'
import Center from './Center'

const Section1 = () => {
  return (
    <div className='h-screen w-full '>
      <Navbar></Navbar>
      <span className='inline-block w-1/1  border-b-2 border-b-gray-500 relative'></span>
      <Center></Center>
    </div>
  )
}

export default Section1
