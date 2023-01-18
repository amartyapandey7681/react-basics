import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {

  let [data,setData] = useState("data");
  let [load,setLoad] = useState(true);
  let [err,setErr] = useState(false);


  useEffect(()=>{


    fetch(url)
      .then((data)=>{

        if(data.status>=200 && data.status<=299){

          setLoad(false);
          setErr(false);
          return data.json();
          

        }else{
          setErr(true);
          setLoad(false);
          throw new Error(data.statusText) ;
        }
      }).then((data)=>{

        setData(data.login);
        setLoad(false);

      }).catch((err)=>console.log(err))
  },[])


  if(load === true){

    return (<>
    <div>Loading...</div>
    </>)
  }

  else if(err){

    return (<>
      <div>Error...</div>
      </>)

  }else{

    return (<>
      <div>{data}</div>
      </>)
  }


};

export default MultipleReturns;
