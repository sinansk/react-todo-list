import React, { useEffect, useState } from "react";
import Input from "../../Input";
import "./styles.css";

function Todo({todo, setTodo, item, filteredList }) {

    function removeTodo(e) {
        console.log(e.target.name)
        const id = e.target.getAttribute("name")
        setTodo(todo.filter(item => item.id !== id));
    }

    function toggleDone(e) {
        console.log(e.target.id)
        let updatedTodo = filteredList.map(item => {
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