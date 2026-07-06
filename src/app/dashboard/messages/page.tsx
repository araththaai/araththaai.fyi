"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MessagesPage() {
  return (
    <div className="space-y-6 h-[calc(100vh-10rem)] flex flex-col">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Messages</h1>
        <p className="text-sm text-gray-500 mt-1">Communicate directly with your legal team.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col items-center justify-center p-12 text-center">
        <MessageSquare className="h-16 w-16 text-gray-300 mb-6" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Secure Messaging Coming Soon</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          We are currently upgrading our secure messaging platform to provide you with a better communication experience. In the meantime, please contact us via email.
        </p>
        <Button onClick={() => window.location.href = "mailto:consult@araththaai.fyi"}>
          Email Support
        </Button>
      </div>
    </div>
  );
}
