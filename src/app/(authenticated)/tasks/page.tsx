import React from 'react'

import { TaskList } from "@/components/task-list";
import { Task } from "@/data/schema";

const tasks: Task[] = [
  { id: 1, title: 'Membersihkan gudang', completed: false, task_list_id: 1, user_id: 1, created_at: Date.now(), updated_at: Date.now() },
  { id: 2, title: 'Mengambil laundry', completed: true, task_list_id: 1, user_id: 1, created_at: Date.now(), updated_at: Date.now() },
];

export default function TasksPage() {
  return (
    <section id="tasks-page" className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      <TaskList
        tasks={tasks}
        title="Rumah"
      />
      <TaskList
        tasks={[]}
        title="Finance"
      />
      <TaskList
        tasks={[]}
        title="Kedhep"
      />
      <TaskList
        tasks={[]}
        title="SARA"
      />
      <TaskList
        tasks={tasks}
        title="Rumah"
      />
      <TaskList
        tasks={[]}
        title="Finance"
      />
      <TaskList
        tasks={[]}
        title="Kedhep"
      />
      <TaskList
        tasks={[]}
        title="SARA"
      />
    </section>
  )
}
