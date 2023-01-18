import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  let [u,setu] = useState([]);


  let getData = async()=>{

    let data = await fetch(url);
    let d = await data.json();
    console.log(d[0]);
    setu(d);
  } 

  useEffect(()=>{

    getData();
  },[])

  function removeU(id){

    console.log(id);

    let k = u.filter((val)=>{
      return val.id!==id;
    })
    setu(k);
  }


  return (<>

    {u.map((val)=>{

      let {login , html_url , avatar_url ,id} = val;

      return (<div className='users'>

          <h2>{login}</h2>
          <img src={avatar_url} alt="profile"/>
          <a href = {html_url}>profile</a>

          <button type = "button" className='btn' onClick={()=>removeU(id)}>remove</button>
      </div>)
    })}
  </>);
};

export default UseEffectFetchData;
