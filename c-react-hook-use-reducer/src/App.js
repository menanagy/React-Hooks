import React, { useReducer } from 'react';
function reducer(state,action){
  console.log("Reducer");
      switch(action.type){
        case 'increment':
          return {count:state.count+action.palyoad};
        case 'decrement':
          return {count:state.count-action.palyoad};
        default:
          return state;
      }
}
function App(){

  const [state,dispatch]=useReducer(reducer,{ count:0 });//0==>intial Value 

      return(
        <div className="container text-center pt-5">
          <button className="btn btn-primary mx-3" onClick={()=>dispatch({type:'increment',palyoad:1})}>Count UP + </button>
          <h1 className="mt-3">{state.count}</h1>
          <button className="btn btn-danger mx-3" onClick={()=>dispatch({type:'decrement',palyoad:1})}>Count Down - </button>
        </div>   
      );

}


export default App;