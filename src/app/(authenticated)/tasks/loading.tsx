import TaskListSkeleton from '@/components/task-list/skeleton';

export default function TasksLoading() {
  return (
    <section id="tasks-page" className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {/* Show multiple skeleton cards */}
      {Array.from({ length: 6 }).map((_, index) => (
        <TaskListSkeleton key={index} />
      ))}
    </section>
  )
}
