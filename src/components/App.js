
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  let todos=[{text:'Learn React',isCompleted:false},
    {text:'Build a React app',isCompleted:false},
    {text:'Deploy the React app',isCompleted:false}];
    const [item1,setitem1]=useState(todos);
  //const [todoState,settodoState]= useState([true,true,true]);
  const handleComplete=(index)=>{
setitem1(item1 => {
  const newTodos = [...item1];
  newTodos[index].isCompleted = true;
  return newTodos;
});
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
