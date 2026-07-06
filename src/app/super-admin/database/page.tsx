"use client";

import { Database, Search, Filter, AlertCircle, CheckCircle, RefreshCcw } from "lucide-react";

export default function DatabaseLogsPage() {
  const logs = [
    { id: 1, time: "2026-07-06 10:30:15", level: "INFO", query: "SELECT * FROM users WHERE role = 'SUPER_ADMIN'", duration: "12ms", status: "success" },
    { id: 2, time: "2026-07-06 10:28:42", level: "INFO", query: "UPDATE cases SET status = 'IN_PROGRESS' WHERE id = '...'", duration: "45ms", status: "success" },
    { id: 3, time: "2026-07-06 10:15:03", level: "WARN", query: "SELECT * FROM sessions WHERE expires < NOW()", duration: "120ms", status: "success" },
    { id: 4, time: "2026-07-06 09:42:11", level: "ERROR", query: "INSERT INTO audit_logs (id, user_id) VALUES (NULL, '...')", duration: "8ms", status: "error" },
    { id: 5, time: "2026-07-06 09:30:00", level: "INFO", query: "BEGIN TRANSACTION; UPDATE invoices...", duration: "85ms", status: "success" },
  ];

  return (
    <div className="space-y-6 font-mono">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Database className="h-6 w-6 text-blue-400" /> Database Logs
          </h1>
          <p className="text-sm text-gray-500 mt-1">Real-time Prisma query execution logs and performance metrics.</p>
        </div>
        <div className="flex gap-2 text-sm">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-gray-300 border border-gray-700 rounded hover:bg-gray-800 transition-colors">
            <RefreshCcw className="h-4 w-4" /> Refresh
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 text-blue-400 border border-blue-900/50 rounded hover:bg-blue-900/50 transition-colors">
            <Filter className="h-4 w-4" /> Filter Logs
          </button>
        </div>
      </div>

      <div className="bg-gray-900 rounded border border-gray-800 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-800 bg-gray-950/50 flex items-center gap-3">
          <Search className="h-4 w-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search queries, tables, or levels..." 
            className="bg-transparent border-none text-sm text-gray-300 focus:outline-none w-full font-mono placeholder-gray-600"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 bg-gray-900/50 uppercase tracking-wider text-xs">
                <th className="py-3 px-5 font-medium">Timestamp</th>
                <th className="py-3 px-5 font-medium">Level</th>
                <th className="py-3 px-5 font-medium">Query Snippet</th>
                <th className="py-3 px-5 font-medium">Duration</th>
                <th className="py-3 px-5 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-300">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="py-3 px-5 whitespace-nowrap text-gray-500 text-xs">{log.time}</td>
                  <td className="py-3 px-5">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold ${
                      log.level === 'INFO' ? 'bg-blue-500/10 text-blue-400' :
                      log.level === 'WARN' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {log.level}
                    </span>
                  </td>
                  <td className="py-3 px-5 max-w-md truncate text-gray-400 text-xs">
                    <code className="text-gray-300">{log.query}</code>
                  </td>
                  <td className="py-3 px-5 whitespace-nowrap text-gray-400">
                    <span className={parseInt(log.duration) > 100 ? "text-amber-400" : "text-green-400"}>
                      {log.duration}
                    </span>
                  </td>
                  <td className="py-3 px-5">
                    {log.status === 'success' ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
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
