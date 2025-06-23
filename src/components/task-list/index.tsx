import React from 'react';
import TaskItems from './task-items';
import { ITaskItem } from '@/server/tasks';

export { default as TaskListSkeleton } from './skeleton';

interface TaskListProps {
  id: number;
  tasks: ITaskItem[];
  title?: string;
}

export function TaskList({ id, tasks, title }: TaskListProps) {
  const taskItems = tasks.map(({ id, title, completed }) => ({ id, title, completed }));

  return (
    <div className="card card-border" id={`task-list-${id}`}>
      <div className="card-body p-3">
        {title && <h3 className="card-title">{title}</h3>}
        <TaskItems tasks={taskItems} />
      </div>
    </div>
  );
}