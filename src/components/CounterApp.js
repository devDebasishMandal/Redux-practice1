import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { increase, decrease, reset } from "../redux/actions/counterActions";

const CounterApp = () => {
  // useSelector ---(redux to app) Data Exchange
  // useDispatch ---(app to redux) Data Exchange

  const count = useSelector((state) => state.counter);
 console.log(count);
  // useDispatch also returns a function

  const dispatch = useDispatch();

 
  function handleIncrease() {
    // call the increase function
    dispatch(increase());
  } 
  function handleDecrease() {
    // call the decrease function
    dispatch(decrease());
  }
  function handleReset() {
    // call the increase function
    dispatch(reset());
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterApp;
