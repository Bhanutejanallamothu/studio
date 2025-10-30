"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart3,
  LifeBuoy,
  Settings,
  MessageSquare,
  FileText,
  Ticket,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

export function MainNav({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname();

  if (isMobile) {
      return (
          <nav className="grid gap-2 text-lg font-medium p-4">
              {mainLinks.map((link) => (
                  <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                          pathname.startsWith(link.href) && "text-primary bg-muted"
                      )}
                  >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                  </Link>
              ))}
               <div className="my-4 border-t border-border"></div>
                {bottomLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                            pathname.startsWith(link.href) && "text-primary bg-muted"
                        )}
                    >
                        <link.icon className="h-4 w-4" />
                        {link.label}
                    </Link>
                ))}
          </nav>
      )
  }

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {mainLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname.startsWith(link.href)
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
