"use client";

import { Server, Activity, Cpu, HardDrive, Network, RefreshCcw } from "lucide-react";

export default function ServerMetricsPage() {
  const metrics = [
    { label: "CPU Usage", value: "32%", max: "100%", color: "bg-green-500", icon: Cpu },
    { label: "Memory (RAM)", value: "2.4 GB", max: "8 GB", color: "bg-blue-500", icon: Activity },
    { label: "Disk Space", value: "45 GB", max: "256 GB", color: "bg-purple-500", icon: HardDrive },
    { label: "Bandwidth In", value: "120 Mbps", max: "1 Gbps", color: "bg-cyan-500", icon: Network },
    { label: "Bandwidth Out", value: "85 Mbps", max: "1 Gbps", color: "bg-indigo-500", icon: Network },
  ];

  return (
    <div className="space-y-6 font-mono">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Server className="h-6 w-6 text-amber-400" /> Server Metrics
          </h1>
          <p className="text-sm text-gray-500 mt-1">Real-time hardware utilization and network statistics.</p>
        </div>
        <div className="flex gap-2 text-sm">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-gray-300 border border-gray-700 rounded hover:bg-gray-800 transition-colors">
            <RefreshCcw className="h-4 w-4" /> Live Polling: ON
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm uppercase">
                <metric.icon className="h-4 w-4" />
                {metric.label}
              </div>
              <span className="text-white font-bold">{metric.value} <span className="text-gray-600 text-xs font-normal">/ {metric.max}</span></span>
            </div>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <div 
                className={`h-full ${metric.color} rounded-full`} 
                style={{ width: `${(parseFloat(metric.value) / parseFloat(metric.max)) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5 mt-8">
        <h2 className="text-lg font-bold text-white mb-4">Active Processes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-500 border-b border-gray-800">
                <th className="pb-2 font-normal">PID</th>
                <th className="pb-2 font-normal">Command</th>
                <th className="pb-2 font-normal">%CPU</th>
                <th className="pb-2 font-normal">%MEM</th>
                <th className="pb-2 font-normal">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800/50">
                <td className="py-3 text-gray-500">14202</td>
                <td className="py-3">node server.js</td>
                <td className="py-3 text-green-400">12.5</td>
                <td className="py-3 text-blue-400">8.2</td>
                <td className="py-3"><span className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded text-xs">Running</span></td>
              </tr>
              <tr className="border-b border-gray-800/50">
                <td className="py-3 text-gray-500">14205</td>
                <td className="py-3">postgres: 15</td>
                <td className="py-3 text-green-400">4.1</td>
                <td className="py-3 text-blue-400">15.0</td>
                <td className="py-3"><span className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded text-xs">Running</span></td>
              </tr>
              <tr>
                <td className="py-3 text-gray-500">889</td>
                <td className="py-3">nginx: worker process</td>
                <td className="py-3 text-green-400">0.5</td>
                <td className="py-3 text-blue-400">2.1</td>
                <td className="py-3"><span className="px-2 py-0.5 bg-gray-800 text-gray-400 rounded text-xs">Sleeping</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
