
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const todos=['todo1','todo2','todo3'];
  const [todoState,settodoState]= useState([true,true,true]);
  const [now,setnow]=useState(true);
  const handleComplete=(todoval,k)=>{
todos.forEach((item,i)=>{
  if (todoval==item) {
    // console.log(todoState);
  setnow(false);
    settodoState(todoState.map((val,j)=>j==k?false:val));
  //console.log(todoState);}
}});
  }
  return (
    <div>
  <h1>Parent Component</h1>
      <TodoList now={now} todos={todos} handlefunc={handleComplete} state={todoState}/>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
