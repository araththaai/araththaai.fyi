# Araththaai Legal Consultancy Platform - Implementation Plan

This document outlines the architecture, design strategy, and development phases for building the premium, scalable digital legal platform for **Araththaai – AKM Associates & Legal Consultants**.

## Goal
To design and develop a production-ready, full-stack Legal Consultancy Platform that acts as a secure client portal, content management system, and marketing site. The platform will use Next.js 15, TypeScript, Tailwind CSS, Prisma, Supabase, Clerk Auth, and shadcn/ui, focusing on an elegant, trust-building, and luxury minimal design aesthetic.

> [!CAUTION]
> ## User Review Required
> This is a large-scale enterprise application. The plan proposes a phased approach. For this current request, I will focus on **Phase 1 (Foundation & Architecture Setup)** and **Phase 2 (Design System & Landing Page)** to establish the core platform and the visual identity. 
> 
> Please review the database schema outline below and confirm if the phased approach is acceptable.

> [!WARNING]
> ## Open Questions
> 1. **Environment Variables:** The app requires keys for Clerk (Auth), Supabase (Database), Cloudinary (Storage), and Resend (Emails). Shall I provide a `.env.example` with placeholders for you to fill in, or do you have these ready to configure?
> 2. **Backend Architecture:** You requested both **Next.js Server Actions** and **tRPC**. Typically, Next.js Server Actions handle mutations well, and we can use TanStack Query with standard APIs or Server Actions. Using full tRPC adds significant boilerplate. Are you open to using purely Server Actions combined with TanStack Query, or is tRPC an absolute strict requirement?
> 3. **Tailwind Version:** Do you want to use the stable Tailwind CSS v3.x or the newer v4.x (which is still in beta/early stages for some frameworks)? I recommend v3.4.x for maximum stability with `shadcn/ui`.

## Proposed Architecture & Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with specific color palette and typography)
- **UI Components:** shadcn/ui, Lucide Icons, React Hook Form, Zod
- **Animations:** Framer Motion (subtle interactions), Lenis Smooth Scroll
- **Authentication:** Clerk Auth (with Role-Based Access Control)
- **Database:** PostgreSQL (hosted on Supabase)
- **ORM:** Prisma
- **Data Fetching:** TanStack Query + Next.js Server Actions
- **Storage:** Supabase Storage / Cloudinary (for case files and media)
- **Email:** Resend + React Email

### Enterprise Folder Structure

```
app/              # Next.js App Router pages and API routes
components/       # Reusable UI and layout components
  ui/             # shadcn/ui base components
  shared/         # Navbar, Footer, standard blocks
features/         # Domain-specific modules (auth, booking, dashboard)
hooks/            # Custom React hooks
lib/              # Utility functions, configurations (e.g., Prisma client, Clerk config)
actions/          # Next.js Server Actions for mutations and data fetching
server/           # Backend logic, tRPC routers (if strictly needed)
prisma/           # Prisma schema and migrations
types/            # Global TypeScript definitions
utils/            # Helper functions
emails/           # React Email templates
public/           # Static assets, fonts, icons
styles/           # Global CSS, Tailwind config
```

### Initial Database Schema Outline (Prisma)
- `User` (id, clerkId, role: CLIENT|LAWYER|ADMIN, name, email, phone)
- `Consultation` (id, clientId, lawyerId, serviceId, date, status, notes)
- `Service` (id, title, description, category, price)
- `Document` (id, consultationId, url, type, uploadedBy)
- `Blog` (id, title, slug, content, authorId, publishedAt)

---

## Development Phases

### Phase 1: Foundation Setup
- Initialize Next.js 15 project with TypeScript.
- Configure Tailwind CSS with the requested color system:
  - Primary: `#0B132B`
  - Secondary: `#C8A24A`
  - Background: `#FFFFFF`, Surface: `#F8FAFC`
- Set up custom fonts: Playfair Display (Headings) and Inter (Body).
- Initialize Prisma and connect to the PostgreSQL database.
- Integrate Clerk Authentication Provider and configure middleware for role-based routing.

### Phase 2: Design System & Core Layout
- Install and configure `shadcn/ui`.
- Create global layouts, navigation menu, and footer.
- Implement Lenis smooth scrolling and basic Framer Motion wrappers for page transitions.
- Build the **Landing Page** with Hero section, Trust Indicators, Practice Areas grid, Testimonials, and Contact CTA, strictly adhering to the "Luxury Minimalism" design principles.

### Phase 3: Domain Features (Consultations & Practice Areas)
- Develop the dynamic Practice Areas pages (`/services/[slug]`).
- Build the "Book Consultation" wizard using React Hook Form and Zod for complex validation.
- Implement file upload integration for documents during booking.

### Phase 4: Dashboards & Portals
- **Client Dashboard:** View upcoming appointments, download documents, view case status.
- **Lawyer Dashboard:** Calendar view, client notes, daily schedule.
- **Admin Dashboard:** Analytics overview, service management, blog CMS.

### Phase 5: Polish & SEO
- Integrate Next SEO for dynamic metadata, OpenGraph, and Schema.org.
- Finalize React Email templates for confirmation and reminder emails.
- Accessibility audit (WCAG AA) and Lighthouse performance optimization.

## Verification Plan

### Automated/Code Verification
- TypeScript compilation check (`tsc --noEmit`).
- Linting and Formatting (`eslint`, `prettier`).
- Verify Prisma schema generation and database connection.
- Check responsive layouts across standard breakpoints.

### Manual Verification
- Visual inspection of the Landing Page against the "Premium/Luxury Minimalism" aesthetic.
- Test Authentication flows via Clerk.
- Verify role-based routing correctly blocks/allows access to specific dashboards.
- Verify the booking form validation and submission logic.

---
**Please review the plan and provide any feedback, particularly regarding the open questions, so we can begin Phase 1 execution.**
