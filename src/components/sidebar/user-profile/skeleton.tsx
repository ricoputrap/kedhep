import React from 'react'

export default function UserProfileSkeleton() {
  return (
    <div className="border-t border-gray-200">
      <div className="flex items-center gap-3 px-4 py-3 w-full">
        {/* Avatar skeleton */}
        <div className="w-10 h-10 rounded-full bg-base-300 animate-pulse"></div>
        
        {/* Text skeletons */}
        <div className="flex flex-col flex-1 gap-1">
          <div className="h-4 bg-base-300 rounded w-24 animate-pulse"></div>
          <div className="h-3 bg-base-300 rounded w-16 animate-pulse"></div>
        </div>
        
        {/* Arrow skeleton */}
        <div className="w-4 h-4 bg-base-300 rounded animate-pulse"></div>
      </div>
    </div>
  )
}
