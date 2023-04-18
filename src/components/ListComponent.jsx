import React, { useRef } from "react";

function ListComponent({ tasks, deleteTask, editTask, toggleComplete }) {
  const inputRef = useRef();

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      editTask(index, inputRef.current.value);
    } else if (event.key === "Escape") {
      editTask(index);
    }
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`task ${task.isCompleted ? "completed" : ""}`}
        >
          {task.isEditing ? (
            <input
              ref={inputRef}
              defaultValue={task.text}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ) : (
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
          )}
          <button onClick={() => deleteTask(index)}>Sil</button>
          {task.isEditing ? (
            <button onClick={() => editTask(index, inputRef.current.value)}>
              Kaydet
            </button>
          ) : (
            <button onClick={() => editTask(index)}>Düzenle</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ListComponent;
