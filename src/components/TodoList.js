import React from 'react'

const TodoList = (props) => {
    console.log(props.todos); 
  return (
    <div>
   <h2>Child Component</h2>
   <ul>
   {props.todos.map((item,i)=>{return(
    <li key={i}>{item}  <button onClick={(e)=>{props.handlefunc(item,e.target)}}>completed</button></li>
   )}
   )}
   </ul>
   </div>
  )
}

export default TodoList