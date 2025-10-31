"use client";

import { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { mockPortfolio } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Award,
  BarChart,
  Briefcase,
  Calendar,
  ChevronRight,
  Download,
  Github,
  GitMerge,
  Linkedin,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Star,
  Trophy,
  Users,
  BarChart2,
  TrendingUp,
  MessageSquare,
  CheckCircle2,
  FileText,
  Video,
  ExternalLink,
} from "lucide-react";
import {
    BarChart as RechartsBarChart,
    Bar as RechartsBar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    ResponsiveContainer,
  } from 'recharts';

const skillProficiency = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Docker', level: 75 },
    { name: 'Git', level: 80 },
    { name: 'Agile', level: 95 },
    { name: 'Kubernetes', level: 60 },
]

const performanceAnalytics = [
    { name: 'Week 1', tasks: 5, quality: 88 },
    { name: 'Week 2', tasks: 7, quality: 90 },
    { name: 'Week 3', tasks: 6, quality: 92 },
    { name: 'Week 4', tasks: 8, quality: 95 },
]

const gamificationBadges = [
    { name: "Persistence", icon: Star, color: "text-yellow-500" },
    { name: "Leadership", icon: Users, color: "text-blue-500" },
    { name: "Debugging Pro", icon: Briefcase, color: "text-green-500" },
    { name: "Sprint Champion", icon: Trophy, color: "text-purple-500" },
];


export default function PortfolioPage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar-main');
  const projectThumbnail = PlaceHolderImages.find(p => p.id === 'project-thumbnail-1');
  const mentorAvatar = PlaceHolderImages.find(p => p.id === 'mentor-avatar');

  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Header and Edit Toggle */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline tracking-tight">My Portfolio</h1>
        <div className="flex items-center space-x-2">
          <Label htmlFor="edit-mode-switch">Edit Mode</Label>
          <Switch
            id="edit-mode-switch"
            checked={isEditMode}
            onCheckedChange={setIsEditMode}
          />
           <Button variant="outline"><ExternalLink className="mr-2" /> Share</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-8">
            {/* Personal Overview */}
            <Card>
                <CardHeader className="text-center">
                    <Avatar className="w-24 h-24 mx-auto ring-4 ring-primary ring-offset-4 ring-offset-background">
                         {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt={mockPortfolio.personalOverview.fullName} />}
                        <AvatarFallback>{mockPortfolio.personalOverview.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                     <CardTitle className="pt-6">{mockPortfolio.personalOverview.fullName}</CardTitle>
                    <CardDescription>{mockPortfolio.personalOverview.headline}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-center">
                    <p className="text-muted-foreground">{mockPortfolio.personalOverview.bio}</p>
                    <Separator className="my-4"/>
                    <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3"><Mail /><a href={`mailto:${mockPortfolio.personalOverview.contact.email}`} className="hover:underline">{mockPortfolio.personalOverview.contact.email}</a></div>
                        <div className="flex items-center gap-3"><Phone /><span>{mockPortfolio.personalOverview.contact.phone}</span></div>
                        <div className="flex items-center gap-3"><Linkedin /><a href={mockPortfolio.personalOverview.links.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn Profile</a></div>
                        <div className="flex items-center gap-3"><Github /><a href={mockPortfolio.personalOverview.links.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub Portfolio</a></div>
                        <div className="flex items-center gap-3"><MapPin /><span>{mockPortfolio.personalOverview.location.country} ({mockPortfolio.personalOverview.location.timeZone})</span></div>
                    </div>
                     <Separator className="my-4"/>
                     <Button className="w-full"><Download className="mr-2"/>Download Resume</Button>
                </CardContent>
            </Card>

             {/* Mentorship & Feedback */}
            <Card>
                <CardHeader>
                    <CardTitle>Mentorship & Feedback</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     {mockPortfolio.mentorship.latestComments.map((comment, i) => (
                        <div key={i} className="text-sm">
                            <p className="italic text-muted-foreground">&quot;{comment.comment}&quot;</p>
                            <p className="text-right font-medium">- {comment.mentor}</p>
                        </div>
                     ))}
                      <Separator/>
                      <div>
                        <h4 className="font-semibold mb-2">AI Summary</h4>
                        <p className="text-sm"><span className="font-medium">Strengths:</span> {mockPortfolio.mentorship.aiSummary.strengths}</p>
                        <p className="text-sm"><span className="font-medium">Improvements:</span> {mockPortfolio.mentorship.aiSummary.improvements}</p>
                      </div>
                </CardContent>
            </Card>

             {/* Future Goals */}
            <Card>
                <CardHeader>
                    <CardTitle>Future Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold">Career Goals</h4>
                        <p className="text-sm text-muted-foreground">{mockPortfolio.futureGoals.careerGoals}</p>
                    </div>
                    <Card className="bg-primary/10 border-primary">
                        <CardHeader>
                            <CardTitle className="text-base">AI Career Recommendation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-medium">{mockPortfolio.futureGoals.aiRecommendation.title}</p>
                            <p className="text-sm text-muted-foreground">{mockPortfolio.futureGoals.aiRecommendation.description}</p>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-8">
             {/* Internship Summary */}
            <Card>
                <CardHeader>
                    <CardTitle>Internship Summary</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                    <div className="flex items-center gap-3"><Briefcase className="text-primary" /><div><span className="font-semibold">Title:</span> {mockPortfolio.internshipSummary.title}</div></div>
                    <div className="flex items-center gap-3"><Calendar className="text-primary" /><div><span className="font-semibold">Duration:</span> {mockPortfolio.internshipSummary.duration}</div></div>
                    <div className="flex items-center gap-3"><FileText className="text-primary" /><div><span className="font-semibold">Project:</span> {mockPortfolio.internshipSummary.projectName}</div></div>
                    <div className="flex items-center gap-3"><Star className="text-primary" /><div><span className="font-semibold">Mentor:</span> {mockPortfolio.internshipSummary.mentor}</div></div>
                    <div className="flex items-center gap-3"><Users className="text-primary" /><div><span className="font-semibold">Team:</span> {mockPortfolio.internshipSummary.team.join(', ')}</div></div>
                    <div className="flex items-center gap-3"><Award className="text-primary" /><div><span className="font-semibold">Batch:</span> {mockPortfolio.internshipSummary.batchNumber}</div></div>
                </CardContent>
            </Card>

            {/* Skills & Technologies */}
            <Card>
                <CardHeader>
                    <CardTitle>Skills & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {skillProficiency.map(skill => (
                            <div key={skill.name}>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-sm font-medium">{skill.name}</p>
                                    <p className="text-sm text-muted-foreground">{skill.level}%</p>
                                </div>
                                <Progress value={skill.level} className="h-2" />
                            </div>
                        ))}
                    </div>
                    <Separator className="my-6"/>
                    <div>
                        <h4 className="font-semibold mb-3">Certifications</h4>
                        <div className="flex flex-wrap gap-2">
                            {mockPortfolio.skills.certifications.map((cert, i) => (
                                <Badge key={i} variant="secondary">{cert}</Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Projects Showcase */}
            <Card>
                <CardHeader>
                    <CardTitle>Projects Showcase</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {mockPortfolio.projects.map(project => (
                        <div key={project.title} className="flex flex-col md:flex-row gap-6">
                            {projectThumbnail && <Image src={projectThumbnail.imageUrl} alt={project.title} width={200} height={120} className="rounded-lg object-cover w-full md:w-1/3"/>}
                            <div className="flex-1">
                                <h4 className="font-semibold">{project.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.techStack.map(tech => <Badge key={tech} variant="outline">{tech}</Badge>)}
                                </div>
                                <div className="flex gap-4 mt-3">
                                    <Button variant="ghost" size="sm" asChild><a href={project.repoLink} target="_blank" rel="noreferrer"><Github className="mr-2"/>Repo</a></Button>
                                    <Button variant="ghost" size="sm" asChild><a href={project.demoLink} target="_blank" rel="noreferrer"><ExternalLink className="mr-2"/>Demo</a></Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

             {/* Performance & Analytics */}
            <Card>
                <CardHeader>
                    <CardTitle>Performance & Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <p className="text-2xl font-bold">{mockPortfolio.performance.taskCompletionRate}%</p>
                            <p className="text-xs text-muted-foreground">Task Completion</p>
                        </div>
                         <div>
                            <p className="text-2xl font-bold">{mockPortfolio.performance.timelySubmissionScore}%</p>
                            <p className="text-xs text-muted-foreground">Timely Submission</p>
                        </div>
                         <div>
                            <p className="text-2xl font-bold">{mockPortfolio.performance.codeQuality}%</p>
                            <p className="text-xs text-muted-foreground">Code Quality</p>
                        </div>
                         <div>
                            <p className="text-2xl font-bold">{mockPortfolio.performance.peerCollabScore}%</p>
                            <p className="text-xs text-muted-foreground">Peer Collaboration</p>
                        </div>
                    </div>
                    <div className="h-48">
                        <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart data={performanceAnalytics}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                                <RechartsTooltip contentStyle={{
                                    backgroundColor: "hsl(var(--background))",
                                    borderColor: "hsl(var(--border))",
                                }}/>
                                <RechartsBar dataKey="tasks" fill="hsl(var(--primary))" name="Tasks Completed" radius={[4, 4, 0, 0]} />
                            </RechartsBarChart>
                        </ResponsiveContainer>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Badges Earned</h4>
                        <div className="flex flex-wrap gap-4">
                            {gamificationBadges.map(badge => (
                                <TooltipProvider key={badge.name}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className={`p-3 rounded-full bg-muted border ${isEditMode ? 'cursor-pointer hover:bg-muted/80' : ''}`}>
                                            <badge.icon className={`h-6 w-6 ${badge.color}`} />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{badge.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
      </div>
    </div>
  );
}
