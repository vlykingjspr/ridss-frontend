import { Card } from "@/components/ui/card";
import { TypographyH3, TypographySmall } from "@/components/ui/typography";

export default function Oversight() {
    return (
        <div className="">
            <div className="mt-6 grid grid-cols-4 gap-3" hidden>
                <Card className="gap-0 rounded-md p-2 px-3 shadow-xs">
                    <div className="">
                        <TypographySmall>Pending Vaccine Request</TypographySmall>

                        <TypographyH3 className="">4</TypographyH3>
                    </div>
                </Card>
                <Card className="gap-0 rounded-md p-2 px-3 shadow-xs">
                    <div className="">
                        <TypographySmall>Low Stock Vaccine</TypographySmall>

                        <TypographyH3 className="">4</TypographyH3>
                    </div>
                </Card>
                <Card className="gap-0 rounded-md p-2 px-3 shadow-xs">
                    <div className="">
                        <TypographySmall>Total No. of Vaccine</TypographySmall>

                        <TypographyH3 className="">12</TypographyH3>
                    </div>
                </Card>
                <Card className="gap-0 rounded-md p-2 px-3 shadow-xs">
                    <div className="">
                        <TypographySmall>No. of Barangay</TypographySmall>

                        <TypographyH3 className="">5</TypographyH3>
                    </div>
                </Card>
            </div>

            <div className="mt-6 space-y-4">
                <BarangayCard brgy="New Visayas" />
                <BarangayCard brgy="New Malitbog" />
                <BarangayCard brgy="Gredu" />
            </div>
        </div>
    );
}

export const BarangayCard = ({brgy}:{
    brgy: string
}) => {
    return (
        <Card className="gap-0 rounded-md p-0 shadow-xs overflow-hidden border-none">
            <div className="grid items-center bg-primary text-primary-foreground rounded-t-[inherit] border border-primary">
                <div className="pb-0 p-3"><TypographySmall className="text-[15px]">{brgy}</TypographySmall></div>
                <div className="h-12 grid grid-cols-[1fr_repeat(4,_10rem)] items-center [&>div]:px-4">
                    <div className=""> <TypographySmall>Vaccine</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>Qty</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>Remaining</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>Opened</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>Used</TypographySmall> </div>
                </div>
            </div>
            <div className="border border-border border-t-0 divide-y divide-border rounded-b-[inherit]">
                <div className="h-12 grid grid-cols-[1fr_repeat(4,_10rem)] items-center [&>div]:px-4">
                    <div className=""> <TypographySmall>Lorem Ipsum</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>4</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>1</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>0</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>3</TypographySmall> </div>
                </div>
                <div className="h-12 grid grid-cols-[1fr_repeat(4,_10rem)] items-center [&>div]:px-4">
                    <div className=""> <TypographySmall>Lorem Ipsum</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>6</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>0</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>0</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>6</TypographySmall> </div>
                </div>
                <div className="h-12 grid grid-cols-[1fr_repeat(4,_10rem)] items-center [&>div]:px-4">
                    <div className=""> <TypographySmall>Lorem Ipsum</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>4</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>0</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>0</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>4</TypographySmall> </div>
                </div>
            </div>
        </Card>
    );
};
