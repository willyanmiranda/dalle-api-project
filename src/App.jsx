import React from 'react';
import ImageGenerated from './components/image-generated/ImageGenerated';
import Prompt from './components/prompt/Prompt';
import Store from './Store';
import { Provider } from 'react-redux'
import './App.css'

function App() {

  return (
    <Provider store={Store}>
      <div className='generator-container'>
        <ImageGenerated/>
        <Prompt/>
      </div>
    </Provider>
  );
}

export default App;
