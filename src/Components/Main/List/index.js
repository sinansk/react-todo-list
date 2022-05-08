import React from "react";
// import "./styles.css";
import Todo from "./Todo";


function List({ todo, removeTodo, setTodo, filteredList, setFiltered }) {

  return (

    <div className="list">
      <ul>
        {filteredList.map((item, i) => (
          <Todo
            item={item}
            i={i}
            key={i}
            removeTodo={removeTodo}
            name={item.id}
            setTodo={setTodo}
            todo={todo}
            filteredList={filteredList}
            setFiltered={setFiltered}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
