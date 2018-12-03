import React from "react";

export default function Todo(props) {
  const {
    todo: { text, isComplete },
    index,
    completeTodo,
    removeTodo
  } = props;

  const style = () => ({
    textDecoration: isComplete ? "line-through" : ""
  });

  const buttonText = () => (isComplete ? "Not done" : "Done");

  const handleComplete = () => completeTodo(index);

  const handleRemove = () => removeTodo(index);

  return (
    <div className="todo" style={style()}>
      {text}
      <div>
        <button onClick={handleComplete}>{buttonText()}</button>
        <button onClick={handleRemove}>x</button>
      </div>
    </div>
  );
}
