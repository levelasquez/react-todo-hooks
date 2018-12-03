import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "React Hooks in Depth",
      isComplete: false
    },
    {
      text: "Write Articles @ Medium",
      isComplete: false
    },
    {
      text: "Share article at Reddit",
      isComplete: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];

    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];

    newTodos[index].isComplete = !newTodos[index].isComplete;

    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1 className="title">Create a Todo with React Hooks</h1>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
