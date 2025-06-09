import React from 'react'

export default function TaskListSkeleton() {
  return (
    <div className="card card-border">
      <div className="card-body p-3">
        {/* Title skeleton */}
        <div className="h-6 bg-base-300 rounded w-32 animate-pulse mb-4"></div>

        {/* Task items skeleton */}
        <ul className="space-y-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index} className="flex items-center gap-3 p-2">
              {/* Checkbox skeleton */}
              <div className="w-4 h-4 bg-base-300 rounded animate-pulse"></div>
              
              {/* Task title skeleton */}
              <div className="h-4 bg-base-300 rounded flex-1 animate-pulse"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
