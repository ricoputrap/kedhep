import React from 'react';
import { ITaskItem } from '@/server/tasks';
import TaskItem from './task-item';

export { default as TaskListSkeleton } from './skeleton';

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

        <ul className="space-y-2">
          {tasks.length === 0 ? (
            <li className="text-gray-400 text-sm">No tasks available</li>
          ) : (
            tasks.map((item) => (
              <TaskItem
                key={item.id}
                id={item.id}
                title={item.title}
                isCompleted={item.completed}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}