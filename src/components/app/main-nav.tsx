"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart3,
  Award,
  LifeBuoy,
  Settings,
  Briefcase,
  Rocket,
  ShieldCheck,
  MessageSquare,
  FileText,
  Ticket,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const mainLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/chats", label: "Chats", icon: MessageSquare },
  { href: "/mentorship", label: "Mentorship", icon: Users },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/tickets", label: "Tickets", icon: Ticket },
];


const bottomLinks = [
  { href: "/help", label: "Help & Support", icon: LifeBuoy },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col justify-between p-2">
      <SidebarMenu>
        {mainLinks.map((link) => (
          <SidebarMenuItem key={link.href}>
            <Link href={link.href}>
              <SidebarMenuButton
                isActive={pathname.startsWith(link.href)}
                tooltip={link.label}
              >
                <link.icon />
                <span className="group-data-[state=collapsed]:hidden">
                  {link.label}
                </span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <SidebarMenu>
        {bottomLinks.map((link) => (
          <SidebarMenuItem key={link.href}>
            <Link href={link.href}>
              <SidebarMenuButton
                isActive={pathname.startsWith(link.href)}
                tooltip={link.label}
              >
                <link.icon />
                <span className="group-data-[state=collapsed]:hidden">
                  {link.label}
                </span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </div>
  );
}
