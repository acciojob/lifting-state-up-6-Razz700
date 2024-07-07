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
      cy.get("li > button").eq(0).should("exist");
      cy.contains("Complete").click();
      cy.get('li:first-child button').should('not.exist');}}>Complete</button>} </li>
   )}
   )}
   </ul>
   </div>
  )
}

export default TodoList