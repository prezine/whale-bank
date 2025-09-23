"use client";

import { useState } from "react";
import { LoginForm } from "@/components/auth/login-form";
import { SignUpForm } from "@/components/auth/signup-form";
import { OTPForm } from "@/components/auth/otp-form";

export default function AuthPage() {
  const [currentView, setCurrentView] = useState<"login" | "signup" | "otp">(
    "login"
  );
  const [userEmail, setUserEmail] = useState("");

  const handleSignUpSuccess = (email: string) => {
    setUserEmail(email);
    setCurrentView("otp");
  };

  const handleOTPSuccess = () => {
    // Redirect to dashboard after successful OTP verification
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {currentView === "login" && (
          <LoginForm onSwitchToSignUp={() => setCurrentView("signup")} />
        )}
        {currentView === "signup" && (
          <SignUpForm
            onSwitchToLogin={() => setCurrentView("login")}
            onSignUpSuccess={handleSignUpSuccess}
          />
        )}
        {currentView === "otp" && (
          <OTPForm
            email={userEmail}
            onOTPSuccess={handleOTPSuccess}
            onBack={() => setCurrentView("signup")}
          />
        )}
      </div>
    </div>
  );
}
