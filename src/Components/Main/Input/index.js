import { useEffect, useState } from "react";
import "./styles.css";
import Todo from "../List/Todo";
import List from "../List";
import { v4 as uuidv4 } from 'uuid';


function Input({ todo, setTodo }) {
    const defaultFormValues = { id: uuidv4(), task: "", defaultChecked: false };

    const [form, setForm] = useState(defaultFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, task: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        // console.log(e.target);
        if (form.task === "" ) {
            return false;
        }
        setForm(defaultFormValues)
        setTodo([...todo, form])
     
        console.log({todo});
    }
   
    return (
        <form className="form" onSubmit={onSubmit}>
            <input
             className="input"
             name="task"
             placeholder="What will you do ?"
             value={form.task}
             onChange={onChangeInput}
             >
            </input>
            <button>Add</button>
        </form>
    );
}

export default Input;