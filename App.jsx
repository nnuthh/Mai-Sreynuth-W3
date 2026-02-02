import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoItem({ text, onRemove }) {
  return (
    <li>
      {text}
      <button onClick={onRemove}>Delete</button>
    </li>
  );
}

function App() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Do Lab 3.12",
    "Practice Coding"
  ]);

  const deleteTask = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onRemove={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
