// import React from 'react'
// const TodoList = (props) => { 
//   return (
//     <div>
//    <h2>Child Component</h2>
//    <ul>
//    {props.todos.map((item,i)=>{
//     return(<li key={'ab'+i}>{item.text} {!item.isCompleted && <button key={'b'+i} onClick={()=>{
//       props.handlefunc(i);
//     }}>Complete</button>} </li>)}
    
//    )}
//    </ul>
//    </div>
//   )
// }

// export default TodoList
import React from "react";

import List from "./List.js";

const Todo = () => {

  return (

    <div>

      <ul>

        <h1>Child Component</h1>

        {["Learn React", "Build a React app", "Deploy a React app"].map(

          (list, idx) => (

            <List key={idx} text={list} />

          )

        )}

      </ul>

    </div>

  );

};

export default Todo;

