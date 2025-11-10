"use client";

import { ArkUITabButton, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
    tab: "registered" | "pending";
}
export default function BarangayRecordsTab({ tab }: Props) {
    const [active, setActive] = useState(tab);

    const router = useRouter();

    return (
        <ArkUITabButton
            activeValue={active}
            onValueChange={({ value }) => {
                router.push("?tab=" + value);
                setActive(value as typeof tab);
            }}
            className="gap-2"
        >
            <ArkUITabItem
                value="registered"
                className={cn(active === "registered" ? "text-primary-foreground" : "hover:text-foreground")}
            >
                <span className="relative z-10">Registered</span>
            </ArkUITabItem>
            <ArkUITabItem
                value="pending"
                className={cn(active === "pending" ? "text-primary-foreground" : "hover:text-foreground")}
            >
                <span className="relative z-10">Pending Registration</span>
            </ArkUITabItem>
        </ArkUITabButton>
    );
}
