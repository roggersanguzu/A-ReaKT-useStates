import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value,setValue]=useState(0);
  
  useEffect(()=>{
    console.log('Call yourSelf');
    if(value>=1){
       document.title=`New Messages (${value})`; //Hooks can nork in Conditionale Statments
    }
  })

  //This is Simpley Option 2
  useEffect(()=>{
    console.log('Call yourSelf');
    if(value>=1){
       document.title=`New Messages (${value})`; //Hooks can nork in Conditionale Statments
    }
  },[value])

  return <>
  <h1>{value}</h1>
  <button className='btn' onClick={()=>setValue(value+1)}>Click Me</button>
  </>;
};

export default UseEffectBasics;
