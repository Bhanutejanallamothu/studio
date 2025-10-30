import { Briefcase } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2 font-headline text-xl font-bold text-foreground">
      <div className="bg-primary p-2 rounded-lg">
        <Briefcase className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="hidden group-data-[state=collapsed]:hidden">
        VirtualInternPro
      </span>
    </div>
  );
}
