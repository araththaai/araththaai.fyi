"use client";

import { Activity, Database, Cpu, Network } from "lucide-react";

export default function SuperAdminOverview() {
  const metrics = [
    { name: "API Latency", value: "45ms", status: "Optimal", icon: Activity, color: "text-green-400", border: "border-green-500/20" },
    { name: "Database Connections", value: "12 / 100", status: "Healthy", icon: Database, color: "text-blue-400", border: "border-blue-500/20" },
    { name: "Server Load", value: "24%", status: "Normal", icon: Cpu, color: "text-amber-400", border: "border-amber-500/20" },
    { name: "Network Traffic", value: "1.2 GB/s", status: "Stable", icon: Network, color: "text-purple-400", border: "border-purple-500/20" },
  ];

  return (
    <div className="space-y-6 font-mono">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          System Overview
        </h1>
        <p className="text-sm text-gray-500 mt-1">AustralAI Platform Infrastructure Management.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.name} className={`bg-gray-900 rounded border ${metric.border} p-5`}>
            <div className="flex items-center justify-between mb-4">
              <metric.icon className={`h-5 w-5 ${metric.color}`} />
              <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">{metric.status}</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase">{metric.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-900 rounded border border-gray-800 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-800 bg-gray-950/50">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-wider">System Logs</h2>
          </div>
          <div className="p-5 text-sm space-y-3">
             <div className="flex items-start gap-3">
               <span className="text-green-500">[OK]</span>
               <span className="text-gray-400">Database connection established successfully.</span>
             </div>
             <div className="flex items-start gap-3">
               <span className="text-green-500">[OK]</span>
               <span className="text-gray-400">Prisma schema synchronized with 5 roles.</span>
             </div>
             <div className="flex items-start gap-3">
               <span className="text-blue-400">[INFO]</span>
               <span className="text-gray-400">Super Admin session initiated by AustralAI.</span>
             </div>
             <div className="flex items-start gap-3">
               <span className="text-amber-400">[WARN]</span>
               <span className="text-gray-400">Unused assets detected in /public directory.</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
