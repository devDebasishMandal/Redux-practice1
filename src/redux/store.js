import { createStore,combineReducers  } from "redux";
import counterReducer from "./reducers/counterReducers";
import songReducer from "./reducers/songReducer";

//  const store= createStore(counterReducer); 


const rootReducer = combineReducers({
  counter: counterReducer,
  song: songReducer,
});

const store=createStore(rootReducer);

 export default store;

// usedispatch ({action creator }) {type:'fwf',payload :data}
// comes to store with the info
//store call the reducer ---

//  for the first time when the application is run then

//  step1:
// //  counterReducer(undefiend,undefined);