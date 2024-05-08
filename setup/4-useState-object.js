import React, { useState } from 'react';

const UseStateObject = () => {
   const [person,setPerson]=useState({name:'Peter',age:78,sex:'Male',message:'WhatsApp Dude'})
   const Change=()=>{
    setPerson({...person,message:'Thanks for your Click'})
   }
  return <>
  <h4>{person.name}</h4>
  <h4>{person.age}</h4>
  <h4>{person.male}</h4>
  <h4>{person.message}</h4>
  <button className='btn' onClick={Change}>Informations</button>
  </>;
};

export default UseStateObject;
