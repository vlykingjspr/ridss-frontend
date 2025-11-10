import TransactionTabs from "../../../bhw-head/vaccine/_components/tansaction-tabs";

import { format } from "date-fns";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographySmall } from "@/components/ui/typography";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function Issuances() {
    return (
        <div className="">
            <div className="mb-4 border-b border-border">
                <TransactionTabs />
            </div>

            <div className="">
                <div className="">
                    <div className="flex items-center gap-2 mb-3">
                        <Menubar className="p-0 shadow-none border-none">
                            <MenubarMenu>
                                <MenubarTrigger asChild>
                                    <Button variant={'outline'} className="w-55 justify-start">
                                        <span className="text-muted-foreground">Batch/Lot:</span>
                                        <TypographySmall>05726703</TypographySmall>
                                        <ChevronDown className="text-muted-foreground ml-auto" />
                                    </Button>
                                </MenubarTrigger>
                                <MenubarContent className="w-55" alignOffset={0} sideOffset={1}>
                                    <MenubarItem>05726703</MenubarItem>
                                    <MenubarItem>85945456</MenubarItem>
                                    <MenubarItem>09729495</MenubarItem>
                                    <MenubarItem>19274024</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>

                        <div className="rounded-sm h-9 border border-border shadow-xs px-3 text-sm flex items-center gap-2">
                            <span className="text-muted-foreground">Exp:</span>
                            <TypographySmall>05/2026</TypographySmall>
                        </div>

                        <div className="flex items-center gap-3 ml-auto">
                            <div className="">
                                <span className="text-sm">Actual Stock: </span>
                                <TypographySmall>100</TypographySmall>
                            </div>

                            <div className="">
                                <span className="text-sm">Estimated Stock: </span>
                                <TypographySmall>{100-(brgy.reduce((a, b) => (a + b.vials), 0))}</TypographySmall>
                            </div>
                        </div>
                    </div>

                    <Card className="rounded-md shadow-xs gap-0 p-0 overflow-hidden border-none">
                        <div className="h-12 bg-primary border border-primary text-primary-foreground rounded-t-[inherit] grid grid-cols-[10rem_1fr_1fr_repeat(3,minmax(6rem,_10rem))] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>Date</TypographySmall> </div>
                            <div className=""> <TypographySmall>Brgy.</TypographySmall> </div>
                            <div className=""> <TypographySmall>Issued to</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>Vials Issued</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>Vials Remaining</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>Status</TypographySmall> </div>
                        </div>
                        <div className="rounded-b-[inherit] border border-border divide-y divide-border">
                            {brgy.map((brgy, index) => (
                                <div key={index} className="min-h-11 grid grid-cols-[10rem_1fr_1fr_repeat(3,minmax(5rem,_10rem))] items-center [&>div]:px-4">
                                    <div className=""> <TypographySmall>{format(new Date, "M/dd/y")}</TypographySmall> </div>
                                    <div className=""> <TypographySmall>{brgy.brgy}</TypographySmall> </div>
                                    <div className=""><TypographySmall>{brgy.issuer}</TypographySmall></div>    
                                    <div className="text-center"> <TypographySmall>{brgy.vials}</TypographySmall> </div>
                                    <div className="text-center"> <TypographySmall>{brgy.remain}</TypographySmall> </div>
                                    <div className="text-center"> <TypographySmall>{brgy.status}</TypographySmall> </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

const brgy = [
    {
        id: 1,
        brgy: 'San Francisico',
        issuer: 'Mark Santino',
        vials: 15,
        status: 'Received',
        remain: 100-15
    },
    {
        id: 2,
        brgy: 'Caganguhan',
        issuer: 'Anna Rose Doe',
        vials: 13,
        status: 'To Receive',
        remain: 85-13
    },
    {
        id: 3,
        brgy: 'Gredu',
        issuer: 'Sherelmi Cruz',
        vials: 25,
        status: 'Pending',
        remain: 72-25
    },
    {
        id: 4,
        brgy: 'New Visayas',
        issuer: 'Ridso Reep',
        vials: 5,
        status: 'Pending',
        remain: 47-5
    },
]