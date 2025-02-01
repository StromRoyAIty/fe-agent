"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { hashFn } from "wagmi/query";
import { ReactNode, useState } from "react";
import { cookieToInitialState, WagmiProvider } from "wagmi";
import { darkTheme, RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { wagmiConfig } from "@/web3/config";
import { AuthProvider } from "./auth-provider";

interface Props {
  children: ReactNode;
  cookie: string;
}

export function Providers({ children, cookie }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30 * 1000, // 30 secs
            gcTime: 60 * 1000, // 60 secs
            queryKeyHashFn: hashFn,
          },
        },
      }),
  );

  const initialState = cookieToInitialState(wagmiConfig, cookie);
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RainbowKitProvider
            theme={{
              lightMode: lightTheme(),
              darkMode: darkTheme(),
            }}
          >
            <NextThemesProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              enableColorScheme
            >
              {children}
            </NextThemesProvider>
          </RainbowKitProvider>
        </AuthProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
