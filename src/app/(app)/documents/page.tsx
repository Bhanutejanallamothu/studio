import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CircleDot, FileText, Plus, Search, Siren, TestTube2, Wind } from "lucide-react";

const documents = [
    {
      title: "Software Requirements Specification",
      version: "1.1",
      status: "Approved",
      lastModified: "2025-01-01",
    },
    {
      title: "Sprint 3 planning",
      version: "1.0",
      status: "Approved",
      lastModified: "2025-01-01",
    },
    {
      title: "Test Case Repository",
      version: "1.1",
      status: "Approved",
      lastModified: "2025-01-01",
    },
    {
      title: "Deployment Checklist",
      version: "2.1",
      status: "Approved",
      lastModified: "2025-01-01",
    },
  ];

  const templates = [
    {
      title: "SRS Template",
      description: "Standard template for documenting software requirements.",
      icon: <FileText className="w-8 h-8 text-primary" />,
    },
    {
      title: "Sprint Planning",
      description: "Template for planning and documenting sprint goals.",
      icon: <Wind className="w-8 h-8 text-primary" />,
    },
    {
      title: "Test Case Template",
      description: "Standard format for writing test cases.",
      icon: <TestTube2 className="w-8 h-8 text-primary" />,
    },
    {
      title: "Bug Report Template",
      description: "Template for reporting and tracking bugs.",
      icon: <Siren className="w-8 h-8 text-primary" />,
    },
    {
      title: "Deployment Checklist",
      description: "Comprehensive checklist for deployments.",
      icon: <CircleDot className="w-8 h-8 text-primary" />,
    },
  ];

export default function DocumentsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Documentation Center
        </h1>
        <div className="flex gap-2 items-center">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search documents..." className="pl-8 w-64" />
            </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Document
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {documents.map((doc, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-muted-foreground mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{doc.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span>v{doc.version}</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">{doc.status}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Last modified: {doc.lastModified}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="w-full">Edit</Button>
                <Button variant="outline" className="w-full">Export</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold font-headline tracking-tight mb-6">Document Templates</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {templates.map((template, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center justify-center gap-3">
                        {template.icon}
                        <h4 className="font-semibold">{template.title}</h4>
                        <p className="text-xs text-muted-foreground">{template.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
