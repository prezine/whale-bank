"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { BalanceCard } from "@/components/dashboard/balance-card";
import { TransactionChart } from "@/components/dashboard/transaction-chart";
import { CurrencyConverter } from "@/components/dashboard/currency-converter";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="w-full bg-red-500 px-4 py-2 rounded-sm">
          <p className="text-white">
            Your Account has been restricted. Contact your bank for
            rectification
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground text-balance">
              Dashboard
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your finances with ease
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Welcome back</p>
            <p className="font-medium text-foreground">Matt Walst</p>
          </div>
        </div>

        {/* Balance and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <BalanceCard />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>

        {/* Recent Transactions */}
        <RecentTransactions />
      </div>
    </DashboardLayout>
  );
}
