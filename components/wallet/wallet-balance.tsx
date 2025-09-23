"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Wallet, CreditCard, Banknote } from "lucide-react";

export function WalletBalance() {
  const [showBalance, setShowBalance] = useState(true);

  const accounts = [
    {
      name: "Checking Account",
      balance: 589214.33,
      type: "checking",
      icon: Wallet,
    },
    {
      name: "Savings Account",
      balance: 472850.28,
      type: "savings",
      icon: Banknote,
    },
    {
      name: "Credit Card",
      balance: 366503.28,
      type: "credit",
      icon: CreditCard,
    },
  ];

  const totalBalance = accounts.reduce(
    (sum, account) => sum + account.balance,
    0
  );

  return (
    <div className="space-y-4">
      {/* Total Balance Card */}
      <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Total Balance</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setShowBalance(!showBalance)}
          >
            {showBalance ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            {showBalance ? `$${totalBalance.toLocaleString()}` : "••••••"}
          </div>
          <p className="text-sm opacity-90 mt-1">Across all accounts</p>
        </CardContent>
      </Card>

      {/* Individual Accounts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {accounts.map((account, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {account.name}
              </CardTitle>
              <account.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold ${
                  account.balance < 0 ? "text-destructive" : "text-foreground"
                }`}
              >
                {showBalance
                  ? `$${Math.abs(account.balance).toLocaleString()}`
                  : "••••••"}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {account.type === "credit"
                  ? "Outstanding Balance"
                  : "Available Balance"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
