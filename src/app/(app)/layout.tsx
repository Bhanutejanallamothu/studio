"use client";

import { Logo } from "@/components/app/logo";
import { UserNav } from "@/components/app/user-nav";
import { MainNav } from "@/components/app/main-nav";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PanelLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FormEvent } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.currentTarget.search.value;
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-4 z-40 mx-auto flex w-full max-w-6xl items-center gap-4 rounded-full border bg-background/80 p-2 shadow-lg backdrop-blur-sm md:px-6">
        <div className="flex items-center gap-6">
            <Logo />
            <div className="hidden md:flex">
                <MainNav />
            </div>
        </div>
        
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial" onSubmit={handleSearch}>
                 <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                    type="search"
                    name="search"
                    placeholder="Search..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                    />
                </div>
            </form>
          <UserNav />
           <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 rounded-full md:hidden"
              >
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
               <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                    <Logo />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <MainNav isMobile={true} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  );
}
