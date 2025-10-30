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
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const mainLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/mentorship", label: "Mentorship", icon: Users },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/portfolio", label: "Portfolio", icon: Award },
];

const secondaryLinks = [
  { href: "/purchase", label: "Purchase", icon: Briefcase },
  { href: "/team-formation", label: "Team Formation", icon: Users },
  { href: "/vm", label: "VM", icon: Rocket },
  {
    href: "/onboarding/skill-assessment",
    label: "Skill Assessment",
    icon: ShieldCheck,
  },
];

const bottomLinks = [
  { href: "/help", label: "Help & Support", icon: LifeBuoy },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-4">
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
        <div className="px-4 group-data-[state=expanded]:block hidden">
          <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">More</p>
        </div>
        <SidebarMenu>
          {secondaryLinks.map((link) => (
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
