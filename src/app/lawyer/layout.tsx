"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { CldImage } from "next-cloudinary";
import { 
  LayoutDashboard, 
  Briefcase, 
  Calendar, 
  Users,
  Settings, 
  LogOut,
  Menu,
  X,
  Scale
} from "lucide-react";

export default function LawyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const navItems = [
    { name: "Overview", href: "/lawyer", icon: LayoutDashboard },
    { name: "Assigned Cases", href: "/lawyer/cases", icon: Briefcase },
    { name: "My Schedule", href: "/lawyer/schedule", icon: Calendar },
    { name: "My Clients", href: "/lawyer/clients", icon: Users },
    { name: "Settings", href: "/lawyer/settings", icon: Settings },
  ];

  return (
    <div className="h-screen overflow-hidden bg-gray-50 flex">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary text-primary-foreground transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="h-20 flex items-center px-6 border-b border-primary-foreground/10">
            <Link href="/" className="flex items-center gap-2 group w-full">
              <div className="relative h-10 w-10 flex-shrink-0 bg-white/10 rounded p-1">
                <CldImage src="araththaai_k0wo2e" alt="Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-tight text-white">Araththaai</span>
                <span className="text-[0.55rem] uppercase tracking-widest text-secondary flex items-center gap-1">
                  <Scale className="h-3 w-3" /> Legal Team
                </span>
              </div>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-primary-foreground/70">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-primary-foreground/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-primary-foreground/10">
            <button onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg font-medium text-red-300 hover:bg-red-400/10 transition-colors">
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-500 lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{session?.user?.name || "Lawyer"}</p>
                <p className="text-xs text-gray-500 capitalize">{(session?.user as any)?.role?.toLowerCase().replace("_", " ") || "Lawyer"}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold uppercase">
                {session?.user?.name ? session.user.name.substring(0, 2) : "L"}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
