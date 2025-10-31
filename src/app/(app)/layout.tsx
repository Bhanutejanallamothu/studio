
'use client';

import { Logo } from '@/components/app/logo';
import { UserNav } from '@/components/app/user-nav';
import { MainNav } from '@/components/app/main-nav';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PanelLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { type FormEvent } from 'react';
import { ThemeToggle } from '@/components/app/theme-toggle';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.currentTarget.search.value;
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };
  
  const SearchBar = () => (
    <form
        className="relative w-full"
        onSubmit={handleSearch}
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          name="search"
          placeholder="Search..."
          className="pl-9 w-full bg-background"
        />
      </form>
  )

  return (
    <div className="flex min-h-screen w-full">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-72 border-r bg-card/50 p-6 gap-8">
        <Logo />
        <SearchBar />
        <MainNav />
        <div className="mt-auto flex flex-col gap-4">
           <ThemeToggle />
           <UserNav />
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        {/* Header for Mobile */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:hidden">
          <Logo />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 rounded-full"
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
                 <div className="p-4">
                   <SearchBar />
                 </div>
                <div className="flex-1 overflow-y-auto">
                  <MainNav isMobile={true} />
                </div>
                 <div className="p-4 mt-auto border-t flex flex-col gap-4">
                    <ThemeToggle />
                    <UserNav />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
