import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Briefcase, Calendar, FileText, User, AlertCircle, Clock, MapPin, Building2 } from "lucide-react";
import { TopCaseActions, AddUpdateAction } from "./CaseActionButtons";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default async function CaseProfilePage({ params }: { params: { id: string } }) {
  const { id } = await params;

  // Fetch case details
  const caseItem = await prisma.case.findUnique({
    where: { id },
    include: {
      client: {
        include: { clientProfile: true }
      },
      lawyer: true,
      practiceArea: true,
      updates: {
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!caseItem) {
    notFound();
  }

  const clientName = `${caseItem.client.firstName || ""} ${caseItem.client.lastName || ""}`.trim() || caseItem.client.email;
  const lawyerName = caseItem.lawyer ? `${caseItem.lawyer.firstName || ""} ${caseItem.lawyer.lastName || ""}`.trim() || caseItem.lawyer.email : "Unassigned";

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link href="/lawyer/cases" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-4 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cases
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">{caseItem.title}</h1>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide
              ${caseItem.status === 'OPEN' ? 'bg-blue-100 text-blue-800' : ''}
              ${caseItem.status === 'IN_PROGRESS' ? 'bg-amber-100 text-amber-800' : ''}
              ${caseItem.status === 'CLOSED' ? 'bg-gray-100 text-gray-800' : ''}
              ${caseItem.status === 'ON_HOLD' ? 'bg-purple-100 text-purple-800' : ''}
              ${caseItem.status === 'APPEAL' ? 'bg-red-100 text-red-800' : ''}
            `}>
              {caseItem.status.replace('_', ' ')}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
            <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">{caseItem.caseNumber}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><FileText className="h-3.5 w-3.5" /> {caseItem.practiceArea.title}</span>
          </p>
        </div>
        <TopCaseActions caseId={caseItem.id} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Case Description
              </h3>
            </div>
            <div className="p-6 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
              {caseItem.description || "No detailed description provided for this case."}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Updates
              </h3>
              <AddUpdateAction caseId={caseItem.id} />
            </div>
            <div className="p-0">
              {caseItem.updates.length === 0 ? (
                <div className="p-8 text-center text-gray-500 text-sm">
                  No updates have been logged for this case yet.
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {caseItem.updates.map((update) => (
                    <div key={update.id} className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{update.title}</h4>
                        <span className="text-xs text-gray-500">{new Date(update.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-sm text-gray-600">{update.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Metadata */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-semibold text-gray-900">Case Overview</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Priority</p>
                <div className="flex items-center gap-2">
                  <AlertCircle className={`h-4 w-4 ${caseItem.priority === 'CRITICAL' ? 'text-red-500' : caseItem.priority === 'HIGH' ? 'text-orange-500' : caseItem.priority === 'MEDIUM' ? 'text-yellow-500' : 'text-green-500'}`} />
                  <span className="text-sm font-semibold text-gray-900">{caseItem.priority}</span>
                </div>
              </div>
              
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Deadline / Next Hearing</p>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-900">{caseItem.deadline ? new Date(caseItem.deadline).toLocaleDateString() : "Not scheduled"}</span>
                </div>
              </div>

              {caseItem.courtInfo && (
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Court Info</p>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-900">{caseItem.courtInfo}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-semibold text-gray-900">Involved Parties</h3>
            </div>
            <div className="p-6 space-y-5">
              
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Client</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {clientName.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="overflow-hidden">
                    <Link href={`/lawyer/clients/${caseItem.client.id}`} className="font-medium text-gray-900 hover:text-primary transition-colors block truncate">
                      {clientName}
                    </Link>
                    <p className="text-xs text-gray-500 truncate flex items-center gap-1">
                      {caseItem.client.clientProfile?.companyName ? (
                        <><Building2 className="h-3 w-3" /> {caseItem.client.clientProfile.companyName}</>
                      ) : "Individual"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Lead Counsel</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-sm shrink-0">
                    {caseItem.lawyer ? lawyerName.substring(0, 2).toUpperCase() : <User className="h-4 w-4" />}
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-medium text-gray-900 block truncate">{lawyerName}</p>
                    <p className="text-xs text-gray-500 truncate">
                      {caseItem.lawyer ? "Assigned Lawyer" : "Pending Assignment"}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
