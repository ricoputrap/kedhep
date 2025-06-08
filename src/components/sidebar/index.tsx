import React, { Suspense } from 'react'
import NavMenu from './nav-menu'
import UserProfile from './user-profile';
import UserProfileSkeleton from './user-profile/skeleton';

export default function Sidebar() {
  return (
    <div className="h-screen flex flex-col bg-base-100 w-64 border-r border-gray-200">
      {/* App Logo/Name */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-content rounded-sm">
          <span className="font-bold text-sm">K</span>
        </div>
        <span className="font-bold text-lg">Kedhep</span>
      </div>
      
      {/* Navigation */}
      <NavMenu />
      
      {/* User Profile with Suspense */}
      <Suspense fallback={<UserProfileSkeleton />}>
        <UserProfile />
      </Suspense>
    </div>
  );
}
