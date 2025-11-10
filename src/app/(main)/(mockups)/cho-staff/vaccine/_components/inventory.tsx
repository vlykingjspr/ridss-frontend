import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographySmall } from "@/components/ui/typography";
import AddStock from "./add-stock";

export default function Inventory() {
    return (
        <div className="mt-6">
            <Card className="shadow-xs rounded-md gap-0 p-0 border-none overflow-hidden">
                <div className="h-12 bg-primary text-primary-foreground border border-primary rounded-t-[inherit] grid grid-cols-6 items-center [&>div]:px-4">
                    <div className=""> <TypographySmall>Batch</TypographySmall> </div>
                    <div className="col-span-2"> <TypographySmall>Vaccine Name</TypographySmall> </div>
                    <div className=""> <TypographySmall>Vials</TypographySmall> </div>
                    <div className=""> <TypographySmall>Expiration</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>Action</TypographySmall> </div>
                </div>
                <div className="rounded-b-[inherit] border border-border border-t-0 divide-y divide-border">
                    {stocks.map((stock) => (
                        <div key={stock.id} className="h-12 grid grid-cols-6 items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>{stock.batch}</TypographySmall> </div>
                            <div className="col-span-2"> <TypographySmall>{stock.name}</TypographySmall> </div>
                            <div className=""> <TypographySmall>{stock.vials}</TypographySmall> </div>
                            <div className=""> <TypographySmall>{stock.expiration}</TypographySmall> </div>
                            <div className="flex justify-center">
                                <AddStock vaccine={stock} />
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}

const stocks = [
    {
        id: 1,
        name: 'BCG',
        batch: '05726073',
        vials: 50,
        expiration: 'May 2025',
    },
    {
        id: 2,
        name: 'HEPA B',
        batch: '03321003',
        vials: 120,
        expiration: 'March 2025',
    },
    {
        id: 3,
        name: 'BOPV',
        batch: '1803P096',
        vials: 300,
        expiration: 'May 2025',
    },
    {
        id: 4,
        name: 'IPV',
        batch: '2443T006',
        vials: 209,
        expiration: 'March 2026',
    },
    {
        id: 5,
        name: 'MMR',
        batch: '0163M018',
        vials: 217,
        expiration: 'January 2026',
    },
]