"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Wallet,
  Settings,
  LogOut,
  Shield,
  History,
} from "lucide-react";

interface SidebarProps {
  onNavigate?: () => void;
}

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    current: false,
  },
  { name: "Wallet", href: "/wallet", icon: Wallet, current: false },
  { name: "History", href: "/history", icon: History, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: false },
];

export function Sidebar({ onNavigate }: SidebarProps) {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const handleNavigation = (href: string) => {
    window.location.href = href;
    onNavigate?.();
  };

  const handleLogout = () => {
    window.location.href = "/";
    onNavigate?.();
  };

  return (
    <div className="flex grow flex-col gap-y-6 overflow-y-auto bg-sidebar px-6 pb-6 border-r border-sidebar-border">
      <div className="flex h-16 shrink-0 items-center gap-3 pt-6">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-sm">
          <Shield className="w-4 h-4 text-accent-foreground" />
        </div>
        <span className="text-lg font-semibold text-sidebar-foreground">
          SecureBank
        </span>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-8">
          <li>
            <ul role="list" className="space-y-1">
              {navigation.map((item) => {
                const isCurrent = currentPath === item.href;
                return (
                  <li key={item.name}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-3 h-10 font-medium transition-all duration-200",
                        isCurrent
                          ? "bg-accent text-accent-foreground shadow-sm"
                          : "text-sidebar-foreground hover:bg-muted hover:text-foreground"
                      )}
                      onClick={() => handleNavigation(item.href)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="mt-auto">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-10 font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
