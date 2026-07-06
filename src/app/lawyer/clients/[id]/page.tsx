import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, Building, Briefcase, FileText, Calendar, Shield, MapPin } from "lucide-react";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default async function ClientProfilePage({ params }: { params: { id: string } }) {
  const { id } = await params;

  // Fetch client details
  const client = await prisma.user.findUnique({
    where: { id },
    include: {
      clientProfile: true,
      casesAsClient: {
        include: {
          practiceArea: true,
          lawyer: true
        },
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!client || client.role !== "CLIENT") {
    notFound();
  }

  const name = `${client.firstName || ""} ${client.lastName || ""}`.trim() || client.email;
  const initials = name.substring(0, 2).toUpperCase();

  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <Link href="/lawyer/clients" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-4 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Directory
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Client Profile</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Client Details */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-primary/10 to-primary/5"></div>
            <div className="px-6 pb-6 relative">
              <div className="h-20 w-20 rounded-xl bg-white p-1 absolute -top-10 shadow-sm border border-gray-100">
                <div className="h-full w-full bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-2xl">
                  {initials}
                </div>
              </div>
              
              <div className="pt-12">
                <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-medium">Verified Client</span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 text-sm">
                    <Building className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Company</p>
                      <p className="text-gray-600">{client.clientProfile?.companyName || "Individual Client"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Mail className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Email Address</p>
                      <a href={`mailto:${client.email}`} className="text-primary hover:underline">{client.email}</a>
                    </div>
                  </div>
                  {client.phone && (
                    <div className="flex items-start gap-3 text-sm">
                      <Phone className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Phone Number</p>
                        <a href={`tel:${client.phone}`} className="text-primary hover:underline">{client.phone}</a>
                      </div>
                    </div>
                  )}
                  {client.clientProfile?.billingAddress && (
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Billing Address</p>
                        <p className="text-gray-600">{client.clientProfile.billingAddress}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Case History & Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-gray-400" />
                Case History
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {client.casesAsClient.length} Total Cases
              </span>
            </div>
            
            <div className="divide-y divide-gray-100">
              {client.casesAsClient.length === 0 ? (
                <div className="p-8 text-center text-gray-500 text-sm">
                  No cases found for this client.
                </div>
              ) : (
                client.casesAsClient.map(c => (
                  <div key={c.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{c.caseNumber}</span>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide
                            ${c.status === 'OPEN' ? 'bg-blue-100 text-blue-800' : ''}
                            ${c.status === 'IN_PROGRESS' ? 'bg-amber-100 text-amber-800' : ''}
                            ${c.status === 'CLOSED' ? 'bg-gray-100 text-gray-800' : ''}
                            ${c.status === 'ON_HOLD' ? 'bg-purple-100 text-purple-800' : ''}
                            ${c.status === 'APPEAL' ? 'bg-red-100 text-red-800' : ''}
                          `}>
                            {c.status.replace('_', ' ')}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-gray-900">{c.title}</h4>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{c.description || "No description provided."}</p>
                        
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <FileText className="h-3.5 w-3.5" />
                            {c.practiceArea.title}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            Opened: {new Date(c.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Link href={`/lawyer/cases/${c.id}`} className="text-sm font-medium text-primary hover:underline">View Case</Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
