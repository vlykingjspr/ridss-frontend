import InventoryTabs from "./_components/tabs";
import Transaction from "./_components/transaction";
import InventoryStocks from "./_components/inventory";
import InventoryRequest from "./_components/requests";

import { ChevronRight } from "lucide-react";
import { TypographyLarge } from "@/components/ui/typography";

interface Props {
    searchParams: Promise<{ tab: 'stocks' | 'request' | 'transaction' }>
}
export default async function Page({ searchParams }: Props) {
    const sp = await searchParams
    const tab = sp.tab
    
    return (
        <div className="">
            <div className="flex items-center gap-1">
                <TypographyLarge>Inventory</TypographyLarge>
                <ChevronRight className="size-4" />
                <TypographyLarge className="capitalize">{tab}</TypographyLarge>
            </div>
            
            <div className="mt-6">
                <div className="">
                    <InventoryTabs tab={tab} />
                </div>

                {tab === 'stocks' && (<InventoryStocks />)}
                {tab === 'request' && (<InventoryRequest />)}
                {tab === 'transaction' && (<Transaction />)}
            </div>
        </div>
    )
}