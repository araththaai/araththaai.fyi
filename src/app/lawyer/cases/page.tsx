"use client";

import { useSession } from "next-auth/react";
import { Briefcase, MoreVertical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LawyerCasesPage() {
  const { data: session } = useSession();
  const isSenior = (session?.user as any)?.role === "SENIOR_LAWYER";

  const cases = [
    { id: "CAS-2026-001", title: "Doe Enterprises Merger Acquisition", client: "John Doe", status: "HIGH PRIORITY", type: "Corporate" },
    { id: "CAS-2026-002", title: "Property Dispute Resolution", client: "Sarah Smith", status: "OPEN", type: "Real Estate" },
    { id: "CAS-2026-003", title: "Breach of Contract Defense", client: "Acme Corp", status: "IN PROGRESS", type: "Civil Litigation" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Assigned Cases</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and track your active case files.</p>
        </div>
        {isSenior && (
          <Button className="bg-primary text-primary-foreground">
            <Plus className="mr-2 h-4 w-4" /> New Case File
          </Button>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4">Case ID</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cases.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{c.id}</td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900 font-medium">{c.title}</p>
                    <p className="text-xs text-gray-500">{c.type}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{c.client}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      c.status === 'HIGH PRIORITY' ? 'bg-red-100 text-red-800' : 
                      c.status === 'OPEN' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      {isSenior ? (
                        <Button onClick={() => {
                          import('sweetalert2').then(Swal => {
                            Swal.default.fire({
                              title: 'Assign Associate',
                              text: `Assignment modal opened for Case ${c.id}`,
                              icon: 'info',
                              confirmButtonColor: '#0B132B'
                            });
                          });
                        }} variant="outline" size="sm" className="h-8 text-xs">Assign Associate</Button>
                      ) : (
                        <Button onClick={() => {
                          import('sweetalert2').then(Swal => {
                            Swal.default.fire({
                              title: 'Draft Submitted',
                              text: `Draft submitted to Senior Counsel successfully for Case ${c.id}`,
                              icon: 'success',
                              confirmButtonColor: '#0B132B'
                            });
                          });
                        }} variant="outline" size="sm" className="h-8 text-xs">Submit Draft</Button>
                      )}
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
