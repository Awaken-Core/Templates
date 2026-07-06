"use client"

import * as React from "react"

import { NavMain } from "@/components/modules/dashboard/nav-main"
import { NavSecondary } from "@/components/modules/dashboard/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { Settings05Icon, HelpCircleIcon, SearchIcon, CommandIcon, CircleQuestionMarkIcon, PowerServiceIcon, WorkIcon, UserIcon, ArtboardToolIcon, Cards02Icon, Building02Icon, ContactIcon, DocumentValidationIcon } from "@hugeicons/core-free-icons"
import Link from "next/link"

const data = {
  navMain: [
    {
      title: "Landing",
      url: "/landing",
      icon: (
        <HugeiconsIcon icon={ArtboardToolIcon} strokeWidth={2} />
      ),
    },
    {
      title: "Authentication",
      url: "/authentication",
      icon: (
        <HugeiconsIcon icon={DocumentValidationIcon} strokeWidth={2} />
      ),
    },
    {
      title: "About",
      url: "/about",
      icon: (
        <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
      ),
    },
    {
      title: "Demo",
      url: "/demo",
      icon: (
        <HugeiconsIcon icon={WorkIcon} strokeWidth={2} />
      ),
    },
    {
      title: "Service",
      url: "/service",
      icon: (
        <HugeiconsIcon icon={PowerServiceIcon} strokeWidth={2} />
      ),
    },
    {
      title: "Faq",
      url: "/faq",
      icon: (
        <HugeiconsIcon icon={CircleQuestionMarkIcon} strokeWidth={2} />
      )
    },
    {
      title: "Company",
      url: "/company",
      icon: (
        <HugeiconsIcon icon={Building02Icon} strokeWidth={2} />
      ),
    },
    {
      title: "Testimonial",
      url: "/testimonial",
      icon: (
        <HugeiconsIcon icon={Cards02Icon} strokeWidth={2} />
      ),
    },
    {
      title: "Footer",
      url: "/footer",
      icon: (
        <HugeiconsIcon icon={ContactIcon} strokeWidth={2} />
      ),
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: (
        <HugeiconsIcon icon={Settings05Icon} strokeWidth={2} />
      ),
    },
    {
      title: "Get Help",
      url: "#",
      icon: (
        <HugeiconsIcon icon={HelpCircleIcon} strokeWidth={2} />
      ),
    },
    {
      title: "Search",
      url: "#",
      icon: (
        <HugeiconsIcon icon={SearchIcon} strokeWidth={2} />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link href="/">
                <HugeiconsIcon icon={CommandIcon} strokeWidth={2} className="size-5!" />
                <span className="text-base font-semibold tracking-[-0.3px]">Awaken Templates</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={user!} /> */}
      </SidebarFooter>
    </Sidebar>
  )
}