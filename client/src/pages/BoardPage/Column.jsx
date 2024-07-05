import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task } from "./task/Task";
import "./Column.css";

const Column = ({ id, tasks }) => {
  return (
    <div className="column">
      <h2 className="column-title">{id}</h2>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
