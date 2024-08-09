import React from 'react';
import ImageGenerated from './components/image-generated/ImageGenerated';
import Prompt from './components/prompt/Prompt';
import './App.css'

function App() {

  return (
   <div className='generator-container'>
    <ImageGenerated/>
    <Prompt/>
   </div>
  );
}

export default App;
