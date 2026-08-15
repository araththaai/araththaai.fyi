# Araththaai – AKM Associates & Legal Consultants
> Premium, modern, secure, and responsive Legal Practice & Consultancy Platform.

![Araththaai Logo](public/lgo.jpg)

---

## 1. Project Overview & Architecture
Araththaai is a custom-built, production-ready legal practice management and client marketing portal designed for law firms. The project utilizes a monorepo setup running a React frontend and an Express Node.js backend connected via tRPC.

### Core Modules Implemented:
*   **Public Portal**: Interactive pages detailing core practice areas (Civil, Criminal, Tax, HR&CE, Family, IPR, Corporate, Human Rights), about us, contact, and booking pages.
*   **WebGL Dynamic Canvas**: High-end visual fluid simulator `LiquidEther` built with Three.js and custom shaders.
*   **Intake Systems**: Intake booking form powered by React Hook Form & Zod validation.
*   **Email Engine**: Integration with the Resend API to handle transaction confirmations and admin leads mailings.
*   **Secure Administration**: Custom AES-256 symmetric cipher token wrapper paired with Express cookie-JWT authentication.
*   **Database Schema**: Modern relational database design (9 Prisma models) tracking Users, Case Details, Appointments, Invoices, Payments, and Leads.

---

## 2. Agreed Project Cost & Maintenance Structure
The project cost is structured on a fixed development fee model with a separate, optional recurring plan for active maintenance support.

### Cost Breakdown:

| Line Item | Description | Cost (INR) | Billing Type |
| :--- | :--- | :---: | :--- |
| **Core Modules Development** | Full development of frontend portal pages, Three.js WebGL canvas, form intake systems, Express API routes, custom security wrappers, tRPC bindings, and Prisma database schema. | **₹26,000** | One-time Payment |
| **System Maintenance & Support** | 12-month post-delivery active upkeep plan: bug fixing, package updates, performance audits, database monitoring, and minor copy adjustments. | **₹6,000** | Annual Recurring (Separate) |
| **DEVELOPMENT TOTAL** | **Complete delivery of all core application modules** | **₹26,000** | **Total Development Fee** |

> [!IMPORTANT]
> **Third-Party Infrastructure Fees**: Monthly operational expenses (like Supabase Database, Resend API key scaling, domain names, and hosting servers like Render/Railway) are billed directly to the client's credit card and are not included in the development or maintenance fees.

---

## 3. Technology Stack
*   **Frontend**: React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, Three.js (WebGL), React Router, React Hook Form, Zod.
*   **Backend**: Node.js, Express, tRPC (Type-safe API), Prisma ORM (PostgreSQL), JWT, BcryptJS, Cookie-Parser, Helmet, CORS.
*   **Services**: Supabase (DB Hosting), Cloudinary (Asset Storage), Resend (Transactional Emails).

---

## 4. Repository Structure
```text
├── server/                 # Express backend server
│   ├── prisma/             # Prisma database schema and migrations/seeds
│   ├── src/                # Backend TypeScript source files
│   │   ├── config/         # Prisma & Supabase client definitions
│   │   ├── routers/        # tRPC routes (client queries, dashboards)
│   │   ├── routes/         # Express REST API routes (auth, booking)
│   │   └── utils/          # Cloudinary uploads & custom cryptos
│   └── package.json        # Backend configuration
├── src/                    # React frontend application
│   ├── components/         # Shared layouts, UI, and LiquidEther canvas
│   ├── lib/                # tRPC and Supabase clients, crypto utils
│   ├── pages/              # Portal pages (Home, About, Services, Book, Admin)
│   └── App.tsx             # Main routing registry
├── package.json            # Monorepo setup scripts
└── tsconfig.json           # Global TypeScript rules
```

---

## 5. Getting Started

### Prerequisites
*   Node.js (v18 or higher)
*   NPM or Yarn
*   A running PostgreSQL instance (or Supabase URL)

### Installation & Run
1.  **Clone the Repository** and navigate to the project directory.
2.  **Environment Variables**:
    Create a `.env` file in the root directory based on `.env.example`:
    ```env
    DATABASE_URL="postgresql://..."
    NEXTAUTH_SECRET="your_jwt_secret"
    RESEND_API_KEY="re_..."
    CLOUDINARY_URL="cloudinary://..."
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Run migrations and seed the database**:
    ```bash
    cd server
    npx prisma migrate dev
    npx prisma db seed
    cd ..
    ```
5.  **Start development server** (Frontend + Backend concurrently):
    ```bash
    npm run dev
    ```
    *   Frontend URL: `http://localhost:5173`
    *   Backend API Port: `http://localhost:3000`