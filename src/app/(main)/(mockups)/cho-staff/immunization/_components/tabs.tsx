"use client";

import { ArkUITabButton, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
    tab: "verify" | "summary";
}
export default function ImmunizationTab({ tab }: Props) {
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
                value="verify"
                className={cn(active === "verify" ? "text-primary-foreground" : "hover:text-foreground")}
            >
                <span className="relative z-10">Verify</span>
            </ArkUITabItem>
            <ArkUITabItem
                value="summary"
                className={cn(active === "summary" ? "text-primary-foreground" : "hover:text-foreground")}
            >
                <span className="relative z-10">Summary Report</span>
            </ArkUITabItem>
        </ArkUITabButton>
    );
}
