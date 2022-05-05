import React from "react";
// import "./styles.css";
import Todo from "./Todo";
import { useState } from "react";

function List({todo, removeTodo }) {

    return (
        <div className="list">  
            <ul >
                {todo.map((item, i) => (
                    <Todo
                     item={item} 
                     i={i} 
                     key={i} 
                     removeTodo={removeTodo}
                     name={item.id}   
                     />
                ))}
            </ul>
        </div>
    )
}

export default List;