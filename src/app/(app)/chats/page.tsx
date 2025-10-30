import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockUsers } from "@/lib/data";
import { Hash, Send } from "lucide-react";

const channels = [
  { name: "team-alpha-general", unread: 0, active: true },
  { name: "development", unread: 3 },
  { name: "announcements", unread: 1 },
];

const teamMembers = mockUsers.slice(0, 4).map((user, i) => ({...user, online: i < 3}));

const messages = [
    {
        user: { name: 'Priya Sharma', avatarUrl: mockUsers[0].avatarUrl },
        time: '10:45 PM',
        text: 'Great job on the API tests everyone! All endpoints are now fully covered.'
    },
    {
        user: { name: 'Alex Kumar', avatarUrl: mockUsers[1].avatarUrl },
        time: '10:50 PM',
        text: 'Authentication module is ready for code review. Please check the PR when you get a chance.'
    }
]

export default function ChatsPage() {
  return (
    <div className="flex h-[calc(100vh-theme(spacing.20))]">
      <div className="w-80 flex-shrink-0 border-r bg-card text-card-foreground">
        <div className="flex h-full flex-col">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold font-headline">#CorporateIntern</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <h3 className="mb-2 text-sm font-semibold text-muted-foreground">CHANNELS</h3>
              <ul className="space-y-1">
                {channels.map((channel) => (
                  <li key={channel.name}>
                    <Button
                      variant={channel.active ? "secondary" : "ghost"}
                      className="w-full justify-start"
                    >
                      <Hash className="mr-2 h-4 w-4" />
                      <span className="flex-1 truncate">{channel.name}</span>
                      {channel.unread > 0 && (
                        <Badge className="bg-red-500 text-white">
                          {channel.unread}
                        </Badge>
                      )}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4">
                <h3 className="mb-2 text-sm font-semibold text-muted-foreground">TEAM MEMBERS</h3>
                <ul className="space-y-2">
                    {teamMembers.map(member => (
                        <li key={member.id}>
                            <div className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-muted">
                                <Avatar className="h-8 w-8 relative">
                                    <AvatarImage src={member.avatarUrl} />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    {member.online && <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 ring-2 ring-card" />}
                                </Avatar>
                                <span className="text-sm font-medium">{member.name}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
          <div className="p-4 border-t">
              <div className="bg-muted p-3 rounded-lg text-center">
                  <p className="text-xs text-muted-foreground">Tip: Use the analytics page to monitor progress.</p>
              </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="border-b p-4">
            <h2 className="text-lg font-semibold">@team-alpha-general</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
                {messages.map((msg, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={msg.user.avatarUrl} />
                            <AvatarFallback>{msg.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="flex items-baseline gap-2">
                                <p className="font-semibold">{msg.user.name}</p>
                                <p className="text-xs text-muted-foreground">{msg.time}</p>
                            </div>
                            <div className="mt-1 rounded-lg bg-card p-3">
                                <p className="text-sm">{msg.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="border-t p-4">
            <div className="relative">
                <Input placeholder="Type a message..." className="pr-12" />
                <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                    <Send className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
