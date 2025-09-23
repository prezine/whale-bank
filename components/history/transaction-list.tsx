"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Minus,
  MoreHorizontal,
  Building,
  User,
  CreditCard,
} from "lucide-react";

interface TransactionListProps {
  filters: {
    search: string;
    type: string;
    status: string;
    dateRange: string;
    account: string;
  };
}

const allTransactions = [
  {
    id: 1,
    type: "received",
    amount: 1500000.0,
    description: "Concert Performance Fee",
    recipient: "Coachella Festival",
    date: "2025-09-15",
    time: "08:30 PM",
    status: "completed",
    account: "checking",
    category: "entertainment",
    icon: Building,
  },
  {
    id: 2,
    type: "sent",
    amount: 25000.0,
    description: "Designer Shopping Spree",
    recipient: "Gucci Beverly Hills",
    date: "2025-09-14",
    time: "01:10 PM",
    status: "completed",
    account: "credit",
    category: "luxury",
    icon: User,
  },
  {
    id: 3,
    type: "sent",
    amount: 7500.0,
    description: "Private Jet Fuel",
    recipient: "LA Airport Services",
    date: "2025-09-13",
    time: "10:45 AM",
    status: "pending",
    account: "checking",
    category: "travel",
    icon: CreditCard,
  },
  {
    id: 4,
    type: "received",
    amount: 200000.0,
    description: "Brand Endorsement Deal",
    recipient: "Luxury Watch Co.",
    date: "2025-09-12",
    time: "03:20 PM",
    status: "completed",
    account: "savings",
    category: "endorsement",
    icon: User,
  },
  {
    id: 5,
    type: "deposit",
    amount: 50000.0,
    description: "Album Royalties",
    recipient: "Spotify",
    date: "2025-09-10",
    time: "05:00 PM",
    status: "completed",
    account: "savings",
    category: "royalty",
    icon: Plus,
  },
  {
    id: 6,
    type: "withdrawal",
    amount: 12000.0,
    description: "VIP Nightclub Booking",
    recipient: "1 OAK Las Vegas",
    date: "2025-09-09",
    time: "11:45 PM",
    status: "completed",
    account: "checking",
    category: "entertainment",
    icon: Minus,
  },
  {
    id: 7,
    type: "sent",
    amount: 4500.0,
    description: "Luxury Spa Treatment",
    recipient: "Beverly Hills Spa",
    date: "2025-09-08",
    time: "02:00 PM",
    status: "failed",
    account: "credit",
    category: "wellness",
    icon: CreditCard,
  },
  {
    id: 8,
    type: "received",
    amount: 80000.0,
    description: "Movie Cameo Payment",
    recipient: "Hollywood Studios",
    date: "2025-09-07",
    time: "07:30 PM",
    status: "completed",
    account: "checking",
    category: "acting",
    icon: Building,
  },
];

export function TransactionList({ filters }: TransactionListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter transactions based on filters
  const filteredTransactions = allTransactions.filter((transaction) => {
    const matchesSearch =
      filters.search === "" ||
      transaction.description
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      transaction.recipient
        .toLowerCase()
        .includes(filters.search.toLowerCase());

    const matchesType =
      filters.type === "all" || transaction.type === filters.type;
    const matchesStatus =
      filters.status === "all" || transaction.status === filters.status;
    const matchesAccount =
      filters.account === "all" || transaction.account === filters.account;

    return matchesSearch && matchesType && matchesStatus && matchesAccount;
  });

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getTransactionIcon = (transaction: any) => {
    if (transaction.type === "received")
      return <ArrowDownLeft className="h-4 w-4" />;
    if (transaction.type === "sent")
      return <ArrowUpRight className="h-4 w-4" />;
    if (transaction.type === "deposit") return <Plus className="h-4 w-4" />;
    if (transaction.type === "withdrawal") return <Minus className="h-4 w-4" />;
    return <ArrowUpRight className="h-4 w-4" />;
  };

  const getTransactionColor = (transaction: any) => {
    if (transaction.status === "failed") return "text-destructive";
    if (transaction.type === "received" || transaction.type === "deposit")
      return "text-green-600";
    return "text-red-600";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>
          Transactions ({filteredTransactions.length}{" "}
          {filteredTransactions.length === 1 ? "result" : "results"})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {paginatedTransactions.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                No transactions found matching your criteria.
              </p>
            </div>
          ) : (
            paginatedTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border rounded-lg"
              >
                {/* Left section */}
                <div className="flex items-start sm:items-center gap-4 flex-1">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback
                        className={`${
                          transaction.status === "failed"
                            ? "bg-red-100 text-red-600"
                            : transaction.type === "received" ||
                              transaction.type === "deposit"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {getTransactionIcon(transaction)}
                      </AvatarFallback>
                    </Avatar>
                    <transaction.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium truncate">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.recipient} • {transaction.date} at{" "}
                      {transaction.time}
                    </p>
                    <p className="text-xs text-muted-foreground capitalize">
                      {transaction.account} account • {transaction.category}
                    </p>
                  </div>
                </div>

                {/* Right section */}
                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                  <div className="text-right">
                    <p
                      className={`font-semibold ${getTransactionColor(
                        transaction
                      )}`}
                    >
                      {transaction.type === "received" ||
                      transaction.type === "deposit"
                        ? "+"
                        : "-"}
                      $
                      {transaction.amount.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <Badge className={getStatusColor(transaction.status)}>
                      {transaction.status}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Showing {startIndex + 1} to{" "}
                {Math.min(
                  startIndex + itemsPerPage,
                  filteredTransactions.length
                )}{" "}
                of {filteredTransactions.length} results
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <span className="text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
