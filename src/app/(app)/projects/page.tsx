"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { mockProjects, mockTasks, mockUsers } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Download, Plus, Play, Power } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Task } from "@/lib/types";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Card>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-sm">{task.title}</h4>
        </div>
        <p className="text-xs text-muted-foreground mb-3">Create login/signup functionality with JWT tokens.</p>
        <div className="flex justify-between items-center">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">5 SP</Badge>
            {task.assignee && (
                <Avatar className="h-6 w-6">
                    <AvatarImage src={task.assignee.avatarUrl} alt={task.assignee.name} />
                    <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                </Avatar>
            )}
        </div>
      </CardContent>
    </Card>
  )
}

const ProjectCard = ({ project, vmRunning, progress }: { project: typeof mockProjects[0], vmRunning: boolean, progress: number }) => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            <Badge variant={vmRunning ? "default" : "secondary"}>{vmRunning ? "VM Running" : "VM Stopped"}</Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
            <Badge variant="outline">Development Phase</Badge>
            <span>{progress}% Complete</span>
            <span>Due: Sept 16, 2024</span>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>CPU: {vmRunning ? "25.84%" : "0%"}</span>
            </div>
            <Progress value={vmRunning ? 25.84 : 0} className="h-2" />
        </div>
        <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Memory: {vmRunning ? "62.17%" : "0%"}</span>
            </div>
            <Progress value={vmRunning ? 62.17 : 0} className="h-2" />
        </div>
        <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Storage: {vmRunning ? "35%" : "0%"}</span>
            </div>
            <Progress value={vmRunning ? 35 : 0} className="h-2" />
        </div>

        <div className="flex gap-4 pt-2">
            <Button variant="outline" className="w-full" asChild>
                <Link href={`/projects/${project.id}`}>View Details</Link>
            </Button>
            <Button className="w-full">
                {vmRunning ? <Play className="mr-2" /> : <Power className="mr-2" />}
                {vmRunning ? "Launch VM" : "Start VM"}
            </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ProjectsPage() {
    const tasksByStatus = (status: string) => mockTasks.filter(t => t.status === status);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">Project Management</h1>
        <div className="flex gap-2">
            <Button variant="outline"><Download className="mr-2 h-4 w-4"/>Export</Button>
            <Button><Plus className="mr-2 h-4 w-4"/>New Task</Button>
        </div>
      </div>

      <div className="flex gap-6 mb-8">
        <ProjectCard project={mockProjects[0]} vmRunning={true} progress={68} />
        <ProjectCard project={mockProjects[1]} vmRunning={false} progress={84} />
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div>
            <div className="flex items-center gap-2 mb-4">
                <h2 className="font-semibold text-lg">To Do</h2>
                <Badge variant="secondary" className="rounded-full">{tasksByStatus("To Do").length}</Badge>
            </div>
            <div className="flex flex-col gap-4">
                {tasksByStatus("To Do").map(task => <TaskCard key={task.id} task={task} />)}
                <Card>
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-sm">Update documentation</h4>
                    <p className="text-xs text-muted-foreground mt-2 mb-3">Review and update API documentation.</p>
                    <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">3 SP</Badge>
                        <Avatar className="h-6 w-6">
                            <AvatarImage src="https://picsum.photos/seed/user2/40/40" />
                            <AvatarFallback>B</AvatarFallback>
                        </Avatar>
                    </div>
                  </CardContent>
                </Card>
            </div>
        </div>
         <div>
            <div className="flex items-center gap-2 mb-4">
                <h2 className="font-semibold text-lg">In Progress</h2>
                <Badge variant="secondary" className="rounded-full">{tasksByStatus("In Progress").length}</Badge>
            </div>
            <div className="flex flex-col gap-4">
                {tasksByStatus("In Progress").map(task => <TaskCard key={task.id} task={task} />)}
                 <Card>
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-sm">Setup CI/CD pipeline</h4>
                    <p className="text-xs text-muted-foreground mt-2 mb-3">Configure automated deployment with Docker.</p>
                     <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">10 SP</Badge>
                         <Avatar className="h-6 w-6">
                            <AvatarImage src="https://picsum.photos/seed/user1/40/40" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                    </div>
                  </CardContent>
                </Card>
            </div>
        </div>
         <div>
            <div className="flex items-center gap-2 mb-4">
                <h2 className="font-semibold text-lg">Review</h2>
                <Badge variant="secondary" className="rounded-full">{tasksByStatus("Under Review").length}</Badge>
            </div>
            <div className="flex flex-col gap-4">
                {tasksByStatus("Under Review").map(task => <TaskCard key={task.id} task={task} />)}
            </div>
        </div>
         <div>
            <div className="flex items-center gap-2 mb-4">
                <h2 className="font-semibold text-lg">Done</h2>
                <Badge variant="secondary" className="rounded-full">{tasksByStatus("Done").length}</Badge>
            </div>
            <div className="flex flex-col gap-4">
                {tasksByStatus("Done").map(task => <TaskCard key={task.id} task={task} />)}
            </div>
        </div>
      </div>
    </div>
  );
}
