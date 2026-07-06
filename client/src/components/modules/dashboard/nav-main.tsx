"use client"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname, useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ReactNode
  }[]
}) {
  const router = useRouter();
  const path = usePathname().split('/').filter(Boolean);
  const pathname = path?.[path.length - 1];

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <Separator />
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} onClick={() => router.push(`/dashboard/${item.url}`)}>
              <SidebarMenuButton isActive={pathname.toLocaleLowerCase() === item.title.toLocaleLowerCase() ? true : false} tooltip={item.title}>
                {item.icon}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
};
