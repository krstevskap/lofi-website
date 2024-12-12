import React, { useState } from "react";
import Task from "../Task/Task";
import "./tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Math.random() * 1000,
      description: description,
    };

    setTasks((prev) => [...prev, newTask]);
    setDescription("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="tasks-container">
      <div className="tasks">
        {tasks.map((t) => (
          <Task
            key={t.id}
            id={t.id}
            description={t.description}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      <div className="add-task-container">
        <input
          type="text"
          value={description || ""}
          onChange={(e) => setDescription(e.target.value)}
          maxLength="40"
          size="35"
        />
        <button className="add-button" onClick={addNewTask}>
          Add task
        </button>
      </div>
    </div>
  );
};
export default Tasks;
