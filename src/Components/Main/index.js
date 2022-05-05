import React from "react";
import "./styles.css";
import Input from "./Input";
import List from "./List";
import Todo from "./List/Todo";
import Status from "./Status"
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function Main() {

    const [todo, setTodo] = useState([
        {
            id: uuidv4(), task: "Learn React", defaultChecked: false
        },
        {
            id: uuidv4(), task: "Learn Tailwind", defaultChecked: false
        },
        {
            id: uuidv4(), task: "Learn Gatsby", defaultChecked: false
        }
    ]);

    useEffect(() => {
        console.log(todo);
    },[todo])

    function removeTodo(e) {
        console.log(e.target.name)
        const id = e.target.getAttribute("name")
        setTodo(todo.filter(item => item.id !== id));
    }

    return (
        <div className="main">
            <Input todo={todo} setTodo={setTodo}/>
            <List todo={todo} removeTodo={removeTodo}/>   
            <Status />
        </div>
    )
}

export default Main;