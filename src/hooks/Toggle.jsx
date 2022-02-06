import React, { useState } from 'react';

export default function Toggle() {
    const [name, setname] = useState("bibek");

    const change=()=>{
        if(name==="bibek"){
            setname("bhattarai")
        }
        else{
            setname("bibek")
        }
    }
  return (
      <div className='toggle'>
          <h1>Hello, {name}</h1>
          <button  onClick={change}>change</button>
      </div>
  )
}
