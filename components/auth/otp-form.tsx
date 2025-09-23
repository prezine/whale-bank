"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Shield } from "lucide-react";

interface OTPFormProps {
  email: string;
  onOTPSuccess: () => void;
  onBack: () => void;
}

export function OTPForm({ email, onOTPSuccess, onBack }: OTPFormProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.some((digit) => !digit)) {
      alert("Please enter all 6 digits");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    onOTPSuccess();
  };

  const handleResend = () => {
    setTimeLeft(60);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <Card className="w-full shadow-xl border-0 bg-card/80 backdrop-blur-sm">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <CardTitle className="text-2xl font-bold text-balance">
            Verify Your Email
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            We've sent a 6-digit code to
            <br />
            <span className="font-semibold text-foreground">{email}</span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-semibold"
              />
            ))}
          </div>

          <Button
            type="submit"
            className="w-full h-11 font-semibold"
            disabled={isLoading || otp.some((digit) => !digit)}
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </Button>
        </form>

        <div className="mt-6 text-center space-y-4">
          {timeLeft > 0 ? (
            <p className="text-sm text-muted-foreground">
              Resend code in {timeLeft}s
            </p>
          ) : (
            <Button
              variant="link"
              className="p-0 h-auto font-semibold text-primary"
              onClick={handleResend}
            >
              Resend Code
            </Button>
          )}

          <Button
            variant="ghost"
            className="flex items-center gap-2 mx-auto"
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign Up
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
