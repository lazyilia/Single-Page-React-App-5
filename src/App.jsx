import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1 className="title">To-Do List App</h1>
      <Input
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}
function Input({ input, setInput, todos, setTodos }) {
  function handleClick() {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  }
  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="I have to..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button className="add-btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
function List({ todos, setTodos }) {
  function handleDelete(indexToRemove) {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  }

  function handleDeleteAll() {
    setTodos([]);
  }
  return (
    <div className="list-section">
      <button className="clear-btn" onClick={handleDeleteAll}>
        Clear All
      </button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>
            {todo}{" "}
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
