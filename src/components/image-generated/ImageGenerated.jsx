import React from 'react'
import illustration from '../../assets/illustration.png'
import { useSelector } from 'react-redux'
import './ImageGenerated.css'

const ImageGenerated = () => {
  const photos = useSelector((state) => state.photos.value)
  return (
    <div className='image-generated-container'>
      <img src={illustration} alt="illustration" />
      <h1>{photos}</h1>
    </div>
  )
}

export default ImageGenerated;