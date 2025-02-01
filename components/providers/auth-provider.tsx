"use client";

import { app_routes } from "@/routes/main";
import { usePathname, useRouter } from "next/navigation";

import { FC, createContext, useEffect } from "react";
import { useAccount } from "wagmi";

interface AuthProviderContextProps {
  obj: unknown;
}
interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthContext = createContext<AuthProviderContextProps>({ obj: {} });
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { isDisconnected, isConnected } = useAccount();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isDisconnected) {
      router.push(app_routes.root);
    }
    if (pathname === app_routes.root) {
      if (isConnected) {
        router.push(app_routes.dashboard.overview.main);
      }
    }
  }, [isDisconnected, isConnected, router, pathname]);
  return (
    <AuthContext.Provider value={{ obj: {} }}>{children}</AuthContext.Provider>
  );
};
