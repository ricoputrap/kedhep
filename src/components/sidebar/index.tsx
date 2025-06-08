"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS, DEFAULT_PROFILE, PROFILE_MENU_ITEMS } from './constants'
import { SidebarProps } from './types'

export default function Sidebar({ profile }: SidebarProps) {
  const pathname = usePathname();
  
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
      <div className="flex-1 py-2 overflow-y-auto">
        <ul className="menu menu-sm w-full px-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="my-0.5">
              <Link 
                href={item.href} 
                className={`flex items-center gap-3 py-2 ${pathname.startsWith(item.href) ? "active bg-base-200 font-medium" : ""}`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* User Profile */}
      <div className="border-t border-gray-200">
        <div className="dropdown dropdown-top w-full">
          <div tabIndex={0} role="button" className="flex items-center gap-3 px-4 py-3 w-full hover:bg-base-200">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-sm w-8 h-8 flex items-center justify-center">
                <span className="text-xs font-medium">{profile?.initials || DEFAULT_PROFILE.initials}</span>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-medium text-sm">{profile?.name || DEFAULT_PROFILE.name}</span>
              <span className="text-xs text-gray-500">{profile?.subtitle || DEFAULT_PROFILE.subtitle}</span>
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
    </div>
  );
}
