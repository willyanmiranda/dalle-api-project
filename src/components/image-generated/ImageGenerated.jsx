import React from 'react'
import illustration from '../../assets/illustration.png'
import './ImageGenerated.css'

const ImageGenerated = () => {
  return (
    <div className='image-generated-container'>
      <img src={illustration} alt="illustration" />
    </div>
  )
}

export default ImageGenerated;