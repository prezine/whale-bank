"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Download, CreditCard, Plus } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      icon: Send,
      label: "Send Money",
      action: () => (window.location.href = "/wallet"),
    },
    { icon: Plus, label: "Add Money", action: () => console.log("Add money") },
  ];

  return (
    <Card className="border-stripe shadow-stripe">
      <CardHeader className="pb-7">
        <CardTitle className="text-lg font-semibold text-foreground">
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-16 flex-col gap-2 border-stripe hover:bg-muted/50 hover:border-accent/20 transition-all duration-200 bg-transparent"
              onClick={action.action}
            >
              <action.icon className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground">
                {action.label}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
