"use client";

import { useState } from "react";
import { Search, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ClientDirectory({ initialClients }: { initialClients: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = initialClients.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (c.company && c.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">My Clients</h1>
          <p className="text-sm text-gray-500 mt-1">Directory of clients you are currently representing.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search clients..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-64"
          />
        </div>
      </div>

      {filteredClients.length === 0 ? (
        <div className="p-12 text-center text-gray-500 bg-white rounded-xl border border-gray-200">
          No clients found matching "{searchTerm}"
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => (
            <div key={client.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {client.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {client.activeCases} Active Cases
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{client.company || "Individual Client"}</p>
                
                <div className="space-y-3">
                  <a href={`mailto:${client.email}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4 text-gray-400" />
                    {client.email}
                  </a>
                  {client.phone && (
                    <a href={`tel:${client.phone}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors">
                      <Phone className="h-4 w-4 text-gray-400" />
                      {client.phone}
                    </a>
                  )}
                </div>
              </div>
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                <Link href={`/lawyer/clients/${client.id}`} className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 w-full justify-center">
                  View Client Profile <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
