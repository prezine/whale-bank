"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Save } from "lucide-react";

export function NotificationSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    transactionAlerts: true,
    securityAlerts: true,
    marketingEmails: false,
    monthlyStatements: true,
    lowBalanceAlerts: true,
    largeTransactionAlerts: true,
    loginAlerts: true,
    frequency: "immediate",
    quietHours: false,
    quietStart: "22:00",
    quietEnd: "08:00",
  });

  const handleToggle = (key: string) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleSelectChange = (key: string, value: string) => {
    setNotifications((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    alert("Notification settings updated successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Communication Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Communication Preferences</CardTitle>
          <CardDescription>
            Choose how you want to receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications via email
              </p>
            </div>
            <Switch
              id="email-notifications"
              checked={notifications.emailNotifications}
              onCheckedChange={() => handleToggle("emailNotifications")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications via text message
              </p>
            </div>
            <Switch
              id="sms-notifications"
              checked={notifications.smsNotifications}
              onCheckedChange={() => handleToggle("smsNotifications")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications on your device
              </p>
            </div>
            <Switch
              id="push-notifications"
              checked={notifications.pushNotifications}
              onCheckedChange={() => handleToggle("pushNotifications")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="frequency">Notification Frequency</Label>
            <Select
              value={notifications.frequency}
              onValueChange={(value) => handleSelectChange("frequency", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediate</SelectItem>
                <SelectItem value="hourly">Hourly Digest</SelectItem>
                <SelectItem value="daily">Daily Digest</SelectItem>
                <SelectItem value="weekly">Weekly Digest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Alert Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Alert Settings</CardTitle>
          <CardDescription>
            Configure specific alerts for your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="transaction-alerts">Transaction Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified for all transactions
              </p>
            </div>
            <Switch
              id="transaction-alerts"
              checked={notifications.transactionAlerts}
              onCheckedChange={() => handleToggle("transactionAlerts")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="security-alerts">Security Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Important security notifications
              </p>
            </div>
            <Switch
              id="security-alerts"
              checked={notifications.securityAlerts}
              onCheckedChange={() => handleToggle("securityAlerts")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="low-balance-alerts">Low Balance Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Alert when balance is low
              </p>
            </div>
            <Switch
              id="low-balance-alerts"
              checked={notifications.lowBalanceAlerts}
              onCheckedChange={() => handleToggle("lowBalanceAlerts")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="large-transaction-alerts">
                Large Transaction Alerts
              </Label>
              <p className="text-sm text-muted-foreground">
                Alert for transactions over $1,000
              </p>
            </div>
            <Switch
              id="large-transaction-alerts"
              checked={notifications.largeTransactionAlerts}
              onCheckedChange={() => handleToggle("largeTransactionAlerts")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="login-alerts">Login Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Alert for new device logins
              </p>
            </div>
            <Switch
              id="login-alerts"
              checked={notifications.loginAlerts}
              onCheckedChange={() => handleToggle("loginAlerts")}
            />
          </div>
        </CardContent>
      </Card>

      {/* Quiet Hours */}
      <Card>
        <CardHeader>
          <CardTitle>Quiet Hours</CardTitle>
          <CardDescription>
            Set times when you don't want to receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="quiet-hours">Enable Quiet Hours</Label>
              <p className="text-sm text-muted-foreground">
                Pause non-urgent notifications during specified hours
              </p>
            </div>
            <Switch
              id="quiet-hours"
              checked={notifications.quietHours}
              onCheckedChange={() => handleToggle("quietHours")}
            />
          </div>

          {notifications.quietHours && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quiet-start">Start Time</Label>
                <Select
                  value={notifications.quietStart}
                  onValueChange={(value) =>
                    handleSelectChange("quietStart", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, "0");
                      return (
                        <SelectItem key={i} value={`${hour}:00`}>
                          {hour}:00
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quiet-end">End Time</Label>
                <Select
                  value={notifications.quietEnd}
                  onValueChange={(value) =>
                    handleSelectChange("quietEnd", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, "0");
                      return (
                        <SelectItem key={i} value={`${hour}:00`}>
                          {hour}:00
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Marketing */}
      <Card>
        <CardHeader>
          <CardTitle>Marketing Communications</CardTitle>
          <CardDescription>
            Manage promotional and marketing communications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="marketing-emails">Marketing Emails</Label>
              <p className="text-sm text-muted-foreground">
                Receive promotional offers and updates
              </p>
            </div>
            <Switch
              id="marketing-emails"
              checked={notifications.marketingEmails}
              onCheckedChange={() => handleToggle("marketingEmails")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="monthly-statements">Monthly Statements</Label>
              <p className="text-sm text-muted-foreground">
                Receive monthly account statements
              </p>
            </div>
            <Switch
              id="monthly-statements"
              checked={notifications.monthlyStatements}
              onCheckedChange={() => handleToggle("monthlyStatements")}
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSubmit} disabled={isLoading} className="gap-2">
        <Save className="h-4 w-4" />
        {isLoading ? "Saving..." : "Save Notification Settings"}
      </Button>
    </div>
  );
}
