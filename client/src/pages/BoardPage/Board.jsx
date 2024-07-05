import React from "react";
import { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import Column from "./Column";
import { arrayMove } from "@dnd-kit/sortable";

const Board = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <div>
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <Column id="toDo" tasks={tasks} />
      </DndContext>
    </div>
  );
};

export default Board;
