import React from 'react'


import { UseDispatch,useSelector } from 'react-redux'






const CounterApp = () => {
 const count= useSelector(state=>state);




  return (
    <div>
<h1>{count}</h1>
<button>Increase</button>
    </div>
  )
}

export default CounterApp;


2:0000