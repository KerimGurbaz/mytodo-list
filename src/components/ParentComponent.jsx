import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";

const ParentComponent = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, isEditing: false, isCompleted: false }]);
  };

  const deleteTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  const editTask = (index, newText) => {
    const newTasks = [...tasks];
    if (newText) {
      newTasks[index].text = newText;
      newTasks[index].isEditing = !newTasks[index].isEditing;
    } else {
      newTasks[index].isEditing = !newTasks[index].isEditing;
    }
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  return (
    <div>
      <InputComponent addTask={addTask} />
      <ListComponent
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default ParentComponent;
