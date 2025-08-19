import { Task } from "../Task/Task";
import "./Column.css";
import type { TaskType } from "../../types/task";


import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface ColumnProps {
  tasks: TaskType[];
}

export const Column: React.FC<ColumnProps> = ({ tasks }) => {
  return (
    <div className="column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task id={task.id} title={task.title} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
};
