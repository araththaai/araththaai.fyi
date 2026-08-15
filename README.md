# Araththaai – AKM Associates & Legal Consultants
> Premium, modern, secure, and responsive Legal Practice & Consultancy Platform.

![Araththaai Logo](public/lgo.jpg)

---

## 1. Project Overview & Architecture
Araththaai is a custom-built, production-ready legal practice marketing portal and client intake system designed for law firms. The project is a React single-page application powered by Supabase for authentication and database operations.

### Core Modules Implemented:
*   **Public Portal**: Interactive pages detailing core practice areas (Civil, Criminal, Tax, HR&CE, Family, IPR, Corporate, Human Rights), about us, contact, and booking pages.
*   **WebGL Dynamic Canvas**: High-end visual fluid simulator `LiquidEther` built with Three.js and custom shaders.
*   **Intake Systems**: Intake booking form powered by React Hook Form & Zod validation, stored directly in Supabase.
*   **Authentication**: Supabase Auth for admin sign-in.
*   **Database**: Supabase (PostgreSQL) for storing consultation bookings and user data.

---

## 2. Technology Stack
*   **Frontend**: React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, Three.js (WebGL), React Router, React Hook Form, Zod.
*   **Backend**: Supabase (Auth, Database, Storage).

---

## 3. Repository Structure
```text
├── public/                 # Static assets (logo, etc.)
├── src/                    # React frontend application
│   ├── components/         # Shared layouts, UI, and LiquidEther canvas
│   ├── lib/                # Supabase client and utilities
│   ├── pages/              # Portal pages (Home, About, Services, Book, Admin, SignIn)
│   └── App.tsx             # Main routing registry
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 4. Getting Started

### Prerequisites
*   Node.js (v18 or higher)
*   NPM or Yarn
*   A Supabase project

### Installation & Run
1.  **Clone the Repository** and navigate to the project directory.
2.  **Environment Variables**:
    Create a `.env` file in the root directory based on `.env.example`:
    ```env
    VITE_SUPABASE_URL="https://your-project.supabase.co"
    VITE_SUPABASE_ANON_KEY="your-anon-key"
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start development server**:
    ```bash
    npm run dev
    ```
    *   Frontend URL: `http://localhost:5173`