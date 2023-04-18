import React from "react";

const ListComponent = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li>
          <span>{task.text}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
