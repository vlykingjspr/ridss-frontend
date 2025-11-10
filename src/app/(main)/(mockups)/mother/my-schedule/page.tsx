"use client"

import Tab from "./_components/tab";
import { useState } from "react";
import CancelConfirmation from "./_components/cancel-confirmation";
import { useSearchParams } from "next/navigation";
import CancelImmunizationCard from "./_components/cancel-card";
import UpcomingImmunizationCard from "./_components/upcoming-card";
import { TypographyLarge } from "@/components/ui/typography";
import VerifyIllness from "./_components/verify-illness";

export default function Page() {
    const searchParams = useSearchParams();
    const tab = searchParams.get("filter") || "upcoming";

    const [open, setOpen] = useState(false)
    const [verify, setVerify] = useState(false)

    return (
        <div className="">
            <TypographyLarge>My Schedule</TypographyLarge>
            
            <Tab />

            <div className="space-y-3 mt-7">
                {tab === "today" && <UpcomingImmunizationCard isToday onCancel={setOpen} onAttend={setVerify} />}
                {tab === "upcoming" && <UpcomingImmunizationCard onCancel={setOpen} onAttend={setVerify} />}
                {tab === "canceled" && <CancelImmunizationCard isCancel />}
                {tab === "confirmed" && <CancelImmunizationCard />}
            </div>

            <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
            </div>

            <VerifyIllness open={verify} onClose={setVerify} />
            <CancelConfirmation open={open} onClose={setOpen} />
        </div>
    )
}