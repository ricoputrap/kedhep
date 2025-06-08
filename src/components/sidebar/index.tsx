"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ), 
      label: "Dashboard", 
      href: "/dashboard" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ), 
      label: "Tasks", 
      href: "/tasks" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ), 
      label: "Reflections", 
      href: "/reflections" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
        </svg>
      ), 
      label: "Notes", 
      href: "/notes" 
    },
  ];
  
  return (
    <div className="h-screen flex flex-col bg-base-100 w-64 p-4 border-r border-gray-200">
      {/* App Logo/Name */}
      <div className="flex items-center gap-2 px-2 py-4">
        <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-content rounded-sm">
          <span className="font-bold text-sm">K</span>
        </div>
        <span className="font-bold text-lg">Kedhep</span>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 py-4">
        <ul className="menu menu-md rounded-box">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={`flex items-center gap-3 ${pathname.startsWith(item.href) ? "active bg-base-200 font-medium" : ""}`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* User Profile */}
      <div className="border-t border-gray-200 pt-4">
        <div className="dropdown dropdown-top w-full">
          <div tabIndex={0} role="button" className="flex items-center gap-3 px-2 py-2 w-full hover:bg-base-200 rounded-lg">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-sm w-8 h-8 flex items-center justify-center">
                <span className="text-xs font-medium">RP</span>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-medium text-sm">Rico Putra</span>
              <span className="text-xs text-gray-500">Profile</span>
            </div>
            <div className="text-xs text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
            <li>
              <a className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Profile
              </a>
            </li>
            <li>
              <a className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Preferences
              </a>
            </li>
            <li>
              <a className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                </svg>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
