import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const[loading,setLoadin]=useState(false);
  const[isError,setIsLoading]=useState(false)
  const[user,setUser]=useState('Default User')

  useEffect(()=>{
    fetch(url).then((resp)=>resp.json())
    .then((user)=>{
      const {login}=user
      setUser(login)
      setIsLoading(false)
    })
  },[])
  if(loading){
      return  <h2>Loading...</h2>
  }
  if(isError){
     return <h2>There is Probably an Error</h2>; 
  }
   return <h2>{user}</h2>;
};

export default MultipleReturns;
