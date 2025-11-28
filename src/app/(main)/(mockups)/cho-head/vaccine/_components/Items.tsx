import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ellipsis, Info, PenLine } from "lucide-react";
import { TypographySmall } from "@/components/ui/typography";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

import NewVaccine from "./new-vaccine";

export default function VaccineItems() {
    return (
        <div className="mt-6">
            <div className="mb-4 flex items-center gap-3 border-b border-border pb-3">
                <NewVaccine />
            </div>

            <div className="">
                <Card className="shadow-xs rounded-md gap-0 p-0 border-none overflow-hidden">
                    <div className="h-12 bg-primary text-primary-foreground border border-primary rounded-t-[inherit] grid grid-cols-5 items-center [&>div]:px-4">
                        <div className="col-span-2"> <TypographySmall>Vaccine Name</TypographySmall> </div>
                        <div className=""> <TypographySmall>Dosage per Vial</TypographySmall> </div>
                        <div className=""> <TypographySmall>Exp. after Open</TypographySmall> </div>
                        <div className="text-center"> <TypographySmall>Action</TypographySmall> </div>
                    </div>
                    <div className="rounded-b-[inherit] border border-border border-t-0 divide-y divide-border">
                        {items.map((i) => (
                            <div key={i.id} className="h-12 grid grid-cols-5 items-center [&>div]:px-4">
                                <div className="col-span-2"> <TypographySmall>{i.name}</TypographySmall> </div>
                                <div className=""> <TypographySmall>{i.dosage}</TypographySmall> </div>
                                <div className=""> <TypographySmall>{i.expiration}</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Menubar className="p-0 shadow-none h-fit w-fit border-none">
                                        <MenubarMenu>
                                            <MenubarTrigger asChild>
                                                <Button variant="outline" size="icon" className="size-8">
                                                    <Ellipsis />
                                                </Button>
                                            </MenubarTrigger>
                                            <MenubarContent align="end" alignOffset={0} sideOffset={1} className="min-w-42">
                                                <MenubarItem className="h-10 px-3"> <Info className="size-4.5 mr-2" /> View Details</MenubarItem>
                                                <MenubarItem className="h-10 px-3"> <PenLine className="size-4.5 mr-2" /> Edit Vaccine</MenubarItem>
                                            </MenubarContent>
                                        </MenubarMenu>
                                    </Menubar>
                                </div>
                            </div>  
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}

const items = [
    {
        id: 1,
        name: 'BCG',
        dosage: '1',
        expiration: '6 hours',
    },
    {
        id: 2,
        name: 'HEPA B',
        dosage: '1',
        expiration: '28 days',
    },
    {
        id: 3,
        name: 'BOPV',
        dosage: '3',
        expiration: '28 days',
    },
    {
        id: 4,
        name: 'IPV',
        dosage: '3',
        expiration: '28 days',
    },
    {
        id: 5,
        name: 'MMR',
        dosage: '2',
        expiration: '6 hours',
    },
]