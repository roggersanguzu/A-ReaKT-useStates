import React from 'react'; //Session ONe

const ErrorExample = () => {
  let head='React Developers';
  let HandleClick=()=>{
      head='Thanks for your Reaction';
      console.log(head)
  }
  return (
  <React.Fragment>
    <h2>{head}</h2>
    <button type='button' className='btn' onClick={HandleClick}>Reactions</button>
  </React.Fragment>
  );
};
export default ErrorExample;
