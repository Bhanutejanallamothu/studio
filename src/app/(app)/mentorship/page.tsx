import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, Clock, Video } from "lucide-react";

export default function MentorshipPage() {
  const mentorAvatar = PlaceHolderImages.find(p => p.id === 'mentor-avatar');
  const learningGoals = [
    { id: "lg1", label: "Master Next.js Server Components", completed: true },
    { id: "lg2", label: "Improve Tailwind CSS skills for responsive design", completed: true },
    { id: "lg3", label: "Understand state management with Context API", completed: false },
    { id: "lg4", label: "Learn to deploy applications on Vercel", completed: false },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">Mentorship</h1>
        <p className="text-muted-foreground">
          Connect with your mentor and track your learning goals.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1 flex flex-col gap-8">
          <Card>
            <CardHeader className="items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                {mentorAvatar && <AvatarImage src={mentorAvatar.imageUrl} alt="Mentor Avatar" data-ai-hint={mentorAvatar.imageHint} />}
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <CardTitle className="font-headline">Dr. Evelyn Reed</CardTitle>
              <CardDescription>Senior Software Architect @ Google</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Evelyn is a specialist in distributed systems and AI with over 15 years of experience.
              </p>
              <Button className="w-full mt-4" variant="outline">Send Message</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Session</CardTitle>
              <CardDescription>Your next one-on-one session.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">August 28, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">4:00 PM - 4:30 PM (PST)</span>
                </div>
                <Button className="w-full mt-2">
                    <Video className="mr-2 h-4 w-4" />
                    Join Meeting
                </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 flex flex-col gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Learning Goals</CardTitle>
              <CardDescription>Track your progress against your goals.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {learningGoals.map(goal => (
                <div key={goal.id} className="flex items-center space-x-3 rounded-md border p-4">
                  <Checkbox id={goal.id} checked={goal.completed} />
                  <label
                    htmlFor={goal.id}
                    className={`text-sm font-medium leading-none ${goal.completed ? 'line-through text-muted-foreground' : ''} peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                  >
                    {goal.label}
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Recent Feedback</CardTitle>
              <CardDescription>Latest feedback from your mentor.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm italic">"Your work on the API authentication module was exceptional. Pay close attention to error handling in edge cases for the next phase. Great progress!"</p>
                    <p className="text-xs text-muted-foreground mt-2">- Dr. Reed, 2 days ago</p>
                </div>
                 <div className="border-l-4 border-border pl-4">
                    <p className="text-sm italic">"The component structure you've set up is clean and scalable. Consider abstracting the form logic into a custom hook to improve reusability."</p>
                    <p className="text-xs text-muted-foreground mt-2">- Dr. Reed, 1 week ago</p>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
