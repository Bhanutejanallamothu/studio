import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudentDashboard } from "@/components/app/dashboard/student-dashboard";
import { PmDashboard } from "@/components/app/dashboard/pm-dashboard";
import { AdminDashboard } from "@/components/app/dashboard/admin-dashboard";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
        <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to your Virtual Internship workspace.</p>
        </div>
        <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="pm">Project Manager</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
            <TabsContent value="student" className="mt-4">
                <StudentDashboard />
            </TabsContent>
            <TabsContent value="pm" className="mt-4">
                <PmDashboard />
            </TabsContent>
            <TabsContent value="admin" className="mt-4">
                <AdminDashboard />
            </TabsContent>
        </Tabs>
    </div>
  )
}
