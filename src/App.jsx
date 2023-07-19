import { useState } from "react";

import Todo from "./components/Todo";

import TodoForm from "./components/TodoForm";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "adicionar uma funcionalidade no sistema",
      category: "trabalho",
      iscomplete: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      iscomplete: false,
    },
    {
      id: 3,
      text: "Estudar react",
      category: "Estudos",
      iscomplete: false,
    },
    {
      id: 4,
      text: "adicionar uma funcionalidade no sistema",
      category: "trabalho",
      iscomplete: false,
    },
    {
      id: 5,
      text: "Ir para academia",
      category: "Pessoal",
      iscomplete: false,
    },
    {
      id: 6,
      text: "Estudar react",
      category: "Estudos",
      iscomplete: false,
    },
  ]);

  const removetodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const addTodo = (text, category) => {
    console.log(text);
    console.log(category);
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        iscomplete: false,
      },
    ];
    setTodos(newTodos);
  };
  return (
    <>
      <div className="app">
        <h1>Lista de tarefas</h1>
        <div className="content">
          <div className="items">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} removeTodo={removetodo} />
            ))}
          </div>
          <div className="form">
            <TodoForm addTodo={addTodo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
