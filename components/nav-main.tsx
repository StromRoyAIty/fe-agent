"use client";

import { type LucideIcon } from "lucide-react";

import { HTMLAttributeAnchorTarget } from "react";

import Link from "next/link";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    blank?: HTMLAttributeAnchorTarget | undefined;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { isMobile, setOpenMobile } = useSidebar();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <div key={item.url}>
            {isMobile ? (
              <SidebarMenuItem onClick={() => setOpenMobile(false)}>
                <Link href={item.url}>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ) : (
              <SidebarMenuItem>
                <Link
                  href={item.url}
                  target={item.blank ? item.blank : undefined}
                >
                  <SidebarMenuButton
                    tooltip={item.title}
                    variant="outline"
                    size="sm"
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            )}
          </div>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
