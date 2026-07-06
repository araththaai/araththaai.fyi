"use client";

import { trpc } from "@/lib/trpc/client";
import { format } from "date-fns";
import { FileText, Download, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InvoicesPage() {
  const { data: invoices, isLoading } = trpc.client.getInvoices.useQuery();

  if (isLoading) {
    return <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
      {[1, 2, 3].map(i => <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>)}
    </div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Billing & Invoices</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your payments and download past invoices.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {invoices && invoices.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500">
                  <th className="py-4 px-6 font-medium">Invoice No.</th>
                  <th className="py-4 px-6 font-medium">Date</th>
                  <th className="py-4 px-6 font-medium">Amount</th>
                  <th className="py-4 px-6 font-medium">Status</th>
                  <th className="py-4 px-6 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-900">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">{invoice.invoiceNo}</td>
                    <td className="py-4 px-6 text-gray-500">{format(new Date(invoice.createdAt), "MMM dd, yyyy")}</td>
                    <td className="py-4 px-6 font-medium">₹{invoice.total.toLocaleString()}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
                        ${invoice.status === "PAID" ? "bg-green-100 text-green-800" :
                          invoice.status === "OVERDUE" ? "bg-red-100 text-red-800" :
                          "bg-amber-100 text-amber-800"}`}>
                        {invoice.status === "PAID" ? <CheckCircle className="h-3 w-3" /> :
                         invoice.status === "OVERDUE" ? <AlertCircle className="h-3 w-3" /> : null}
                        {invoice.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      {invoice.status !== "PAID" && (
                        <Button variant="outline" size="sm" className="mr-2">Pay Now</Button>
                      )}
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-primary">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center flex flex-col items-center">
            <FileText className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No invoices found</h3>
            <p className="text-gray-500 mt-2">You don't have any billing history on your account.</p>
          </div>
        )}
      </div>
    </div>
  );
}
