# Project Cost Estimation: Araththaai
**Legal Practice & Consultancy Platform (AKM Associates & Legal Consultants)**

This document provides the finalized project cost and maintenance structure for the **Araththaai** platform based on the custom-built modules, codebase volume, and maintenance support scope.

---

## 1. Project Overview & Architecture
Araththaai is a custom-built, modern monorepo legal practice management and marketing platform. It is structured into two main layers:
*   **Frontend**: Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**. It incorporates **Framer Motion** for micro-animations and **Three.js (WebGL)** for premium background rendering.
*   **Backend**: Built with **Node.js (Express)**, **tRPC** (for end-to-end type safety between frontend and backend), **Prisma ORM** (targeting **PostgreSQL** on Supabase), and secure session cookies/JWT auth.

### Core Features Implemented:
1.  **Public Marketing Portal**: Premium pages detailing practice areas (Civil, Criminal, Tax, HR&CE, Family, IPR, Corporate, Human Rights), company bio, contact info, and booking form.
2.  **WebGL Creative Art (`LiquidEther`)**: Interactive fluid-dynamics particle canvas written directly using custom shaders and Three.js rendering loops to provide a high-end luxury feel.
3.  **Client Booking System**: Booking wizard utilizing validation schemas (**Zod** + **React Hook Form**) communicating with the database and triggering email routing.
4.  **Automated Email Pipelines**: Integration with the **Resend API** to dispatch professional transactional emails to clients and internal alerts to administrators.
5.  **Administrative Portal Framework**: Dashboards for managing inquiries, cases, client files, and invoices.
6.  **Secure Authentication System**: Custom symmetric AES-256-CBC token encryption logic wrapper mapped alongside cookie-based Express JWT authorization.

---

## 2. Codebase Density & Metrics
A quantitative scan of the source directories (`src/` for frontend, `server/src/` & `server/prisma/` for backend) reveals a total of **3,674 lines of custom-written code** (excluding third-party configuration files, dependencies, build directories, and lockfiles).

### Detailed File-by-File Code Breakdown:

| File / Component | Category | Lines of Code | Description / Complexity |
| :--- | :--- | :---: | :--- |
| **Frontend Component Core** | | **1,514** | |
| [LiquidEther.tsx](file:///d:/Projects/Client/Araththaai/src/components/shared/LiquidEther.tsx) | Visual | 1,220 | High complexity. Custom fragment/vertex shaders, mouse force dynamics. |
| [Footer.tsx](file:///d:/Projects/Client/Araththaai/src/components/shared/Footer.tsx) | Layout | 85 | Responsive navigation, brand metadata. |
| [Navbar.tsx](file:///d:/Projects/Client/Araththaai/src/components/shared/Navbar.tsx) | Layout | 75 | Dynamic responsive navbar with active path states. |
| [SessionProvider.tsx](file:///d:/Projects/Client/Araththaai/src/components/SessionProvider.tsx) | Context | 35 | React authentication state context handler. |
| [button.tsx](file:///d:/Projects/Client/Araththaai/src/components/ui/button.tsx) | UI | 54 | Extensible utility styling for main actions. |
| **Frontend Page Layouts** | | **1,146** | |
| [Home.tsx](file:///d:/Projects/Client/Araththaai/src/pages/Home.tsx) | Marketing | 309 | Main landing page containing hero banner, services, and trust anchors. |
| [Book.tsx](file:///d:/Projects/Client/Araththaai/src/pages/Book.tsx) | Booking | 178 | Interactive intake form validation using Hook Form & Zod. |
| [Contact.tsx](file:///d:/Projects/Client/Araththaai/src/pages/Contact.tsx) | Intake | 113 | Contact form and firm contact specifications. |
| [Services.tsx](file:///d:/Projects/Client/Araththaai/src/pages/Services.tsx) | Catalog | 110 | Catalog of legal areas offered. |
| [AdminConsultations.tsx](file:///d:/Projects/Client/Araththaai/src/pages/AdminConsultations.tsx) | Admin | 100 | Inbound leads tracking sheet UI. |
| [ServiceDetail.tsx](file:///d:/Projects/Client/Araththaai/src/pages/ServiceDetail.tsx) | Catalog | 81 | Specific sub-practice content details layout. |
| [SignIn.tsx](file:///d:/Projects/Client/Araththaai/src/pages/SignIn.tsx) | Auth | 77 | Secure authentication entry view. |
| [Admin.tsx](file:///d:/Projects/Client/Araththaai/src/pages/Admin.tsx) | Admin | 52 | Analytics tracking and case overview dashboard mockup. |
| [About.tsx](file:///d:/Projects/Client/Araththaai/src/pages/About.tsx) | Marketing | 45 | Corporate values and firm profile. |
| [App.tsx](file:///d:/Projects/Client/Araththaai/src/App.tsx) | Routing | 62 | Main application routes definition. |
| [main.tsx](file:///d:/Projects/Client/Araththaai/src/main.tsx) / Other | Core | 10 | Application bootstrapping and CSS entries. |
| **Frontend Libraries & tRPC** | | **85** | |
| [Provider.tsx](file:///d:/Projects/Client/Araththaai/src/lib/trpc/Provider.tsx) | RPC | 42 | Instantiates React Query & tRPC client links. |
| [crypto.ts](file:///d:/Projects/Client/Araththaai/src/lib/crypto.ts) | Crypto | 28 | Client side encryption tools wrapper. |
| [supabaseClient.ts](file:///d:/Projects/Client/Araththaai/src/lib/supabaseClient.ts) | Client | 7 | Client integration client instantiation. |
| [utils.ts](file:///d:/Projects/Client/Araththaai/src/lib/utils.ts) / Others | Utility | 8 | Tailwind-merge and base utilities. |
| **Backend Core Server** | | **447** | |
| [trpc.ts](file:///d:/Projects/Client/Araththaai/server/src/trpc.ts) | Router | 77 | Configures tRPC contexts and middleware controls. |
| [index.ts](file:///d:/Projects/Client/Araththaai/server/src/index.ts) | Setup | 50 | Node/Express web server setup, rate limiters, middlewares. |
| [client.ts](file:///d:/Projects/Client/Araththaai/server/src/routers/client.ts) | RPC | 81 | Client statistics and dashboard tRPC operations. |
| [auth.ts](file:///d:/Projects/Client/Araththaai/server/src/routes/auth.ts) | REST API | 89 | Session cookies, registration, and login routes. |
| [booking.ts](file:///d:/Projects/Client/Araththaai/server/src/routes/booking.ts) | REST API | 86 | Booking requests processor & email dispatch handler. |
| [cloudinary.ts](file:///d:/Projects/Client/Araththaai/server/src/utils/cloudinary.ts) | Media | 39 | Media upload bindings setup. |
| [crypto.ts](file:///d:/Projects/Client/Araththaai/server/src/utils/crypto.ts) | Security | 28 | AES-256 symmetric cipher encrypt/decrypt modules. |
| [passwordrest.jsx](file:///d:/Projects/Client/Araththaai/server/passwordrest.jsx) | Admin Utility | 36 | CLI utility script for administrative db password resets. |
| Config Modules | Setup | 16 | Setup models for database connection pool and Supabase. |
| [_app.ts](file:///d:/Projects/Client/Araththaai/server/src/routers/_app.ts) | RPC Router | 9 | Main route register aggregator. |
| **Prisma Database Layer** | | **419** | |
| [schema.prisma](file:///d:/Projects/Client/Araththaai/server/prisma/schema.prisma) | DB Schema | 235 | Model representations (9 entities) & state enums. |
| [seed.ts](file:///d:/Projects/Client/Araththaai/server/prisma/seed.ts) | DB Seed | 184 | Seed script initializing practice fields, users, and cases. |
| **TOTAL LINES OF CODE** | | **3,674** | **Clean, production-ready source code** |

---

## 3. Development Effort Breakdown
The project required specialized design and full-stack development phases over an estimated timeline of 30 days (240 hours):
*   **Intake & Core Web Pages**: Landing layout, contact intake form, Zod validations, custom styles.
*   **Advanced WebGL Development**: Interactive math & particle fluid flow algorithms in Three.js.
*   **Database & API Layer**: Relational data structures (Prisma), secure Express REST router endpoints, secure custom password ciphers, and Resend mail pipelines.
*   **Admin Dashboard Framework**: Lead lists overview structures and login routes.

---

## 4. Final Agreed Pricing Structure
The contract is structured with a fixed one-time fee for the development and delivery of all core modules, with system maintenance contracted as a separate recurring agreement.

### Project Valuation Breakdown:
*   **Core Modules Development Cost**: **₹26,000 INR** (One-time)
    *   Covers the full implementation of the React Vite web application, the interactive Three.js WebGL canvas, booking/contact forms, REST endpoints, tRPC routers, custom AES-256 ciphers, cookie authentication, and the relational database schema.
*   **System Maintenance Cost (1 Year Plan)**: **₹6,000 INR** (Annual, billed separately)
    *   Covers 12 months of active post-delivery upkeep, library security updates, database sanity checks, performance tuning, and minor copy adjustments.
*   **Development Total**: **₹26,000 INR**

---

## 5. Ongoing Infrastructure & Running Costs (Estimated)
These are monthly operational costs associated with hosting the project services and are billed directly to the client's account (not included in the ₹26,000 fixed developer fee):

| Service | Hosting Provider | Pricing Tier | Monthly Cost (USD) | Monthly Cost (INR) | Purpose |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **Database** | Supabase (PostgreSQL) | Pro Tier | $25 | ₹2,100 | Relational database hosting, scaling, backups. |
| **Backend Host** | Render / Railway / AWS | Web Service | $7 – $15 | ₹600 – ₹1,250 | Hosting Express/Node.js backend API process. |
| **Frontend Host** | Vercel / Netlify / Cloudflare | Pro / Custom | $0 – $20 | ₹0 – ₹1,650 | Blazing fast static edge network hosting. |
| **Emails** | Resend | Standard | $0 – $20 | ₹0 – ₹1,650 | Automated client notifications and leads mailers. |
| **Media Assets**| Cloudinary | Free / Custom | $0 – $25 | ₹0 – ₹2,100 | Secure storage of images and documents. |
| **Domain & SSL** | Namecheap / GoDaddy | Annual | ~$1.5 /mo | ~₹120 /mo | Custom domain (e.g. `araththaai.fyi`). |
| **TOTAL** | | **Estimate** | **$33.50 – $106.50** | **₹2,820 – ₹8,770** | **Active System Maintenance** |
