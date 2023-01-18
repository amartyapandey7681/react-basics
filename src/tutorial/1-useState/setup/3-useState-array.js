import React from 'react';
import { data } from '../../../data';
import { useState } from 'react';



const UseStateArray = () => {
  
  let [names,setNames] = useState(data);

  function remove(id){

    let g = names.filter((val)=>{

      return val.id !==id;
    })

    setNames(g);
  }

  return (<>

      {names.map((val)=>{

          let {id ,name} = val;
          return <div key={id} className="item">

            <h2>{name}</h2>
            <button type="button" className='btn' onClick={()=>remove(id)}>remove item</button>

          </div>;

      })}

      <button type="button" className='btn' onClick={()=>setNames([])}>delete all</button>
  </>);
};

export default UseStateArray;
