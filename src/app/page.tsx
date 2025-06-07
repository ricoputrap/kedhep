"use client"

import { TaskList } from "@/components/task-list";
import { Task } from "../data/schema";

const tasks: Task[] = [
  { id: 1, title: 'Membersihkan gudang', completed: false, task_list_id: 1, user_id: 1, created_at: Date.now(), updated_at: Date.now() },
  { id: 2, title: 'Mengambil laundry', completed: true, task_list_id: 1, user_id: 1, created_at: Date.now(), updated_at: Date.now() },
];


export default function Home() {
  function handleTaskToggle(taskId: number, completed: boolean) {
    console.log(`Task ${taskId} toggled to ${completed}`);
    // Update your state or send to API here
  }


  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to Next.js!</h1>

      <button className="btn btn-primary">Button</button>

      <div className="w-full p-5 grid grid-cols-1 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-6">
        <TaskList
          tasks={tasks}
          onTaskToggle={handleTaskToggle}
          title="Rumah"
        />
        <TaskList
          tasks={[]}
          onTaskToggle={handleTaskToggle}
          title="Finance"
        />
        <TaskList
          tasks={[]}
          onTaskToggle={handleTaskToggle}
          title="Kedhep"
        />
        <TaskList
          tasks={[]}
          onTaskToggle={handleTaskToggle}
          title="SARA"
        />
        <TaskList
          tasks={tasks}
          onTaskToggle={handleTaskToggle}
          title="Rumah"
        />
        <TaskList
          tasks={[]}
          onTaskToggle={handleTaskToggle}
          title="Finance"
        />
        <TaskList
          tasks={[]}
          onTaskToggle={handleTaskToggle}
          title="Kedhep"
        />
        <TaskList
          tasks={[]}
          onTaskToggle={handleTaskToggle}
          title="SARA"
        />
      </div>
    </div>
  );
}
