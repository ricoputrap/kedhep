"use client";

import { Task } from '@/data/schema';
import React from 'react'

interface Props {
  tasks: Pick<Task, 'id' | 'title' | 'completed'>[];
}

export default function TaskItems({ tasks }: Props) {
  const onToggle = (taskId: number, currentStatus: boolean) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !currentStatus } : task
    );
    // Here you would typically update the state or send the updated tasks to an API
    console.log('Updated Tasks:', updatedTasks);
  };

  return (
    <ul className="space-y-2">
      {tasks.length === 0 ? (
        <li className="text-gray-400 text-sm">No tasks available</li>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id, task.completed)}
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
  )
}
