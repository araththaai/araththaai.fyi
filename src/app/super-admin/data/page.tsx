import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { Terminal, Database, Edit, Trash2 } from "lucide-react";
import { decrypt } from "@/lib/crypto";
import DataTable from "./DataTable";

// Use global prisma instance in development to prevent connection exhaustion
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default async function DataExplorerPage(props: {
  searchParams: Promise<{ table?: string }>;
}) {
  const searchParams = await props.searchParams;
  const table = searchParams.table || "user";

  let data: any[] = [];
  let columns: string[] = [];

  const tables = [
    "user", "clientProfile", "lawyerProfile", "practiceArea", "case", "caseUpdate", 
    "appointment", "document", "invoice", "payment", "blogCategory", "blog", 
    "faq", "testimonial", "review", "officeLocation", "contactRequest", 
    "consultationRequest", "notification", "message", "teamMember", "career", 
    "jobApplication", "galleryImage", "mediaFile", "language", "translationKey", 
    "setting", "seoMetadata", "activityLog", "auditLog"
  ];

  try {
    const model = (prisma as any)[table];
    if (model && typeof model.findMany === 'function') {
      try {
        data = await model.findMany({ take: 100, orderBy: { createdAt: 'desc' } });
      } catch (e) {
        // Fallback if table doesn't have createdAt field
        data = await model.findMany({ take: 100 });
      }
    }

    if (data.length > 0) {
      columns = Object.keys(data[0]);
      
      // Decrypt passwords securely on the server side before passing to client
      if (columns.includes('password')) {
        data = data.map(row => {
          if (row.password && typeof row.password === 'string') {
            return { ...row, password: decrypt(row.password) };
          }
          return row;
        });
      }
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="space-y-6 font-mono h-full flex flex-col">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <Terminal className="h-6 w-6 text-green-400" /> Data Explorer
        </h1>
        <p className="text-sm text-gray-500 mt-1">Direct read/write access to the database tables.</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {tables.map((t) => (
          <Link 
            key={t} 
            href={`/super-admin/data?table=${t}`}
            className={`px-4 py-2 rounded text-sm whitespace-nowrap transition-colors capitalize ${
              table === t 
                ? "bg-green-900/30 text-green-400 border border-green-500/50" 
                : "bg-gray-900 text-gray-400 border border-gray-800 hover:bg-gray-800"
            }`}
          >
            <Database className="h-4 w-4 inline-block mr-2" />
            {t}
          </Link>
        ))}
      </div>

      <div className="flex-1 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden flex flex-col min-h-[500px]">
        <div className="px-5 py-3 border-b border-gray-800 bg-gray-950/50 flex justify-between items-center">
          <h2 className="text-sm font-bold text-gray-300 uppercase tracking-wider">
            TABLE: <span className="text-green-400">{table}</span>
          </h2>
          <span className="text-xs text-gray-500">{data.length} records found (Limit 100)</span>
        </div>
        
        <DataTable data={data} columns={columns} table={table} />
      </div>
    </div>
  );
}
