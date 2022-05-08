import React from "react";
import "./styles.css";
import Input from "./Input";
import List from "./List";
import Todo from "./List/Todo";
import Footer from "./Footer"
import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "to-do-list-todos";

function Main() {

    const storageTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

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

    const [filteredList, setFiltered] = useState(todo);

    useEffect(() => {
        setFiltered(todo)
    },[todo])
    
    return (
        <div className={"main " + (todo.length !== 0 ? "active" : null)}>
            <Input todo={todo} setTodo={setTodo}/>
            <List todo={todo} setTodo={setTodo} filteredList={filteredList}/>   
            <Footer todo={todo} setTodo={setTodo} filteredList={filteredList} setFiltered={setFiltered} />
        </div>
    )
}

export default Main;