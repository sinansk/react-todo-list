import React, { useEffect, useState } from "react";
import Input from "../../Input";
import "./styles.css";

function Todo({item, removeTodo }) {

    //  const newTodo = { id: "", task:todo.task, isComplated: false};

    return (  
    <li className="todo">
        <input
         type="checkbox" 
         className="toggle" 
         id={item.id} 
         defaultChecked={item.defaultChecked}
         >
         </input>
        <label htmlFor={item.id}>{item.task}</label>
        <button
         className="removeTodo"
         name={item.id}
         onClick={removeTodo}
         >X</button>           
    </li>
    );
}

export default Todo;