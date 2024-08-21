import React from 'react';
import { useDispatch } from 'react-redux';
import { setPhotos } from '../../../features/photos/photos';
import { saveAs } from 'file-saver';

const DownloadImage = (props) => {
  const dispatchPhotos = useDispatch()
  const download = () => {
    props.images.forEach((img, index) => {
      saveAs(img.image.url, `image-${index}.jpg`);
    });
  }
  return (
    <div>
      <button onClick={() => download()}>Download</button>
      <button onClick={() => dispatchPhotos(setPhotos(null)) }>Criar novas imagens</button>
    </div>
  )
}

export default DownloadImage