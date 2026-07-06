"use client";

import { trpc } from "@/lib/trpc/client";
import { format } from "date-fns";
import { FileText } from "lucide-react";

export default function CasesPage() {
  const { data: cases, isLoading } = trpc.client.getCases.useQuery();

  if (isLoading) {
    return <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
      {[1, 2, 3].map(i => <div key={i} className="h-20 bg-gray-200 rounded-lg"></div>)}
    </div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">My Cases</h1>
        <p className="text-sm text-gray-500 mt-1">A complete history of your legal matters with AKM Associates.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {cases && cases.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {cases.map((c) => (
              <div key={c.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{c.title}</h3>
                    <div className="mt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                      <span>Case ID: <span className="font-medium text-gray-700">{c.caseNumber}</span></span>
                      <span className="hidden sm:inline">&bull;</span>
                      <span>Opened: {format(new Date(c.createdAt), "MMM dd, yyyy")}</span>
                      {c.practiceArea && (
                        <>
                          <span className="hidden sm:inline">&bull;</span>
                          <span>{c.practiceArea.title}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${c.status === "CLOSED" ? "bg-green-100 text-green-800" :
                        c.status === "IN_PROGRESS" ? "bg-amber-100 text-amber-800" : 
                        "bg-blue-100 text-blue-800"}`}>
                      {c.status.replace("_", " ")}
                    </span>
                    {c.lawyer && (
                      <span className="text-xs text-gray-500">
                        Lead: {c.lawyer.firstName} {c.lawyer.lastName}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center flex flex-col items-center">
            <FileText className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No cases found</h3>
            <p className="text-gray-500 mt-2">You don't have any cases associated with your account yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
