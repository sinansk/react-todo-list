import React from "react";
import "./styles.css";
import { useState } from "react";
import { getAllByAltText } from "@testing-library/react";

function Footer( {item, todo, setTodo, setFiltered, complatedList, activeList, allList } ) {
    
    function clearAll(e) {
        setTodo([]);
    }

    function handleFilter(e) {
        if (e.target.className === "Complated") {
            setFiltered(complatedList)
        } else if (e.target.className === "Active") {
            setFiltered(activeList)
        } else if (e.target.className === "All") {
            setFiltered(allList)
        }
        return
    }

    return (
        <div className="footer" onClick={handleFilter}>
            <p>Items Left {activeList.length}</p>
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