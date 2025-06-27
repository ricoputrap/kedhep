import React, { Suspense } from 'react'

import { TaskListSkeleton } from "@/components/task-list";
import TaskListContainer from '@/components/task-list-container';
import SearchBox from '@/components/search-box';


export default async function TasksPage({ searchParams }: {
  searchParams?: Promise<{
    query?: string
  }>
}) {
  const params = await searchParams;

  return (
    <div className="space-y-6">
      {/* Search Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <div className="w-full max-w-md">
          <SearchBox placeholder="Search lists or tasks..." />
        </div>
      </div>

      {/* Task Lists Grid */}
      <section id="tasks-page" className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        <Suspense fallback={(
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <TaskListSkeleton key={index} />
            ))}
          </>
        )}>
          <TaskListContainer searchQuery={params?.query} />
        </Suspense>
      </section>
    </div>
  )
}
