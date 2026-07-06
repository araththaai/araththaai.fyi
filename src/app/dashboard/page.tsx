"use client";

import { FileText, Clock, CheckCircle, AlertCircle, Plus, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc/client";
import { useSession } from "next-auth/react";
import { format } from "date-fns";

export default function DashboardOverview() {
  const { data: session } = useSession();
  const firstName = session?.user?.name?.split(" ")[0] || "User";

  const { data: stats, isLoading: statsLoading } = trpc.client.dashboardStats.useQuery();
  const { data: overview, isLoading: overviewLoading } = trpc.client.overview.useQuery();

  const statCards = [
    { name: "Active Cases", value: stats?.activeCases ?? 0, icon: FileText, color: "text-blue-600", bg: "bg-blue-100" },
    { name: "Upcoming Consultations", value: stats?.upcomingAppointments ?? 0, icon: Clock, color: "text-amber-600", bg: "bg-amber-100" },
    { name: "Unpaid Invoices", value: `₹${stats?.unpaidInvoicesTotal ?? 0}`, icon: AlertCircle, color: "text-red-600", bg: "bg-red-100" },
    { name: "Completed Cases", value: stats?.completedCases ?? 0, icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" },
  ];

  const recentCases = overview?.recentCases || [];
  const nextAppointment = overview?.nextAppointment;

  if (statsLoading || overviewLoading) {
    return <div className="animate-pulse space-y-6">
      <div className="h-10 bg-gray-200 rounded w-1/4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => <div key={i} className="h-24 bg-gray-200 rounded-xl"></div>)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-64 bg-gray-200 rounded-xl"></div>
        <div className="h-64 bg-gray-200 rounded-xl"></div>
      </div>
    </div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Welcome back, {firstName}!</h1>
          <p className="text-sm text-gray-500 mt-1">Here is an overview of your legal matters.</p>
        </div>
        <Link href="/book">
          <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Consultation
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Cases */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Recent Cases</h2>
            <Link href="/dashboard/cases" className="text-sm font-medium text-primary hover:text-primary/80">
              View all
            </Link>
          </div>
          <div className="divide-y divide-gray-200">
            {recentCases.length > 0 ? (
              recentCases.map((c) => (
                <div key={c.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{c.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">Case ID: {c.caseNumber} &bull; Opened {format(new Date(c.createdAt), "MMM dd, yyyy")}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${c.status === "IN_PROGRESS" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"}`}>
                      {c.status.replace("_", " ")}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                You have no cases yet.
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Next Appointment</h2>
          </div>
          <div className="p-6">
            {nextAppointment ? (
              <div className="space-y-4">
                <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{format(new Date(nextAppointment.date), "MMM dd, h:mm a")}</p>
                      <p className="text-xs text-gray-500">{nextAppointment.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{nextAppointment.title}</p>
                  <Button variant="outline" className="w-full mt-4 text-xs h-8">
                    View Details
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <Calendar className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">No upcoming appointments</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
