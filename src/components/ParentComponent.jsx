import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";

const ParentComponent = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, isEditing: false }]);
  };

  const deleteTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <div>
      <InputComponent addTask={addTask} />
      <ListComponent tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default ParentComponent;
