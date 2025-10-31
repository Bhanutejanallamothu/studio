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

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      <div className="absolute top-4 right-4 z-50">
        <UserNav />
      </div>

      <header className="sticky top-4 z-40 mx-auto flex w-full max-w-screen-xl items-center gap-4 rounded-full border border-white/5 bg-black/10 p-2 shadow-lg backdrop-blur-md md:px-4">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="hidden md:flex">
            <MainNav />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <form
            className="hidden sm:flex flex-1 max-w-sm"
            onSubmit={handleSearch}
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                name="search"
                placeholder="Search..."
                className="pl-9 w-full"
              />
            </div>
          </form>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
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
                <div className="p-4">
                  <form className="w-full" onSubmit={handleSearch}>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        name="search"
                        placeholder="Search..."
                        className="pl-9 w-full"
                      />
                    </div>
                  </form>
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
