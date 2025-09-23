"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Building } from "lucide-react";

interface TransferModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TransferModal({ open, onOpenChange }: TransferModalProps) {
  const [transferType, setTransferType] = useState("person");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    amount: "",
    recipient: "",
    accountNumber: "",
    routingNumber: "",
    description: "",
    fromAccount: "checking",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    onOpenChange(false);
    // Reset form
    setFormData({
      amount: "",
      recipient: "",
      accountNumber: "",
      routingNumber: "",
      description: "",
      fromAccount: "checking",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Send Money</DialogTitle>
        </DialogHeader>

        <Tabs
          value={transferType}
          onValueChange={setTransferType}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="person" className="gap-2">
              <User className="h-4 w-4" />
              Person
            </TabsTrigger>
            <TabsTrigger value="business" className="gap-2">
              <Building className="h-4 w-4" />
              Business
            </TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Amount and From Account */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, amount: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fromAccount">From Account</Label>
                <Select
                  value={formData.fromAccount}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, fromAccount: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checking">Checking Account</SelectItem>
                    <SelectItem value="savings">Savings Account</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="person" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recipient Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Recipient Name</Label>
                    <Input
                      id="recipient"
                      placeholder="John Doe"
                      value={formData.recipient}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          recipient: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number</Label>
                    <Input
                      id="accountNumber"
                      placeholder="1234567890"
                      value={formData.accountNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          accountNumber: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="routingNumber">Routing Number</Label>
                    <Input
                      id="routingNumber"
                      placeholder="021000021"
                      value={formData.routingNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          routingNumber: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="business" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Business Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      placeholder="ABC Company Inc."
                      value={formData.recipient}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          recipient: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessAccount">
                      Business Account Number
                    </Label>
                    <Input
                      id="businessAccount"
                      placeholder="9876543210"
                      value={formData.accountNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          accountNumber: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessRouting">
                      Business Routing Number
                    </Label>
                    <Input
                      id="businessRouting"
                      placeholder="021000021"
                      value={formData.routingNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          routingNumber: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="What's this transfer for?"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1" disabled={isLoading}>
                {isLoading ? "Processing..." : "Send Money"}
              </Button>
            </div>
          </form>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
