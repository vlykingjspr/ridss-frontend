"use client";
import { ArkUITabButton, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function Tab() {
    const searchParam = useSearchParams();
    const activeTab = searchParam.get("tab")||"all";

    const router = useRouter();

    return (
        <ArkUITabButton
            activeValue={activeTab}
            onValueChange={({ value }) => {
                router.push('?tab='+value);
            }}
            className="gap-3 w-fit relative"
        >
            <ArkUITabItem id="ms-nav" value={"all"} className={cn("h-10 cursor-pointer", activeTab == "all" && "text-primary-foreground")}>
                <div className="relative z-10">All</div>
            </ArkUITabItem>
            <ArkUITabItem id="ms-nav" value={"pending"} className={cn("h-10 cursor-pointer", activeTab == "pending" && "text-primary-foreground")}>
                <div className="relative z-10">Pending</div>
            </ArkUITabItem>
            {/* <ArkUITabItem id="ms-nav" value={"disapproved"} className={cn("h-10 cursor-pointer", activeTab == "disapproved" && "text-primary-foreground")}>
                <div className="relative z-10">Disapproved</div>
            </ArkUITabItem> */}
        </ArkUITabButton>
    );
}
