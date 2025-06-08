import React from 'react'
import { DEFAULT_PROFILE, PROFILE_MENU_ITEMS } from '../constants'
import Link from 'next/link'
import { getProfile } from '@/server/profile';

export default async function UserProfile() {
  const profile = await getProfile();

  return (
    <div className="border-t border-gray-200">
      <div className="dropdown dropdown-top w-full">
        <div tabIndex={0} role="button" className="flex items-center gap-3 px-4 py-3 w-full hover:bg-base-200">
          
          {/* Avatar */}
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-10 rounded-full">
              <span>{profile?.initials || DEFAULT_PROFILE.initials}</span>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <span className="font-medium text-sm">{profile?.name || DEFAULT_PROFILE.name}</span>
            <span className="text-xs text-gray-500">{profile?.title || DEFAULT_PROFILE.subtitle}</span>
          </div>
          <div className="text-xs text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
          {PROFILE_MENU_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="flex gap-2">
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
