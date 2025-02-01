"use client";

import * as React from "react";

import {
  ChartSpline,
  CheckCheck,
  CircleDollarSign,
  ExternalLink,
  FolderKanban,
  Handshake,
  Home,
  Network,
  Settings,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { app_routes } from "@/routes/main";
import { ModeToggle } from "./ui/mode-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  useSidebar,
} from "./ui/sidebar";

const data = {
  navMain: [
    {
      title: app_routes.dashboard.overview.title,
      url: app_routes.dashboard.overview.main,
      icon: Home,
      isActive: true,
    },
    {
      title: app_routes.dashboard.agreements.title,
      url: app_routes.dashboard.agreements.main,
      icon: FolderKanban,
    },
  ],
  nav_secondary: [
    {
      title: "Statistics",
      url: "https://app.dbforest.org/sign-in",
      icon: ChartSpline,
      blank: "_blank",
    },
    {
      title: "Documents",
      url: "https://app2.dbforest.org/auth/sign-in",
      icon: ExternalLink,
      blank: "_blank",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar
      className="top-[--header-height]"
      variant="inset"
      collapsible="icon"
      {...props}
      onMouseEnter={() => toggleSidebar()}
      onMouseLeave={() => toggleSidebar()}
    >
      <SidebarContent>
        <div className="flex-auto">
          <NavMain items={data.navMain} />
        </div>

        <NavMain items={data.nav_secondary} />
      </SidebarContent>

      <SidebarFooter>
        <div className="block md:hidden">
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
