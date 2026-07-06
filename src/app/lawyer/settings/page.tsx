"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { User, Bell, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { updatePassword } from "./actions";

export default function LawyerSettingsPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("profile");
  
  // Password State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  const handlePasswordUpdate = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      import('sweetalert2').then(Swal => {
        Swal.default.fire({
          title: 'Error',
          text: 'Please fill in all password fields.',
          icon: 'error',
          confirmButtonColor: '#0B132B'
        });
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      import('sweetalert2').then(Swal => {
        Swal.default.fire({
          title: 'Mismatch',
          text: 'New password and confirm password do not match.',
          icon: 'error',
          confirmButtonColor: '#0B132B'
        });
      });
      return;
    }

    if (newPassword.length < 6) {
      import('sweetalert2').then(Swal => {
        Swal.default.fire({
          title: 'Invalid',
          text: 'New password must be at least 6 characters long.',
          icon: 'error',
          confirmButtonColor: '#0B132B'
        });
      });
      return;
    }

    setIsUpdatingPassword(true);
    try {
      const res = await updatePassword(currentPassword, newPassword);
      if (res.success) {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        import('sweetalert2').then(Swal => {
          Swal.default.fire({
            title: 'Success!',
            text: 'Password updated securely.',
            icon: 'success',
            confirmButtonColor: '#0B132B'
          });
        });
      } else {
        import('sweetalert2').then(Swal => {
          Swal.default.fire({
            title: 'Update Failed',
            text: res.error || 'Failed to update password.',
            icon: 'error',
            confirmButtonColor: '#0B132B'
          });
        });
      }
    } catch (e) {
      import('sweetalert2').then(Swal => {
        Swal.default.fire({
          title: 'Error',
          text: 'An unexpected error occurred.',
          icon: 'error',
          confirmButtonColor: '#0B132B'
        });
      });
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your professional profile and account preferences.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50/50">
            <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto">
              <button 
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md w-full text-left transition-colors ${activeTab === 'profile' ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                <User className="h-4 w-4" /> Profile
              </button>
              <button 
                onClick={() => setActiveTab("notifications")}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md w-full text-left transition-colors ${activeTab === 'notifications' ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                <Bell className="h-4 w-4" /> Notifications
              </button>
              <button 
                onClick={() => setActiveTab("security")}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md w-full text-left transition-colors ${activeTab === 'security' ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                <Lock className="h-4 w-4" /> Security
              </button>
            </nav>
          </div>
          
          <div className="col-span-3 p-6 sm:p-8 space-y-8">
            {activeTab === "profile" && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 mb-4">Professional Profile</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" defaultValue={session?.user?.name || ""} className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" defaultValue={session?.user?.email || ""} className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-gray-50 text-gray-500" disabled />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role Designation</label>
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-700">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="capitalize">{(session?.user as any)?.role?.replace('_', ' ').toLowerCase() || 'Lawyer'}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                    <input type="text" placeholder="e.g. Corporate Law, Real Estate" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Professional Bio</label>
                    <textarea rows={4} placeholder="Brief description of your experience and expertise..." className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">New Case Assignments</h4>
                      <p className="text-xs text-gray-500">Receive email alerts when you are assigned to a new case.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Client Messages</h4>
                      <p className="text-xs text-gray-500">Get notified when a client sends a secure message.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Daily Digest</h4>
                      <p className="text-xs text-gray-500">Receive a daily summary of upcoming meetings and tasks.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 mb-4">Security Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full sm:w-2/3 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full sm:w-2/3 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full sm:w-2/3 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    />
                  </div>
                  <div className="pt-2">
                    <Button 
                      onClick={handlePasswordUpdate} 
                      disabled={isUpdatingPassword}
                      className="bg-primary text-primary-foreground"
                    >
                      {isUpdatingPassword ? "Updating..." : "Update Password"}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== "security" && (
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <Button variant="outline">Cancel</Button>
                <Button onClick={() => {
                  import('sweetalert2').then(Swal => {
                    Swal.default.fire({
                      title: 'Settings Saved',
                      text: 'Your preferences have been updated successfully!',
                      icon: 'success',
                      confirmButtonColor: '#0B132B'
                    });
                  });
                }} className="bg-primary text-primary-foreground hover:bg-primary/90">Save Changes</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
