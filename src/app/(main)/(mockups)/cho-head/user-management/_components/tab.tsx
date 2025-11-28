"use client";

import { useRouter } from "next/navigation";
import { ArkUITabButton, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";

interface Props {
    tab: "active" | "inactive";
}
export default function UsersTab({ tab }: Props) {
    const router = useRouter();

    return (
        <ArkUITabButton
            activeValue={tab}
            onValueChange={({ value }) => {
                router.push("?tab=" + value);
            }}
            className="relative w-fit gap-3"
        >
            <ArkUITabItem value="active" className={cn("h-10 px-5 cursor-pointer", tab === "active" ? "text-primary-foreground" : "hover:text-foreground")}>
                <span className="relative z-10">Active</span>
            </ArkUITabItem>
            <ArkUITabItem value="inactive" className={cn("h-10 px-5 cursor-pointer", tab === "inactive" ? "text-primary-foreground" : "hover:text-foreground")}>
                <span className="relative z-10">Inactive</span>
            </ArkUITabItem>
        </ArkUITabButton>
    );
}
