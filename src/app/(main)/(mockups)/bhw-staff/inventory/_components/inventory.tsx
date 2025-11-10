import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import InventoryCard from "../../../bhw-head/vaccine/_components/inventory-card";

export default function InventoryStocks() {
    return (
        <div className="mt-6">
            <Card className="gap-0 overflow-hidden rounded-md p-0 shadow-xs">
                <div className="bg-primary text-primary-foreground grid h-12 grid-cols-[repeat(3,_1fr)_5rem] items-center px-3 [&>div]:not-first:text-center">
                    <div className="col-span-1">
                        <TypographySmall>Vaccine</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall>Unopened Vials</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall>Opened Vials</TypographySmall>
                    </div>
                    <div className=""></div>
                </div>
                <div className="divide-y">
                    <InventoryCard vaccine={{ name: "Oral Polio Vaccine", vials: 6, doses: 20, opened: 1 }} />
                    <InventoryCard vaccine={{ name: "Hepatitis B", vials: 10, doses: 1, opened: 0 }} />
                    <InventoryCard
                        vaccine={{ name: "Pneumococcal Conjugate Vaccine", vials: 10, doses: 4, opened: 0 }}
                    />
                </div>
            </Card>
        </div>
    );
}
