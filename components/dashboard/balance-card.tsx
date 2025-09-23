"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";

export function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true);
  const balance = 1428567.89;
  const monthlyChange = 128.94;
  const changePercentage = 5.2;

  return (
    <Card className="border-stripe shadow-stripe-lg bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Total Balance
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/50"
          onClick={() => setShowBalance(!showBalance)}
        >
          {showBalance ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-3xl font-semibold text-foreground mb-3">
          {showBalance ? `$${balance.toLocaleString()}` : "••••••"}
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <div
            className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
              changePercentage > 0
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {changePercentage > 0 ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span className="font-medium">
              {showBalance ? `+$${monthlyChange.toLocaleString()}` : "••••"} (
              {changePercentage}%)
            </span>
          </div>
          <span className="text-muted-foreground">this month</span>
        </div>
      </CardContent>
    </Card>
  );
}
