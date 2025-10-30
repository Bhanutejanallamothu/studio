import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">Portfolio</h1>
        <p className="text-muted-foreground">
          This page will display your auto-generated portfolio and certifications.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            Your project summaries, mentor feedback, and certificates will appear here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>This section is under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
