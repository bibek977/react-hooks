import React, { useReducer } from 'react';

const initValue = 0
const reducer = (state,action)=>{
    if (action.type==="Inc"){
        return state + 1
    }
    if (action.type==="Dec"){
        return state - 1
    }
}
export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer,initValue);
  return (
      <>
      <div className="reducer">
          <h1>{state}</h1>
          <button onClick={()=>dispatch({type : 'Inc'})}>Inc</button>
          <button onClick={()=>dispatch({type : 'Dec'})}>Dec</button>
      </div>
      </>
  )
}
