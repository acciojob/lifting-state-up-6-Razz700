
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [check,setcheck]=useState('false');
  const todos=['Learn React','Build a React app','Deploy the React app'];
  const [todoState,settodoState]= useState([true,true,true]);
  const handleComplete=(todoval,k)=>{
    setcheck(true);
todos.forEach((item,i)=>{
  if (todoval==item) {
    // console.log(todoState);
    settodoState(todoState.map((val,j)=>j==k?false:val));
  //console.log(todoState);}
}});
  }
  return (
    <div>
  <h1>Parent Component{check}</h1>
      <TodoList  todos={todos} handlefunc={handleComplete} state={todoState}/>
        {/* Do not remove the main div */}
        {check}
    </div>
  )
}

export default App
