import React from "react";

const Todo = ({ todo, removeTodo }) => {
  return (
    <div className="card todo">
      <div className="todo-content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="btn-complete">Completar</button>
        <button className="btn-remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
