import { ReactNode } from 'react';

export interface NavItem {
  icon: ReactNode;
  label: string;
  href: string;
}

export interface UserProfile {
  initials: string;
  name: string;
  subtitle?: string;
}

export interface SidebarProps {
  profile?: UserProfile;
}