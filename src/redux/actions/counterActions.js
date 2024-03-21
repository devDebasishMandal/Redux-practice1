import { INCREASE, DECREASE, RESET } from "./actionTypes";

// this is the Action Creator Page where the functions return the
// action objects
// in real use actions are objects

export const increase = () => {
  return {
    type: INCREASE,
  };
};
export const decrease = () => {
  return {
    type: DECREASE,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
 