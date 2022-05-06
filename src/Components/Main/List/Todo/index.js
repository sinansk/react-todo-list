import React, { useEffect, useState } from "react";
import Input from "../../Input";
import "./styles.css";

function Todo({item, removeTodo, todo, setTodo, i }) {

    //  const newTodo = { id: "", task:todo.task, isComplated: false};

    function toggleDone(e) {
        console.log(e.target.id)
        let updatedTodo = todo.map(item => {
            if (e.target.id === item.id) {
                return {...item, done: !item.done}
            }
            return item
        });
        setTodo(updatedTodo)
    }


    return (  
    <li className="todo">
        <input
         type="checkbox" 
         className="toggle" 
         id={item.id}
         checked={item.done}
         onChange={toggleDone}
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