"use client";

import React, { useTransition } from 'react'
import { updateTaskCompletion } from '../../server/tasks';

interface Props {
  id: number,
  title: string,
  isCompleted: boolean,
}

export default function TaskItem({ id, title, isCompleted }: Props) {
  const [isPending, startTransition] = useTransition();

  const onToggle = async () => {
    console.log("Toggling task:", id, "to", !isCompleted);
    startTransition(async () => {
      try {
        await updateTaskCompletion(id, !isCompleted);
      }
      catch (error) {
        console.error("Failed to update task completion:", error);
      }
    })
  };

  return (
    <li key={id} className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggle()}
        disabled={isPending}
        className={`checkbox checkbox-sm ${isPending ? 'loading' : ''}`}
        aria-label={`Mark "${title}" as ${isCompleted ? 'incomplete' : 'complete'}`}
      />
      <span className={`flex-1 ${isCompleted ? 'line-through text-gray-400' : ''}`}>
        {title}
      </span>
      {isPending && (
        <span className="loading loading-spinner loading-xs"></span>
      )}
    </li>
  )
}
