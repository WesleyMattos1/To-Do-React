import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;

    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="card todo-form">
      <h1>Criar tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="Digite o titulo:"
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione a categoria</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
          <option value="Trabalho">Trabalho</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
