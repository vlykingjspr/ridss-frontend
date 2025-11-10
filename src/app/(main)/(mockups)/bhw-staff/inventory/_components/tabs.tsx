"use client";

import { useRouter } from "next/navigation";
import { ArkUITabButton, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";

interface Props {
    tab: 'stocks' | 'request' | 'transaction';
}
export default function InventoryTabs({ tab }: Props) {
    const router = useRouter();

    return (
        <ArkUITabButton
            activeValue={tab}
            onValueChange={({ value }) => {
                router.push("?tab=" + value);
            }}
            className="relative w-fit gap-3"
        >
            <ArkUITabItem value={"stocks"} className={cn("h-10 px-8 cursor-pointer", tab == "stocks" ? "text-primary-foreground" : "hover:text-foreground")}>
                <div className="relative z-10">Stocks</div>
            </ArkUITabItem>
            <ArkUITabItem value={"request"} className={cn("h-10 px-8 cursor-pointer", tab == "request" ? "text-primary-foreground" : "hover:text-foreground")}>
                <div className="relative z-10">Requests</div>
            </ArkUITabItem>
            <ArkUITabItem value={"transaction"} className={cn("h-10 px-8 cursor-pointer", tab == "transaction" ? "text-primary-foreground" : "hover:text-foreground")}>
                <div className="relative z-10">Transaction</div>
            </ArkUITabItem>
        </ArkUITabButton>
    );
}
