export type Role = "Student" | "Project Manager" | "Admin";

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: Role;
};

export type TaskStatus = "To Do" | "In Progress" | "Under Review" | "Done";

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  assignee?: User;
  dueDate: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  tasks: Task[];
};

export type Activity = {
  id: string;
  user: User;
  action: string;
  timestamp: string;
  details?: string;
};
