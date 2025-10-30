import type { User, Project, Activity, Task } from "./types";

export const mockUsers: User[] = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", avatarUrl: "https://picsum.photos/seed/user1/40/40", role: "Student" },
  { id: "2", name: "Bob Williams", email: "bob@example.com", avatarUrl: "https://picsum.photos/seed/user2/40/40", role: "Student" },
  { id: "3", name: "Charlie Brown", email: "charlie@example.com", avatarUrl: "https://picsum.photos/seed/user3/40/40", role: "Project Manager" },
  { id: "4", name: "Diana Prince", email: "diana@example.com", avatarUrl: "https://picsum.photos/seed/user4/40/40", role: "Admin" },
];

export const mockTasks: Task[] = [
  { id: "t1", title: "Setup development environment", status: "Done", assignee: mockUsers[0], dueDate: "2024-08-01" },
  { id: "t2", title: "Design database schema", status: "In Progress", assignee: mockUsers[1], dueDate: "2024-08-05" },
  { id: "t3", title: "Implement authentication API", status: "In Progress", assignee: mockUsers[0], dueDate: "2024-08-10" },
  { id: "t4", title: "Create dashboard UI", status: "To Do", dueDate: "2024-08-15" },
  { id: "t5", title: "Write unit tests for API", status: "To Do", dueDate: "2024-08-20" },
  { id: "t6", title: "Deploy to staging server", status: "Under Review", assignee: mockUsers[1], dueDate: "2024-08-25" },
];

export const mockProjects: Project[] = [
  { 
    id: "p1", 
    title: "AI-Powered Analytics Dashboard", 
    description: "Build a real-time analytics dashboard with predictive insights.",
    techStack: ["Next.js", "Tailwind CSS", "Genkit", "Recharts"],
    tasks: mockTasks,
  },
  {
    id: "p2",
    title: "E-commerce Recommendation Engine",
    description: "Develop a personalized product recommendation engine for an e-commerce platform.",
    techStack: ["Python", "TensorFlow", "Flask", "React"],
    tasks: [],
  }
];

export const mockActivities: Activity[] = [
  { id: "a1", user: mockUsers[0], action: "pushed a commit", timestamp: "2 hours ago", details: "feat: implement user login" },
  { id: "a2", user: mockUsers[1], action: "completed a task", timestamp: "5 hours ago", details: "Design database schema" },
  { id: "a3", user: mockUsers[2], action: "commented on a task", timestamp: "1 day ago", details: "Review of UI mockups" },
  { id: "a4", user: mockUsers[0], action: "created a new task", timestamp: "2 days ago", details: "Add dark mode support" },
];

export const performanceData = [
    { month: 'Jan', performance: 65, progress: 50 },
    { month: 'Feb', performance: 70, progress: 55 },
    { month: 'Mar', performance: 78, progress: 65 },
    { month: 'Apr', performance: 85, progress: 70 },
    { month: 'May', performance: 82, progress: 75 },
    { month: 'Jun', performance: 90, progress: 85 },
];
