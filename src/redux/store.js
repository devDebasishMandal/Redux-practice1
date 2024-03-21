import { createStore  } from "redux";
import counterReducer from "./reducers/counterReducers";


 const store= createStore(counterReducer); 



 export default store;


//  for the first time when the application is run then

//  step1:
// //  counterReducer(undefiend,undefined);