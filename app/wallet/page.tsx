"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { WalletBalance } from "@/components/wallet/wallet-balance";
import { TransferModal } from "@/components/wallet/transfer-modal";
import { SavedBeneficiaries } from "@/components/wallet/saved-beneficiaries";
import { Button } from "@/components/ui/button";
import { Send, Plus } from "lucide-react";

export default function WalletPage() {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-balance">Wallet</h1>
          <Button
            onClick={() => setIsTransferModalOpen(true)}
            className="gap-2"
          >
            <Send className="h-4 w-4" />
            Send Money
          </Button>
        </div>

        {/* Wallet Balance */}
        <WalletBalance />

        {/* Quick Transfer Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-20 flex-col gap-2 bg-transparent"
                onClick={() => setIsTransferModalOpen(true)}
              >
                <Send className="h-6 w-6" />
                <span className="text-sm">Send Money</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2 bg-transparent"
              >
                <Plus className="h-6 w-6" />
                <span className="text-sm">Add Beneficiary</span>
              </Button>
            </div>
          </div>

          {/* Saved Beneficiaries */}
          <SavedBeneficiaries onTransfer={() => setIsTransferModalOpen(true)} />
        </div>

        {/* Transfer Modal */}
        <TransferModal
          open={isTransferModalOpen}
          onOpenChange={setIsTransferModalOpen}
        />
      </div>
    </DashboardLayout>
  );
}
