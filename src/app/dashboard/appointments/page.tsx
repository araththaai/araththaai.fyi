"use client";

import { trpc } from "@/lib/trpc/client";
import { format } from "date-fns";
import { Calendar, Clock, MapPin, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AppointmentsPage() {
  const { data: appointments, isLoading } = trpc.client.getAppointments.useQuery();

  if (isLoading) {
    return <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
      {[1, 2].map(i => <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>)}
    </div>;
  }

  const upcoming = appointments?.filter(a => new Date(a.date) >= new Date()) || [];
  const past = appointments?.filter(a => new Date(a.date) < new Date()) || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Appointments</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your consultations and scheduled meetings.</p>
        </div>
        <Link href="/book">
          <Button className="bg-primary hover:bg-primary/90">Book Consultation</Button>
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
        
        {upcoming.length > 0 ? (
          <div className="space-y-4">
            {upcoming.map((apt) => (
              <div key={apt.id} className="border border-gray-200 rounded-xl p-5 hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg flex flex-col items-center justify-center min-w-[70px]">
                      <span className="text-xs font-bold uppercase">{format(new Date(apt.date), "MMM")}</span>
                      <span className="text-2xl font-bold leading-none my-1">{format(new Date(apt.date), "dd")}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{apt.title}</h3>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-600 gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{format(new Date(apt.date), "h:mm a")} ({apt.duration} mins)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 gap-2">
                          {apt.type === "ONLINE" ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                          <span>{apt.type === "ONLINE" ? "Online Meeting" : "In-Person at Office"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${apt.status === "CONFIRMED" ? "bg-green-100 text-green-800" :
                        apt.status === "REQUESTED" ? "bg-amber-100 text-amber-800" : 
                        "bg-gray-100 text-gray-800"}`}>
                      {apt.status}
                    </span>
                    {apt.lawyer && (
                      <span className="text-sm text-gray-600 font-medium">
                        with {apt.lawyer.firstName} {apt.lawyer.lastName}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <Calendar className="h-10 w-10 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No upcoming appointments</p>
          </div>
        )}
      </div>

      {past.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Past Appointments</h2>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {past.map((apt) => (
                <div key={apt.id} className="p-4 sm:px-6 hover:bg-gray-50 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{apt.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{format(new Date(apt.date), "MMMM dd, yyyy 'at' h:mm a")}</p>
                  </div>
                  <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2.5 py-0.5 rounded-full">{apt.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
