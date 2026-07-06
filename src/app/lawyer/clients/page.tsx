import { PrismaClient } from "@prisma/client";
import ClientDirectory from "./ClientDirectory";
import { revalidatePath } from "next/cache";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default async function LawyerClientsPage() {
  // Fetch users with role CLIENT
  let dbClients = await prisma.user.findMany({
    where: { role: "CLIENT" },
    include: {
      clientProfile: true,
      casesAsClient: {
        where: { status: { notIn: ["CLOSED"] } } // Get active cases count
      }
    }
  });

  // If no clients exist, seed some dummy clients so the view works
  if (dbClients.length === 0) {
    console.log("No clients found. Seeding dummy clients...");
    
    // Seed Client 1
    const c1 = await prisma.user.create({
      data: {
        email: "john@doeenterprises.com",
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (555) 123-4567",
        role: "CLIENT",
        clientProfile: {
          create: {
            companyName: "Doe Enterprises"
          }
        }
      }
    });

    // Seed Client 2
    const c2 = await prisma.user.create({
      data: {
        email: "sarah.smith@example.com",
        firstName: "Sarah",
        lastName: "Smith",
        phone: "+1 (555) 987-6543",
        role: "CLIENT",
        clientProfile: {
          create: {
            companyName: null
          }
        }
      }
    });

    // Seed Client 3
    const c3 = await prisma.user.create({
      data: {
        email: "legal@acmecorp.com",
        firstName: "Acme",
        lastName: "Corp",
        phone: "+1 (555) 456-7890",
        role: "CLIENT",
        clientProfile: {
          create: {
            companyName: "Acme Corporation"
          }
        }
      }
    });

    // Refetch the newly created clients
    dbClients = await prisma.user.findMany({
      where: { role: "CLIENT" },
      include: {
        clientProfile: true,
        casesAsClient: {
          where: { status: { notIn: ["CLOSED"] } }
        }
      }
    });
    
    revalidatePath("/lawyer/clients");
  }

  // Map DB data to the format expected by the ClientDirectory component
  const formattedClients = dbClients.map(c => ({
    id: c.id,
    name: `${c.firstName || ""} ${c.lastName || ""}`.trim() || c.email,
    company: c.clientProfile?.companyName || null,
    email: c.email,
    phone: c.phone || "",
    activeCases: c.casesAsClient.length
  }));

  return <ClientDirectory initialClients={formattedClients} />;
}
