"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { TransactionFilters } from "@/components/history/transaction-filters";
import { TransactionList } from "@/components/history/transaction-list";
import { TransferModal } from "@/components/wallet/transfer-modal";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function HistoryPage() {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    status: "all",
    dateRange: "all",
    account: "all",
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-balance">
            Transaction History
          </h1>
          <Button
            onClick={() => setIsTransferModalOpen(true)}
            className="gap-2"
          >
            <Send className="h-4 w-4" />
            New Transfer
          </Button>
        </div>

        {/* Filters */}
        <TransactionFilters filters={filters} onFiltersChange={setFilters} />

        {/* Transaction List */}
        <TransactionList filters={filters} />

        {/* Transfer Modal */}
        <TransferModal
          open={isTransferModalOpen}
          onOpenChange={setIsTransferModalOpen}
        />
      </div>
    </DashboardLayout>
  );
}
