import React, { useState } from 'react';



const UseStateObject = () => {

  let [obj,changeObj] = useState({

    name : "john doe",
    age: 24,
    message : "hello world"
  })

  let [name,changeName]=useState("john");
  let [age,changeAge] = useState(10);
  let [message,changeM]=useState("hi!!");

  let [x,changeX] = useState(0);

  // let y=0;

  // function abc(){

  //   changeObj({name:"john",age:25,message:"heel the world!"});
  // }
  function namer(){

    if(x%3===0){
      if(name==="john")
      changeName("john doe");
    else
      changeName("john"); 
    }else if(x%3===1){

      age++;
      changeAge(age);
    }else{

      if(message==="hi!!"){
        changeM("hi!! people")
      }else{
        changeM("hi!!")
      }
    }

    x++;
    // y++;
    // console.log(y);

    changeX(x);
    
  }



    return(<React.Fragment>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      <button type="button" className='btn' onClick={()=>namer()}>change one by one</button>
      
    </React.Fragment>)

    // return (<React.Fragment>
    //   <h2>useState object example</h2>
    //   <h2>{obj.name}</h2>
    //   <h2>{obj.age}</h2>
    //   <h2>{obj.message}</h2>
    //   <button type="button" className = "btn" onClick={()=>{abc()}}>change message</button>
    //   </React.Fragment>);
};

export default UseStateObject;
