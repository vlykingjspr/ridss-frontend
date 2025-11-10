"use client";

import { useRouter } from "next/navigation";
import { ArkUITabButton, ArkUITabItem } from "@/components/ark-ui-tab";
import { cn } from "@/lib/utils";

interface Props {
    tab: "attendance" | "queue" | "summary";
}
export default function VaccinationTabs({ tab }: Props) {
    const router = useRouter();

    return (
        <ArkUITabButton
            activeValue={tab}
            onValueChange={({ value }) => {
                router.push("?tab=" + value);
            }}
            className="relative w-fit gap-3"
        >
            <ArkUITabItem value={"attendance"} className={cn("h-10 px-8 cursor-pointer", tab == "attendance" ? "text-primary-foreground" : "hover:text-foreground")}>
                <div className="relative z-10">Attendance</div>
            </ArkUITabItem>
            {/* <ArkUITabItem value={"queue"} className={cn("h-10 px-8 cursor-pointer", tab == "queue" ? "text-primary-foreground" : "hover:text-foreground")}>
                <div className="relative z-10">Queue</div>
            </ArkUITabItem> */}
            <ArkUITabItem value={"summary"} className={cn("h-10 px-8 cursor-pointer", tab == "summary" ? "text-primary-foreground" : "hover:text-foreground")}>
                <div className="relative z-10">Summary</div>
            </ArkUITabItem>
        </ArkUITabButton>
    );
}
