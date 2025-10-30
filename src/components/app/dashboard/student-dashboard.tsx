import {
  Activity,
  ArrowUpRight,
  ClipboardList,
  Clock,
  Rocket,
  CheckCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { CircularProgress } from "./circular-progress";
import { mockActivities, mockUsers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function StudentDashboard() {
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Tasks Due</CardDescription>
              <CardTitle className="text-4xl font-headline">5</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +10% from last week
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>In Progress</CardDescription>
              <CardTitle className="text-4xl font-headline">3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                -5% from last week
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Under Review</CardDescription>
              <CardTitle className="text-4xl font-headline">1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +20% from last week
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Completed</CardDescription>
              <CardTitle className="text-4xl font-headline">12</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +18% from last month
              </div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                An overview of recent project activities.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1 bg-accent hover:bg-accent/90">
              <Link href="/projects">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead className="text-right">Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockActivities.slice(0, 4).map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={activity.user.avatarUrl} alt="Avatar" />
                          <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="font-medium">{activity.user.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {activity.action}: <span className="text-muted-foreground">{activity.details}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      {activity.timestamp}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8">
        <Card className="flex flex-col items-center justify-center p-6">
          <CardHeader className="items-center pb-4">
            <CardTitle className="font-headline">Project Progress</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <CircularProgress value={75} label="Completed" />
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Virtual Machine</CardTitle>
            <CardDescription>
              Your dedicated environment for project work.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Status: Running</span>
              </div>
              <span className="text-sm font-medium">4h 32m used</span>
            </div>
            <Button size="sm" className="w-full mt-4" asChild>
                <Link href="/vm">
                    <Rocket className="mr-2 h-4 w-4" />
                    Launch Console
                </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
