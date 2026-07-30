"use client";

import { Users, Briefcase, DollarSign, Activity } from "lucide-react";

export default function AdminOverview() {
  const stats = [
    { name: "Total Active Cases", value: "24", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100" },
    { name: "Total Clients", value: "156", icon: Users, color: "text-amber-600", bg: "bg-amber-100" },
    { name: "Monthly Revenue", value: "₹4,50,000", icon: DollarSign, color: "text-green-600", bg: "bg-green-100" },
    { name: "Pending Tasks", value: "12", icon: Activity, color: "text-purple-600", bg: "bg-purple-100" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Firm Overview</h1>
        <p className="text-sm text-gray-500 mt-1">High-level analytics and firm performance.</p>
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
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
             <div className="border-l-2 border-primary pl-4 py-1">
               <p className="text-sm text-gray-900 font-medium">New Client Registration</p>
               <p className="text-xs text-gray-500">John Doe completed onboarding &bull; 10 mins ago</p>
             </div>
             <div className="border-l-2 border-amber-500 pl-4 py-1">
               <p className="text-sm text-gray-900 font-medium">Invoice Paid</p>
               <p className="text-xs text-gray-500">INV-2023-1001 for ₹5,500 &bull; 1 hour ago</p>
             </div>
             <div className="border-l-2 border-blue-500 pl-4 py-1">
               <p className="text-sm text-gray-900 font-medium">Case Status Updated</p>
               <p className="text-xs text-gray-500">CAS-2023-001 moved to IN_PROGRESS by Robert K. &bull; 2 hours ago</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
