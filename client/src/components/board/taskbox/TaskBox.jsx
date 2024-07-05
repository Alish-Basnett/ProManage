import React from "react";
import Task from "../task/Task";
import { Droppable } from "react-beautiful-dnd";
import "./TaskBox.css";

const TaskBox = ({ column, tasks }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <div
          className={`taskbox-container ${
            snapshot.isDraggingOver ? "dragging-over" : ""
          }`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h3>{column.title}</h3>
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskBox;
