import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./task.css";

const Task = ({ id, description, deleteTask }) => {
  const [markAsDone, setMarkAsDone] = useState(false);

  const changeCheckboxButton = () => {
    setMarkAsDone((prev) => !prev);
  };

  return (
    <div className="task-container">
      <div className="mark-task">
        <input type="checkbox" onClick={changeCheckboxButton} />
        {!markAsDone ? (
          <p>{description}</p>
        ) : (
          <p>
            <s>{description}</s>
          </p>
        )}
      </div>
      <button onClick={() => deleteTask(id)} className="delete-button">
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default Task;
