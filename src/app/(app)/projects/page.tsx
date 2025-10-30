import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { mockProjects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          Browse and manage your assigned projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden">
            <CardHeader>
              <CardTitle className="font-headline">{project.title}</CardTitle>
              <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button asChild className="w-full">
                <Link href={`/projects/${project.id}`}>View Project</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
