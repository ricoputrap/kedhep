import React from 'react';
import TaskItems from './task-items';
import { ITaskItem } from '@/server/tasks';

interface TaskListProps {
  id: number;
  tasks: ITaskItem[];
  title?: string;
}

export function TaskList({ id, tasks, title }: TaskListProps) {
  return (
    <div className="card card-border" id={`task-list-${id}`}>
      <div className="card-body p-3">
        {title && <h3 className="card-title">{title}</h3>}

        <TaskItems
          tasks={tasks.map(({ id, title, completed }) => ({ id, title, completed }))}
        />
      </div>
    </div>
  );
}