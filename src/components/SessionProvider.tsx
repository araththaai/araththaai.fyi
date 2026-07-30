import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  id: string;
  email: string;
  role: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Basic decode of JWT or fetch /api/auth/me
    // Since JWT is in a httpOnly cookie, we should ideally fetch /api/auth/me
    // Or if JWT is stored in localStorage we can decode it.
    // Let's mock the session for now. In a full implementation, you would hit an endpoint.
    const checkSession = async () => {
      try {
        // Just setting a mock user for now, or you can implement a /api/auth/me endpoint in Express.
        // For perfect preservation, TRPC handles auth via `protectedProcedure`. 
        // We will just let TRPC provide the auth state or use a simple fetch.
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
}

export const useSession = () => useContext(AuthContext);
