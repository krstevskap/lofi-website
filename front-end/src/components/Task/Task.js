import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
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
        <MdDelete />
      </button>
    </div>
  );
};

export default Task;
