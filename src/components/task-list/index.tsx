import React from 'react';
import TaskItems from './task-items';
import { ITaskItem } from '@/server/tasks';

interface TaskListProps {
  tasks: ITaskItem[];
  title?: string;
}

export function TaskList({ tasks, title }: TaskListProps) {

  return (
    <div className="card card-border">
      <div className="card-body p-3">
        {title && <h3 className="card-title">{title}</h3>}

        <TaskItems
          tasks={tasks.map(({ id, title, completed }) => ({ id, title, completed }))}
        />
      </div>
    </div>
  );
}