'use client';

import React from 'react';
import type { Task } from '../../data/schema';

interface TaskListProps {
  tasks: Task[];
  title?: string;
  onTaskToggle: (taskId: number, completed: boolean) => void;
}

export function TaskList({ tasks, title, onTaskToggle }: TaskListProps) {
  const handleToggle = (taskId: number, currentStatus: boolean) => {
    onTaskToggle(taskId, !currentStatus);
  };

  return (
    <div className="card card-border">
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}

        <ul className="space-y-2">
          {tasks.length === 0 ? (
            <li className="text-gray-400 text-sm">No tasks available</li>
          ) : (
            tasks.map((task) => (
              <li key={task.id} className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id, task.completed)}
                  className="checkbox checkbox-sm"
                  aria-label={`Mark "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
                />
                <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                  {task.title}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

// Example of how to use this component:
// 
// const tasks = [
//   { id: 1, title: 'Membersihkan gudang', completed: false, task_list_id: 1, user_id: 1, created_at: Date.now(), updated_at: Date.now() },
//   { id: 2, title: 'Mengambil laundry', completed: true, task_list_id: 1, user_id: 1, created_at: Date.now(), updated_at: Date.now() },
// ];
//
// function handleTaskToggle(taskId: number, completed: boolean) {
//   console.log(`Task ${taskId} toggled to ${completed}`);
//   // Update your state or send to API here
// }
// 
// <TaskList
//   tasks={tasks}
//   onTaskToggle={handleTaskToggle}
//   title="Rumah"
// />