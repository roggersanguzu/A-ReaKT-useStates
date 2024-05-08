import React, { useState } from 'react';

const UseStateCounter = () => {
const[value,setvalue]=useState(0);
const ComplexIncrease=()=>{
  setTimeout(()=>{
    //setvalue(value+1); This is option One
    setvalue((prevState)=>{ // This is the Best Option
      return prevState+1;
    })
  },2000)
}
  return <>
  <section style={{margin:'4rem'}}>
    <h4>Welcome to the Regular Counter</h4>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setvalue(value+1)}>Increament</button>
    <button className='btn' onClick={()=>setvalue(value-1)}> Decreament</button>
    <button className='btn' onClick={()=>setvalue(0)} >Reset</button>
  </section>

  
    <section style={{margin:'4rem'}}>
    <h4>More Complex</h4>
    <h1>{value}</h1>
    <button className='btn' onClick={ComplexIncrease}>Increament Later</button>
  </section>
  </>;
};

export default UseStateCounter;
