import React from "react";

const ListComponent = ({ tasks, deleteTask, editTask, toggleCopmlete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.isCompleted ? "completed" : ""}>
          {task.isEditing ? (
            <input
              value={task.text}
              onChange={(e) => editTask(index, e.target.value)}
            />
          ) : (
            <span onClick={() => toggleCopmlete(index)}>{task.text}</span>
          )}
          <button onClick={() => deleteTask(index)}>Sil</button>
          {task.isEditing ? (
            <button onClick={() => editTask(index)}>Kaydet</button>
          ) : (
            <button onClick={() => editTask(index, task.text)}>Düzenle</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
