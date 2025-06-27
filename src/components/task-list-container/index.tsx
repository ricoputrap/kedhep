import { getTasks } from '@/server/tasks';
import React from 'react'
import { TaskList } from '../task-list';

interface Props {
  searchQuery?: string;
}

export default async function TaskListContainer({ searchQuery }: Readonly<Props>) {
  const { data: tasks } = await getTasks({ searchQuery });

  return (
    <>
      {tasks.map((taskList) => (
        <TaskList
          key={taskList.id}
          id={taskList.id}
          tasks={taskList.tasks}
          title={taskList.title}
        />
      ))}
    </>
  )
}
