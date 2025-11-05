"use client";

import Link from "next/link";

import { Settings, CircleHelp, Search, Database, ClipboardList, File, Command, ChevronDown, UserRound } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { APP_CONFIG } from "@/config/app-config";
import { ridsUsers, rootUser } from "@/data/users";
import { sidebarItems } from "@/navigation/sidebar/sidebar-items";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { useRidsUserStore } from "@/stores/user";
import { useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const data = {
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
        {
            title: "Get Help",
            url: "#",
            icon: CircleHelp,
        },
        {
            title: "Search",
            url: "#",
            icon: Search,
        },
    ],
    documents: [
        {
            name: "Data Library",
            url: "#",
            icon: Database,
        },
        {
            name: "Reports",
            url: "#",
            icon: ClipboardList,
        },
        {
            name: "Word Assistant",
            url: "#",
            icon: File,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const selectedUser = useRidsUserStore((state) => state.selected)
    const setSelectedUser = useRidsUserStore((state) => state.setSelected)
    const isCollapsed = useSidebar().state
    const pathname = usePathname()

    const navigationTabs = useMemo(() => {
        if(selectedUser) {
            return sidebarItems.filter((tabs) => tabs.id === selectedUser.id)
        }
        return []
    }, [selectedUser])

    useEffect(() => {
        if(!selectedUser) {
            const activeUser = ridsUsers.find((u) => pathname.startsWith('/'+u.role))
            if(activeUser)
                setSelectedUser(activeUser)
        }
    }, [selectedUser])

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Menubar className="border-none shadow-none p-0 h-fit">
                            <MenubarMenu>
                                <MenubarTrigger asChild>
                                    <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                                        {/* <Link href="/dashboard/default">
                                            <Command />
                                            <span className="text-base font-semibold">{APP_CONFIG.name}</span>
                                        </Link> */}
                                        <Button variant={'outline'} className="h-10">
                                            <UserRound/>
                                            <span className="mr-auto" hidden={isCollapsed === 'collapsed'}>{selectedUser?.name}</span>
                                            <ChevronDown className={cn(isCollapsed === 'collapsed' && 'hidden')} />
                                        </Button>
                                    </SidebarMenuButton>
                                </MenubarTrigger>
                                <MenubarContent alignOffset={0} sideOffset={1.5}>
                                    {ridsUsers.map((u, index) => (
                                        <Link key={index} href={`/${u.role}/dashboard`}>
                                            <MenubarItem onClick={() => {
                                                setSelectedUser?.(u)
                                            }} className={cn("flex-col gap-0 items-start", selectedUser?.id === u.id && "!bg-primary/5")}>
                                                <div>{u.name}</div>
                                                <div className="text-xs text-muted-foreground">{u.role}</div>
                                            </MenubarItem>
                                        </Link>
                                    ))}
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="pb-10">
                <NavMain items={navigationTabs} />
                {/* <NavDocuments items={data.documents} /> */}
                {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
            </SidebarContent>
            {/* <SidebarFooter>
                <NavUser user={rootUser} />
            </SidebarFooter> */}
        </Sidebar>
    );
}
