
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const todos=['todo1','todo2','todo3'];
  let completedTodos=[false,false,false];
  const handleComplete=(todoval,btn)=>{
todos.forEach((item,i)=>{
  if (todoval==item) {
    completedTodos[i]=true;
    btn.style.display='none';
  }
});
console.log('sdf',completedTodos);
  }
  return (
    <div>
  <h1>Parent Component</h1>
      <TodoList todos={todos} handlefunc={handleComplete} />
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
