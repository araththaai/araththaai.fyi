"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { CldImage } from "next-cloudinary";
import { 
  Terminal,
  Activity, 
  Database, 
  Server,
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const navItems = [
    { name: "System Health", href: "/super-admin", icon: Activity },
    { name: "Database Logs", href: "/super-admin/database", icon: Database },
    { name: "Data Explorer", href: "/super-admin/data", icon: Terminal },
    { name: "Server Metrics", href: "/super-admin/server", icon: Server },
    { name: "Developer Settings", href: "/super-admin/settings", icon: Settings },
  ];

  return (
    <div className="h-screen overflow-hidden bg-gray-950 flex">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/80 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-black border-r border-gray-800 text-gray-300 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="h-20 flex items-center px-6 border-b border-gray-800">
            <Link href="/" className="flex items-center gap-2 group w-full">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-tight text-white flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-green-400" /> AustralAI
                </span>
                <span className="text-[0.6rem] uppercase tracking-widest text-green-500 font-mono mt-1">
                  Developer Portal
                </span>
              </div>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto font-mono text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-md transition-colors ${
                    isActive
                      ? "bg-gray-900 text-green-400 border-l-2 border-green-400"
                      : "text-gray-400 hover:bg-gray-900 hover:text-gray-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-800">
            <button onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center gap-3 px-3 py-2.5 w-full rounded-md font-mono text-sm text-red-500 hover:bg-gray-900 transition-colors">
              <LogOut className="h-4 w-4" />
              Terminate Session
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-gray-950 border-b border-gray-800 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-400 lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block font-mono text-sm">
                <p className="text-gray-300">Root Access</p>
                <p className="text-xs text-green-500">{session?.user?.email}</p>
              </div>
              <div className="h-10 w-10 rounded bg-gray-900 border border-gray-700 flex items-center justify-center text-green-400 font-mono font-bold">
                SU
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-950 p-4 sm:p-6 lg:p-8 text-gray-300">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
