import React, { useState } from "react";

export default function TodoForm(props) {
  const { addTodo } = props;
  const [value, setValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    if (!value) return;

    addTodo(value);
    setValue("");
  };

  const handleOnChange = event => setValue(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={handleOnChange}
        placeholder="Enter your task"
      />
    </form>
  );
}
