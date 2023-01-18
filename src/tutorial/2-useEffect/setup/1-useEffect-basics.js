import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  
  let [k,ck]=useState(0);

  function incre(){
    
    ck(k+1);
    
  }

  useEffect(()=>{

    console.log("every render");

    document.title = `new messages (${k})`
  })

  return (<><h2>useEffect Basics</h2>

  <h1>{k}</h1>

  <button type = "button" onClick={()=>incre()} className='btn'>press</button>
  </>);
};

export default UseEffectBasics;
