"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from './constants';

export default function NavMenu() {
  const pathname = usePathname();

  return (
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
  )
}
