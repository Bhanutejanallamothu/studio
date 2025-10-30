
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { mockTickets } from "@/lib/data";
import { ChevronDown, Plus, Search } from "lucide-react";

const priorityColors = {
  HIGH: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
  MEDIUM: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
  LOW: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
};

const statusColors = {
  "IN PROGRESS": "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  NEW: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
  CLOSED: "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300",
};


export default function TicketsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Support Tickets
        </h1>
        <div className="flex gap-2 items-center">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search tickets..." className="pl-8 w-64" />
            </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Ticket
          </Button>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-6 p-4 bg-card rounded-lg border">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">All Tickets <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>All Tickets</DropdownMenuItem>
                <DropdownMenuItem>My Tickets</DropdownMenuItem>
                <DropdownMenuItem>Open Tickets</DropdownMenuItem>
                <DropdownMenuItem>Closed Tickets</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">All Priorities <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>All Priorities</DropdownMenuItem>
                <DropdownMenuItem>High</DropdownMenuItem>
                <DropdownMenuItem>Medium</DropdownMenuItem>
                <DropdownMenuItem>Low</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">All Assignees <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>All Assignees</DropdownMenuItem>
                <DropdownMenuItem>Raj Patel</DropdownMenuItem>
                <DropdownMenuItem>Priya Sharma</DropdownMenuItem>
                <DropdownMenuItem>Alex Kumar</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4">
        {mockTickets.map((ticket) => (
          <div key={ticket.id} className="bg-card border rounded-lg p-4">
            <div className="flex items-center gap-4 mb-2">
                <span className="text-muted-foreground text-sm">#{ticket.id}</span>
                <Badge className={priorityColors[ticket.priority]}>{ticket.priority}</Badge>
                <Badge className={statusColors[ticket.status]}>{ticket.status}</Badge>
            </div>
            <h2 className="text-lg font-semibold font-headline">{ticket.title}</h2>
            <p className="text-muted-foreground text-sm mt-1 mb-3">{ticket.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Assigned to: <span className="font-medium text-foreground">{ticket.assignedTo}</span></span>
                <span>Reported by: <span className="font-medium text-foreground">{ticket.reportedBy}</span></span>
                <span>Created: <span className="font-medium text-foreground">{ticket.created}</span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
