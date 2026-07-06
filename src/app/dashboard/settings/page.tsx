"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { User, Mail, Shield, Building } from "lucide-react";

export default function SettingsPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
      <div className="h-64 bg-gray-200 rounded-lg max-w-2xl"></div>
    </div>;
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Account Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your profile information and preferences.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
          <p className="text-sm text-gray-500">Update your account's profile information and email address.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <User className="h-4 w-4 text-gray-400" /> Full Name
              </label>
              <input 
                type="text" 
                defaultValue={session?.user?.name || ""}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
              />
              <p className="text-xs text-gray-500">To change your name, please contact administration.</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" /> Email Address
              </label>
              <input 
                type="email" 
                defaultValue={session?.user?.email || ""}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
              />
            </div>
          </div>
          
          <div className="space-y-2 pt-4 border-t border-gray-100">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Shield className="h-4 w-4 text-gray-400" /> Account Role
            </label>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary capitalize">
              {(session?.user as any)?.role?.toLowerCase() || "Client"}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mt-6">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 text-red-600">Danger Zone</h2>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
}
