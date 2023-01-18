import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [isE,setise] = useState(false);

  return (<>

    

    <button className='btn' type="button" onClick={()=>setise(!isE)}>hiding</button>
    {isE && <h1>error...</h1>}

    {isE?<h1>hello</h1>:<h2>hi</h2>}

  </>);
};

export default ShortCircuit;
