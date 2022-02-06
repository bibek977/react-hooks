import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toggle() {
    const [name, setname] = useState("bibek");
    useEffect(()=>{
        notify()
    },[])

    const change=()=>{
        if(name==="bibek"){
            setname("bhattarai")
        }
        else{
            setname("bibek")
        }
        notify()
    }
    const notify=()=> toast("Changed")
  return (
      <div className='toggle'>
          <h1>Hello, {name}</h1>
          <button  onClick={change}>change</button>
          {/* <button  onClick={notify}>change</button> */}
          <ToastContainer/>
      </div>
  )
}
