import React from 'react'

import { TaskList } from "@/components/task-list";
import { ITaskList, getTasks } from '@/server/tasks';


export default async function TasksPage() {
  const tasks: ITaskList[] = await getTasks(1);

  return (
    <section id="tasks-page" className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {tasks.map((taskList) => (
        <TaskList
          key={taskList.id}
          tasks={taskList.tasks}
          title={taskList.title}
        />
      ))}
    </section>
  )
}
