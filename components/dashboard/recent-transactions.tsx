"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, MoreHorizontal } from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "received",
    amount: 2500.0,
    description: "Salary Payment",
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: 2,
    type: "sent",
    amount: 150.0,
    description: "Grocery Store",
    date: "2024-01-14",
    status: "completed",
  },
  {
    id: 3,
    type: "sent",
    amount: 75.5,
    description: "Gas Station",
    date: "2024-01-14",
    status: "pending",
  },
  {
    id: 4,
    type: "received",
    amount: 320.0,
    description: "Freelance Work",
    date: "2024-01-13",
    status: "completed",
  },
];

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <Button
          variant="outline"
          size="sm"
          onClick={() => (window.location.href = "/history")}
        >
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-2 rounded-full ${
                    transaction.type === "received"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {transaction.type === "received" ? (
                    <ArrowDownLeft className="h-4 w-4" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      transaction.type === "received"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.type === "received" ? "+" : "-"}$
                    {transaction.amount.toFixed(2)}
                  </p>
                  <Badge
                    variant={
                      transaction.status === "completed"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </div>
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
