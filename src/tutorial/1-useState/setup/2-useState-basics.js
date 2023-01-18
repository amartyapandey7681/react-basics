import React, { useState } from 'react';

const UseStateBasics = () => {

  let title = "hello ben";

  let [text ,setText] = useState(title);

  function hook(){

    

    if(text === "hello ben"){

      setText("hello People");
    }else{

      setText("hello ben");
    }

    title = "hello all";
    console.log(title);
  }
  return (
          <React.Fragment>

          <h2> Amartya's hook basic</h2>
          <h2> {text}</h2>
          <button type="button" className="btn" onClick={()=>{
            hook();
          }}>my button</button>
      </React.Fragment>
      );
};

export default UseStateBasics;
