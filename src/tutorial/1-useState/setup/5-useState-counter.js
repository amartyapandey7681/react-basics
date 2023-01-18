import React, { useState } from 'react';

const UseStateCounter = () => {

  let [val,changeVal] = useState(0);

  function chcom(){

    setTimeout(()=>{

      changeVal(++val);
    },1000);
  }

  let [ms,chms] = useState("useState counter example")

  function dec(){

    if(val === 0)
      chms("value is 0");
    else
      changeVal(--val);
  }
  return <React.Fragment>

<h2>{ms}</h2>

  <h2>{val}</h2>
  <button type="button" className='btn' onClick={()=>changeVal(++val)}>increase</button>
  <button type="button" className='btn' onClick={()=>changeVal(0)}>reset</button>
  <button type="button" className='btn' onClick={()=>dec()}>decrease</button>

  <h2>{val}</h2>


  <button type="button" className='btn' onClick={()=>{chcom()}}>complex</button>

  </React.Fragment>;
};

export default UseStateCounter;
