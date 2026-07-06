import { router, protectedProcedure } from "../trpc";
import { z } from "zod";

export const clientRouter = router({
  // 1. Dashboard Stats (Counts)
  dashboardStats: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user.id;
    const [activeCases, upcomingAppointments, invoices, completedCases] = await Promise.all([
      ctx.prisma.case.count({
        where: { clientId: userId, status: { in: ["OPEN", "IN_PROGRESS"] } },
      }),
      ctx.prisma.appointment.count({
        where: { clientId: userId, date: { gte: new Date() } },
      }),
      ctx.prisma.invoice.findMany({
        where: { clientId: userId, status: { in: ["DRAFT", "SENT", "PARTIALLY_PAID", "OVERDUE"] } },
        select: { total: true },
      }),
      ctx.prisma.case.count({
        where: { clientId: userId, status: "CLOSED" },
      }),
    ]);

    const unpaidInvoicesTotal = invoices.reduce((sum, inv) => sum + inv.total, 0);

    return {
      activeCases,
      upcomingAppointments,
      unpaidInvoicesTotal,
      completedCases,
    };
  }),

  // 2. Dashboard Overview (Recent items)
  overview: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user.id;
    
    const recentCases = await ctx.prisma.case.findMany({
      where: { clientId: userId },
      orderBy: { createdAt: "desc" },
      take: 3,
      select: { id: true, caseNumber: true, title: true, status: true, createdAt: true },
    });

    const nextAppointment = await ctx.prisma.appointment.findFirst({
      where: { clientId: userId, date: { gte: new Date() } },
      orderBy: { date: "asc" },
      select: { id: true, title: true, date: true, type: true },
    });

    return {
      recentCases,
      nextAppointment,
    };
  }),

  // 3. All Cases
  getCases: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.case.findMany({
      where: { clientId: ctx.user.id },
      orderBy: { createdAt: "desc" },
      include: {
        lawyer: { select: { firstName: true, lastName: true } },
        practiceArea: { select: { title: true } },
      }
    });
  }),

  // 4. All Appointments
  getAppointments: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.appointment.findMany({
      where: { clientId: ctx.user.id },
      orderBy: { date: "asc" },
      include: {
        lawyer: { select: { firstName: true, lastName: true } },
      }
    });
  }),
  
  // 5. All Invoices
  getInvoices: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.invoice.findMany({
      where: { clientId: ctx.user.id },
      orderBy: { createdAt: "desc" },
      include: {
        case: { select: { title: true, caseNumber: true } }
      }
    });
  }),
});
