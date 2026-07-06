"use client";

import { useSession } from "next-auth/react";
import { Calendar as CalendarIcon, Clock, MapPin, Video } from "lucide-react";

export default function LawyerSchedulePage() {
  const { data: session } = useSession();
  
  const meetings = [
    { id: 1, title: "Initial Consultation - Doe Enterprises", time: "10:00 AM - 11:00 AM", type: "ONLINE", location: "Zoom", date: "Today" },
    { id: 2, title: "Court Hearing - Case #CAS-2026-002", time: "01:00 PM - 03:00 PM", type: "OFFLINE", location: "District Court, Room 4B", date: "Today" },
    { id: 3, title: "Client Strategy Review", time: "09:00 AM - 10:30 AM", type: "ONLINE", location: "Google Meet", date: "Tomorrow" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">My Schedule</h1>
        <p className="text-sm text-gray-500 mt-1">View upcoming client meetings, court dates, and deadlines.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
          
          <div className="space-y-3">
            {meetings.map((meeting) => (
              <div key={meeting.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${meeting.type === 'ONLINE' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>
                    {meeting.type === 'ONLINE' ? <Video className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{meeting.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><CalendarIcon className="h-4 w-4" /> {meeting.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {meeting.time}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {meeting.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0">
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Availability Status</h2>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center gap-2 text-green-800 font-medium mb-1">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>
                Available for Consultations
              </div>
              <p className="text-xs text-green-700/80">Clients can book appointments in your available slots.</p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-colors">Block Calendar Time</button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-colors">Sync Google Calendar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
