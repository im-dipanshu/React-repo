import React from 'react'
import LeftText from './LeftText'
import ImageContainer from './ImageContainer'
const Center = () => {
  return (
    <div className='flex gap-5 overflow-x-auto w-full p-8'>
      <LeftText></LeftText>
      <ImageContainer></ImageContainer>
    </div>
  )
}

export default Center
