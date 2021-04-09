import React, { useState } from 'react';
import Header from './Header';

  //Before Hooks Can't use state in Function Component 
  // Function Component  No this , No render()function
  //for Make State using useState(useState==>is Func hook into React Feature)
  /* 
      Not Exact Just Imagne
      function useState(initalValue){
        let item =initalValue;
        let setItem(val)=>{
          item=val;
        }
        return [item,setItem] ; 
        //Trigger React Rendring 

      }
  
  */
function App(){
  const [counter,setCounter]=useState(0);//0==>intial Value 
  //Why Const==> In order not to be able to define a variable with the same name
  /*
      Destructing 
       var [first, second, third] = ["Laide", "Gabriel", "Jets"]; ==>var first = "laide",second = "Gabriel",third = "Jets";
       //const counter=useState(0)[0]
       //const setCounter=useState()[1]
  */
 
    function countUp(){
      setCounter(counter+1);
    };

      return(
        <div className="container text-center pt-5">
          <button className="btn btn-primary" onClick={countUp}>Count UP + </button>
          <h1 className="mt-3">{counter}</h1>
          <Header header='Hi Mina'/>
        </div>   
      );

}


export default App;