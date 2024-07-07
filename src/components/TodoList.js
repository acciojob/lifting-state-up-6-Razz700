import React from 'react'
const TodoList = (props) => { 
  return (
    <div>
   <h2>Child Component</h2>
   <ul>
   {props.todos.map((item,i)=>{
    return(<li key={'ab'+i}>{item.text} {!item.isCompleted && <button key={'b'+i} onClick={()=>{
      props.handlefunc(i);
    }}>Complete</button>} </li>)}
    
   )}
   </ul>
   </div>
  )
}

export default TodoList