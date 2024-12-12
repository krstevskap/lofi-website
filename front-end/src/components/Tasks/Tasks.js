import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import "./tasks.css";

const Tasks = () => {
  const loadTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(loadTasks);
  const [description, setDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks), [tasks]);
  });

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
          Add
        </button>
      </div>
    </div>
  );
};
export default Tasks;
