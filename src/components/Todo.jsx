import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="card todo"
      style={{ textDecoration: todo.iscomplete ? "line-through" : "" }}
    >
      <div className="todo-content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="btn-complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="btn-remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
