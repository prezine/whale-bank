"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, MoreHorizontal } from "lucide-react";

interface SavedBeneficiariesProps {
  onTransfer: () => void;
}

const beneficiaries = [
  {
    id: 1,
    name: "Alice Johnson",
    initials: "AJ",
    accountType: "Personal",
    lastUsed: "2 days ago",
  },
];

export function SavedBeneficiaries({ onTransfer }: SavedBeneficiariesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Beneficiaries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {beneficiaries.map((beneficiary) => (
            <div
              key={beneficiary.id}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {beneficiary.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{beneficiary.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {beneficiary.accountType} • Last used {beneficiary.lastUsed}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" onClick={onTransfer} className="gap-2">
                  <Send className="h-3 w-3" />
                  Send
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
