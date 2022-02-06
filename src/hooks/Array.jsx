import React, { useState } from 'react';

export default function Array() {
    const [array, setarray] = useState([
        {
            fruit : 'apple',
            price : 500
        },
        {
            fruit : 'orange',
            price : 200
        },
        {
            fruit : 'banana',
            price : 100
        }
    ]);
    const addFruit = ()=>{
        if(array.length<=3){
            setarray([...array, {fruit : 'mango', price : 120}])
        }
        else{
            // setarray('')

        }
    }
  return (
      <>
      <div className="array">
          {array.map((e,id)=>{
              return(

                  <>
                  <li key={id}><h1>{e.fruit}</h1><span>{e.price}</span></li>
                  </>
                  ) 
              
          })}
          <button onClick={addFruit}>Add</button>
      </div>
      </>
  )
}
