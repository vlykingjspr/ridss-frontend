import { ChevronRight } from "lucide-react";
import VaccineAttendance from "./_components/attendance";
import VaccineRequest from "../inventory/_components/requests";
import VaccinationTabs from "./_components/tabs";

import { TypographyLarge } from "@/components/ui/typography";
import VaccinationQueue from "./_components/queue";
import Summary from "./_components/summary";

interface Props {
    searchParams: Promise<{ tab: 'attendance'|'queue'|'summary' }>
}
export default async function Page({ searchParams }: Props) {
    const sp = await searchParams
    const tab = sp.tab

    return (
        <div className="">
            <TypographyLarge className="flex items-center gap-1">Vaccination <ChevronRight className="size-4.5" /> <span className="capitalize">{tab}</span></TypographyLarge>

            <div className="mt-6">
                <VaccinationTabs tab={tab} />

                <div className="">
                    {tab === 'attendance' && (
                        <VaccineAttendance />
                    )}
                    {tab === 'queue' && (
                        <VaccinationQueue />
                    )}
                    {tab === 'summary' && (
                        <Summary />
                    )}
                </div>
            </div>
        </div>
    )
}