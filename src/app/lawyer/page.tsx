"use client";

import { Users, Briefcase, Calendar, CheckCircle } from "lucide-react";

export default function LawyerOverview() {
  const stats = [
    { name: "My Active Cases", value: "8", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100" },
    { name: "My Clients", value: "12", icon: Users, color: "text-amber-600", bg: "bg-amber-100" },
    { name: "Meetings This Week", value: "5", icon: Calendar, color: "text-purple-600", bg: "bg-purple-100" },
    { name: "Closed Cases", value: "43", icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Lawyer Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your assigned cases and client consultations.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Priority Cases</h2>
          </div>
          <div className="divide-y divide-gray-200">
             <div className="p-6 hover:bg-gray-50">
               <div className="flex justify-between">
                 <div>
                   <h3 className="text-sm font-medium text-gray-900">Doe Enterprises Merger Acquisition</h3>
                   <p className="text-xs text-gray-500 mt-1">Client: John Doe &bull; Corporate Law</p>
                 </div>
                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">HIGH PRIORITY</span>
               </div>
             </div>
             <div className="p-6 hover:bg-gray-50">
               <div className="flex justify-between">
                 <div>
                   <h3 className="text-sm font-medium text-gray-900">Property Dispute Resolution</h3>
                   <p className="text-xs text-gray-500 mt-1">Client: John Doe &bull; Real Estate</p>
                 </div>
                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">OPEN</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
