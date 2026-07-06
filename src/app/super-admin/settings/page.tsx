"use client";

import { Settings, Shield, Key, AlertTriangle, Save } from "lucide-react";

export default function DeveloperSettingsPage() {
  return (
    <div className="space-y-6 font-mono">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <Settings className="h-6 w-6 text-gray-400" /> Developer Settings
        </h1>
        <p className="text-sm text-gray-500 mt-1">Platform configuration and security credentials.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-800 bg-gray-950/50 flex items-center gap-2">
              <Key className="h-4 w-4 text-gray-400" />
              <h2 className="text-sm font-bold text-gray-300 uppercase tracking-wider">API Keys & Webhooks</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider">Supabase JWT Secret</label>
                <div className="flex gap-2">
                  <input 
                    type="password" 
                    value="************************************************"
                    disabled
                    className="flex-1 bg-gray-950 border border-gray-800 rounded px-3 py-2 text-gray-500 font-mono text-sm"
                  />
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded text-sm hover:bg-gray-700 transition-colors">Rotate</button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider">Cloudinary API Secret</label>
                <div className="flex gap-2">
                  <input 
                    type="password" 
                    value="************************"
                    disabled
                    className="flex-1 bg-gray-950 border border-gray-800 rounded px-3 py-2 text-gray-500 font-mono text-sm"
                  />
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded text-sm hover:bg-gray-700 transition-colors">Rotate</button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider">Resend API Key</label>
                <div className="flex gap-2">
                  <input 
                    type="password" 
                    value="re_*************************"
                    disabled
                    className="flex-1 bg-gray-950 border border-gray-800 rounded px-3 py-2 text-gray-500 font-mono text-sm"
                  />
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded text-sm hover:bg-gray-700 transition-colors">Rotate</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-800 bg-gray-950/50 flex items-center gap-2">
              <Shield className="h-4 w-4 text-gray-400" />
              <h2 className="text-sm font-bold text-gray-300 uppercase tracking-wider">Platform Security</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-800">
                <div>
                  <p className="text-gray-300 text-sm">Require MFA for Admins</p>
                  <p className="text-gray-500 text-xs mt-1">Enforce two-factor authentication for all Admin accounts.</p>
                </div>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle1" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-green-500 bg-green-500" style={{ right: 0 }} />
                  <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-6 rounded-full bg-green-500 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-800">
                <div>
                  <p className="text-gray-300 text-sm">Maintenance Mode</p>
                  <p className="text-gray-500 text-xs mt-1">Disable access for non-admin users.</p>
                </div>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle2" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-500 border-4 appearance-none cursor-pointer border-gray-700" />
                  <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-red-950/30 border border-red-900/50 rounded-lg overflow-hidden">
            <div className="px-5 py-4 border-b border-red-900/50 bg-red-950/50 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <h2 className="text-sm font-bold text-red-500 uppercase tracking-wider">Danger Zone</h2>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-400 text-xs">These actions will directly impact the production environment. Proceed with extreme caution.</p>
              
              <button className="w-full text-left px-4 py-3 bg-gray-900 border border-red-900/30 text-red-400 rounded hover:bg-red-950/50 transition-colors text-sm">
                Clear Application Cache
              </button>
              
              <button className="w-full text-left px-4 py-3 bg-gray-900 border border-red-900/30 text-red-400 rounded hover:bg-red-950/50 transition-colors text-sm">
                Force Terminate All Sessions
              </button>
              
              <button className="w-full text-left px-4 py-3 bg-red-900/20 border border-red-500/50 text-red-500 rounded hover:bg-red-900/40 transition-colors text-sm font-bold">
                Wipe Database (Factory Reset)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
