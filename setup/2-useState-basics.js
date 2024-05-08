import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText]=useState('Check mate!');
  const HandlerOnclick=()=>{
    if(text==='Check mate!'){
      setText('Please Go and then improve on your Skills');
    }
    else{
      setText('Check mate!');
    }
      
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={HandlerOnclick}>Developer</button>
    </React.Fragment>
    );
};

export default UseStateBasics;
