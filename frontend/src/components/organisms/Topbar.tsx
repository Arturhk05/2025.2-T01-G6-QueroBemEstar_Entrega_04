import { Bell, Apple } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { InfoChipsGroup } from "@/components/molecules/InfoChipsGroup";

export const Topbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-card shadow-sm">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Apple className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Quero Bem-Estar</h1>
        </div>

        <div className="flex items-center gap-6">
          <InfoChipsGroup points={12} days={27} />

          <div className="relative">
            <Bell className="h-5 w-5 cursor-pointer text-foreground hover:text-primary transition-colors" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive p-0 text-[10px] flex items-center justify-center">
              3
            </Badge>
          </div>

          <Avatar className="h-9 w-9 cursor-pointer ring-2 ring-primary/20 hover:ring-primary/40 transition-all">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="Usuário" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
