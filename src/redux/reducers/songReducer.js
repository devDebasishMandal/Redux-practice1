

import { CLICKED_SONG } from "../actions/actionTypes.js";

const initialState=null;


// when the store calls the reducer 
// and pass the info the reducer performs the action and updates the store


const songReducer =(state=initialState,action)=>{

if(action.type===CLICKED_SONG){
    return action.payload;
}
else{
    return state;
}


}
// const songReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "CLICKED_SONG":
//       // Handle the "CLICKED_SONG" action
//       // In this example, we're just returning the previous state
//       return action.payload;
//     // Handle other actions if needed
//     default:
//       // For any other actions, return the current state unchanged
//       return state;
//   }
// };

export default songReducer;