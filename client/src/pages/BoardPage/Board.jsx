import React, { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import Column from "./Column";
import "./Board.css";

const Board = () => {
  const [columns, setColumns] = useState([
    [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
      { id: 3, title: "Task 3" },
    ],
    [
      { id: 4, title: "Task 4" },
      { id: 5, title: "Task 5" },
      { id: 6, title: "Task 6" },
    ],
    [
      { id: 7, title: "Task 7" },
      { id: 8, title: "Task 8" },
      { id: 9, title: "Task 9" },
    ],
    [
      { id: 10, title: "Task 10" },
      { id: 11, title: "Task 11" },
      { id: 12, title: "Task 12" },
    ],
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setColumns((columns) => {
      const originalColumnIndex = columns.findIndex((col) =>
        col.some((task) => task.id === active.id)
      );
      const newColumnIndex = columns.findIndex((col) =>
        col.some((task) => task.id === over.id)
      );

      const task = columns[originalColumnIndex].find(
        (task) => task.id === active.id
      );
      const newColumns = [...columns];

      newColumns[originalColumnIndex] = newColumns[originalColumnIndex].filter(
        (task) => task.id !== active.id
      );
      newColumns[newColumnIndex] = [...newColumns[newColumnIndex], task];

      return newColumns;
    });
  };

  return (
    <div className="board">
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="columns">
          {columns.map((column, index) => (
            <Column key={index} id={`column-${index}`} tasks={column} />
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default Board;
