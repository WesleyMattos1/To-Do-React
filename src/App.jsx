import { useState } from "react";

import Todo from "./components/Todo";

import TodoForm from "./components/TodoForm";

import Search from "./components/search";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "adicionar uma funcionalidade no sistema",
      category: "Exemplo",
      iscomplete: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Exemplo",
      iscomplete: false,
    },
    {
      id: 3,
      text: "Estudar react",
      category: "Exemplo",
      iscomplete: false,
    },
  ]);
  const [search, setSearch] = useState("");
  /**
   *  Função para remoção de uma TODO
   * Recebe como parâmetro o id da TODO e retorna void (Nada)
   * @example {id: 6}
   */
  const removetodo = (id) => {
    /**
     * Variável que recebe uma 'cópia' do array de TODOS
     * (Usando a técnica com spread operator) Que basicamente copia todas as informações contidas na lista
     */
    const newTodos = [...todos];

    /**
     * Realiza o filtro dentro do array copiado de TODOS
     * Onde são retornados todos os registros que não possuam o id igual ao recebido por parametro
     * @example {newTodos.filter(todo => todo.id !== 6)}
     */
    const filteredTodos = newTodos.filter((todo) => todo.id !== id);

    /**
     * Define o estado com a nova lista de TODOS
     * Na qual não contém o registro com id recebido por parâmetro
     * @example {id: 6} Não vai existir na lista
     */
    setTodos(filteredTodos);
  };
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.iscomplete = !todo.iscomplete) : todo
    );
    setTodos(newTodos);
  };

  const addTodo = (text, category) => {
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
        <Search Search={Search} setSearch={setSearch} />
        <div className="content">
          <div className="items">
            {todos
              .filter((todo) =>
                todo.text.toLowerCase().includes(search.toLowerCase())
              )
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removetodo}
                />
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
