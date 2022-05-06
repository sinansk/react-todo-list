import React from "react";
import "./styles.css";
import Input from "./Input";
import List from "./List";
import Todo from "./List/Todo";
import Footer from "./Footer"
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "to-do-list-todos";

function Main() {

    const storageTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

    if (!storageTodo) {

    }


    useEffect((storageTodo) => {
        function checkLocalStorage() {
       
        if (storageTodo) {
            setTodo(storageTodo)
        }
    }
        window.addEventListener('storage', checkLocalStorage)

        return () => {
          window.removeEventListener('storage', checkLocalStorage)
        }
    }, [])  

    const [todo, setTodo] = useState(storageTodo);

    useEffect(() => {
        if (todo)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo));
      }, [todo]);

    useEffect(() => {
        console.log(todo);
    },[todo])

    function removeTodo(e) {
        console.log(e.target.name)
        const id = e.target.getAttribute("name")
        setTodo(todo.filter(item => item.id !== id));
    }
    
    return (
        <div className={"main " + (todo.length !== 0 ? "active" : null)}>
            <Input todo={todo} setTodo={setTodo}/>
            <List todo={todo} setTodo={setTodo} removeTodo={removeTodo}/>   
            <Footer todo={todo} storageTodo={storageTodo} />
        </div>
    )
}

export default Main;