"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, FolderKanban, MessageSquare, Ticket } from "lucide-react";
import Link from "next/link";

const mockResults = [
  { id: 1, type: "Document", title: "Software Requirements Specification", path: "/documents", icon: FileText },
  { id: 2, type: "Project", title: "E-Learning Platform", path: "/projects/p1", icon: FolderKanban },
  { id: 3, type: "Chat", title: "#development channel", path: "/chats", icon: MessageSquare },
  { id: 4, type: "Ticket", title: "Login page not responsive", path: "/tickets", icon: Ticket },
  { id: 5, type: "Document", title: "API Integration Guide", path: "/documents", icon: FileText },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const filteredResults = query 
    ? mockResults.filter(result => result.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Search Results
        </h1>
        {query ? (
          <p className="text-muted-foreground">
            Showing results for: <span className="font-semibold text-foreground">&quot;{query}&quot;</span>
          </p>
        ) : (
          <p className="text-muted-foreground">
            Please enter a search term in the top navigation bar.
          </p>
        )}
      </div>

      {query && (
        <Card>
          <CardHeader>
            <CardTitle>{filteredResults.length} results found</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {filteredResults.length > 0 ? (
              filteredResults.map((result) => (
                <Link href={result.path} key={result.id}>
                    <div className="p-4 border rounded-lg hover:bg-muted transition-colors">
                        <div className="flex items-center gap-4">
                            <result.icon className="h-6 w-6 text-muted-foreground" />
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold">{result.title}</h3>
                                    <Badge variant="secondary">{result.type}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{result.path}</p>
                            </div>
                        </div>
                    </div>
                </Link>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-8">
                No results found for your query.
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
