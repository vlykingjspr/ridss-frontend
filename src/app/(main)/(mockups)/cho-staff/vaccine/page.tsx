import { TypographyLarge } from "@/components/ui/typography";
import VaccineTab from "./_components/tab";
import Requests from "./_components/requests";
import Inventory from "./_components/inventory";
import VaccineItems from "./_components/Items";
import Issuances from "./_components/issuances";
import { ChevronRight } from "lucide-react";

interface Props {
    searchParams: Promise<{ tab: 'inventory' | 'request' | 'issuance' | 'items' }>
}
export default async function Page({ searchParams }: Props) {
    const sp = await searchParams
    const tab = sp.tab

    return (
        <div className="">
            <div className="flex items-center gap-1.5">
                <TypographyLarge>Vaccine</TypographyLarge>
                <ChevronRight className="size-4" />
                <TypographyLarge className="capitalize">{tab==='items' && "Vaccine"} {tab}</TypographyLarge>
            </div>

            <div className="mt-6">
                <div className="">
                    <VaccineTab tab={tab} />
                </div>

                <div className="mt-6">
                    {tab === 'request' && (<Requests />)}
                    {tab === 'inventory' && (<Inventory />)}
                    {tab === 'items' && (<VaccineItems />)}
                    {tab === 'issuance' && (<Issuances />)}
                </div>
            </div>
        </div>
    )
}