import type { Metadata } from "next";
import "./globals.css";

import "@rainbow-me/rainbowkit/styles.css";
//import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Toaster } from "@/components/ui/toaster";
import { headers } from "next/headers";
import { Providers } from "@/components/providers/main";
import Link from "next/link";
//import { TypographyH3 } from "@/components/ui/typography";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { TypographyH3 } from "@/components/ui/typography";

const HEADER_HEIGHT = "4rem";
export const metadata: Metadata = {
  title: "All Mighty Robot",
  description: "The all mighty robot welcoming you",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const head = await headers();
  const cookies = head.get("cookie");
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`overflow-hidden`}
        style={
          {
            "--header-height": HEADER_HEIGHT,
          } as React.CSSProperties
        }
      >
        <Providers cookie={cookies ?? ""}>
          <header className="flex h-[--header-height] shrink-0 items-center gap-2 border-b px-4">
            <div>
              <Link href="/" className="flex gap-2">
                {/*
                   *<Image
                    src="/global/company_logo.svg"
                    alt="db forest logo"
                    height={30}
                    width={30}
                  />
                   */}
                <TypographyH3>AI AGENTS</TypographyH3>
              </Link>
            </div>
            <div className="flex flex-auto items-center gap-1 md:gap-8"></div>
            <div className="hidden md:block">
              <ModeToggle />
            </div>
            <ConnectButton />
          </header>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
