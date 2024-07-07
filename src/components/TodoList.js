import React from 'react'
const TodoList = (props) => {
   // console.log(props.todos,props.state); 
  return (
    <div>
   <h2>Child Component</h2>
   <ul>
   {props.todos.map((item,i)=>{return(
    <li key={i}>{item} {props.state[i] && <button onClick={()=>{
      props.handlefunc(item,i);
    }}>Complete</button>} </li>
   )}
   )}
   </ul>
   </div>
  )
}

export default TodoList