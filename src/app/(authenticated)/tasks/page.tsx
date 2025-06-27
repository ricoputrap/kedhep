import React, { Suspense } from 'react'

import { TaskListSkeleton } from "@/components/task-list";
import TaskListContainer from '@/components/task-list-container';


export default function TasksPage() {
  return (
    <section id="tasks-page" className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      <Suspense fallback={(
        <>
          {Array.from({ length: 6 }).map((_, index) => (
            <TaskListSkeleton key={index} />
          ))}
        </>
      )}>
        <TaskListContainer />
      </Suspense>
    </section>
  )
}
