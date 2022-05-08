import React, { useEffect } from "react";
import "./styles.css";
import { useState } from "react";

function Footer( {item, todo, setTodo, filteredList, setFiltered } ) {

    let [itemsCount, setItemCount] = useState(todo.length)

    useEffect(() => {
        setItemCount(todo.length)
    }, [todo])

    function clearAll() {
        setTodo([]);
    }

    function handleFilter(e) {

        const complatedList = todo.filter(item => item.done === true)
        const activeList = todo.filter(item => item.done === false)

        if (e.target.className === "Complated") {
            setFiltered(complatedList)
            setItemCount(complatedList.length)
        } else if (e.target.className === "Active") {
            setFiltered(activeList)
            setItemCount(activeList.length)
        } else if (e.target.className === "All") {
            setFiltered(todo)
            setItemCount(todo.length)
        }
        return
    }

    return (
        <div className="footer" onClick={handleFilter}>
            <p>Items {itemsCount}</p>
            <ul>
                <li>
                    <button className="All">All</button>
                </li>
                <li>
                    <button className="Active">Active</button>
                </li>
                <li>
                    <button className="Complated">Complated</button>
                </li>
            </ul>
            <button onClick={clearAll}>Clear All</button>
        </div>
    )
}

export default Footer;