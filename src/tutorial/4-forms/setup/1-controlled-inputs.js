import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [formValues,setformValues] = useState([]);
  const [name,setName] = useState('');
  const [email,setEmail]= useState('');


  function handleSubmit(e){

    e.preventDefault();

    if(name && email){

      setformValues([...formValues,{name : name,email:email}]);
      setEmail('');
      setName('');
    }

  }

  return <>

    <form  onSubmit={(e)=>handleSubmit(e)}>

      <label>name:</label>
      <input type = "text" value= {name} onChange={(e)=>setName(e.target.value)}/>
      <label>email:</label>
      <input type ="email" value= {email} onChange={(e)=>setEmail(e.target.value)} />
      <button type="submit" >get in line</button> 
    </form>

    {formValues.map((val)=>{

      return(<div>
        <h1>{val.name}</h1>
        <h1>{val.email}</h1>
      </div>);
    })}
  
  </>
};

export default ControlledInputs;
