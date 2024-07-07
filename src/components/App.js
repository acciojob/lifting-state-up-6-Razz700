
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  let todos=[{text:'Learn React',isCompleted:false},
    {text:'Build a React app',isCompleted:false},
    {text:'Deploy the React app',isCompleted:false}];
    const [item1,setitem1]=useState(todos);
  //const [todoState,settodoState]= useState([true,true,true]);
  const handleComplete=(todoval)=>{
const newtodos=[...item1]
newtodos.forEach((item)=>{
  if (todoval==item.text) {  
  item.isCompleted=true;
   // settodoState(todoState.map((val,j)=>j==k?false:val));
  //console.log(todoState);}
}});

setitem1(newtodos);
  }
  return (
    <div>
  <h1>Parent Component</h1>
      <TodoList  todos={item1} handlefunc={handleComplete} />
        {/* Do not remove the main div */}   
    </div>
  )
}

export default App
