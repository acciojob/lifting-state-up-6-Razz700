import React from 'react'

const TodoList = (props) => {
    console.log(props.todos); 
  return (
    <div>
   <h2>Child Component</h2>
   <ul>
   {props.todos.map((item,i)=>{return(<div>
    <li key={i}>{item}</li>
    <button id={'a'+i} onClick={(e)=>{props.handlefunc(item,e.target)}}>completed</button>
   </div>
   )}
   )}
   </ul>
   </div>
  )
}

export default TodoList