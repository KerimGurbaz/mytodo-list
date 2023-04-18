import React, { useState } from "react";

const InputComponent = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      addTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputComponent;
