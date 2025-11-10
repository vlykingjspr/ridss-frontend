import BarangayStockCard from "./barangay-stock-card";

import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";

export default function BarangayStocks() {
    return (
        <Card className="shadow-xs rounded-md gap-0 p-0 border-none">
            <div className="h-12 bg-primary border border-primary text-primary-foreground rounded-t-[inherit] grid grid-cols-[repeat(4,_1fr)_5rem] items-center [&>div]:px-4">
                <div className=""> <TypographySmall>Barangay</TypographySmall> </div>
                <div className=""> <TypographySmall>Vaccines Available</TypographySmall> </div>
                <div className=""> <TypographySmall>Head</TypographySmall> </div>
                <div className=""> <TypographySmall>Contact No.</TypographySmall> </div>
                <div className=""></div>
            </div>
            <div className="border border-border border-t-0 rounded-b-[inherit] divide-y divide-border">
                {barangays.map((b) => (
                    <BarangayStockCard key={b.id} brgy={b} />
                ))}
            </div>
        </Card>
    )
}

export const barangays = [
    {
        id: 1,
        brgy: 'New Malitbog',
        name: "Ethan Rivera",
        vaccines: 5,
        contact: "0917-452-3816"
    },
    {
        id: 2,
        brgy: 'New Visayas',
        name: "Sophia Delgado",
        vaccines: 5,
        contact: "0921-884-7335"
    },
    {
        id: 3,
        brgy: 'San Pedro',
        name: "Marcus Villanueva",
        vaccines: 5,
        contact: "0995-230-4478"
    },
    {
        id: 4,
        brgy: 'New Pandan',
        name: "Althea Santos",
        vaccines: 5,
        contact: "0908-612-9543"
    },
    {
        id: 5,
        brgy: 'Southern Davao',
        name: "Julian Mercado",
        vaccines: 5,
        contact: "0936-740-1289"
    },
]