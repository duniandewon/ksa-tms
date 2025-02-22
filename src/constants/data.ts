import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Jamaah',
    url: '/dashboard/jamaah',
    icon: 'jamaah',
    isActive: false,
    items: []
  },
];