import { ITaskList, getTasks } from '@/server/tasks';
import React from 'react'
import { TaskList } from '../task-list';

export default async function TaskListContainer() {
  const tasks: ITaskList[] = await getTasks(1);

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
