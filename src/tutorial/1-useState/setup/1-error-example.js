import React from 'react';

const ErrorExample = () => {

  let name = "error message";

  function conMessage(){

    name = "hello people"

    console.log("hello people");
  }

  return (<React.Fragment>

  <h2>useState error example</h2>
  <div>{name}</div>
  <button type='button' onClick={()=>conMessage()}>button to show</button> 
  </React.Fragment>);
};

export default ErrorExample;
