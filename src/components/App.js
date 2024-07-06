
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const todos=['todo1','todo2','todo3'];
  const handleComplete=(todoval,btn)=>{
todos.forEach((item,i)=>{
  if (todoval==item) {
    btn.remove();
  }
});
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
