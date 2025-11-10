"use client"

import { ArkUITabButton, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
    tab: 'inventory' | 'request' | 'issuance' | 'items'
}
export default function VaccineTab({ tab }: Props) {
    const [active, setActive] = useState(tab)
    
    const router = useRouter()


    return (
        <ArkUITabButton activeValue={active} onValueChange={({ value }) => {
            router.push('?tab='+value)
            setActive(value as typeof tab)
        }} className="gap-2">
            <ArkUITabItem value="inventory" className={cn(active === "inventory" ? "text-primary-foreground" : "hover:text-foreground")}>
                <span className="relative z-10">Inventory</span>
            </ArkUITabItem>
            <ArkUITabItem value="request" className={cn(active === "request" ? "text-primary-foreground" : "hover:text-foreground")}>
                <span className="relative z-10">Request</span>
            </ArkUITabItem>
            <ArkUITabItem value="items" className={cn(active === "items" ? "text-primary-foreground" : "hover:text-foreground")}>
                <span className="relative z-10">Vaccine Items</span>
            </ArkUITabItem>
            <ArkUITabItem value="issuance" className={cn(active === "issuance" ? "text-primary-foreground" : "hover:text-foreground")}>
                <span className="relative z-10">Issuance</span>
            </ArkUITabItem>
        </ArkUITabButton>
    )
}