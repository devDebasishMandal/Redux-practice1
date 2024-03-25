// for every action creator file there will be a reducer file  

// so this is counter reducer 



import { INCREASE, DECREASE, RESET } from "../actions/actionTypes.js";

const InitialState=0;
// reducers take 2 parameters (state(currentvalue),action) 
const counterReducer =(state=InitialState,action)=>{


switch (action.type) {
    case INCREASE:
        return state+1;
        // break;
    case DECREASE:
        return state-1;
        // break;

    case RESET :
        return 0;  
        // break;  
    default:
        return state;
        break;
}

}



// for one group of actions there will be only 1 reducer so default export  


export default counterReducer;