import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Settings2, X } from "lucide-react";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Vaccine Approval</TypographyLarge>

            <div className="mt-6">
                <div className="mb-4 flex items-center gap-3 border-b border-border pb-3">
                    <Menubar className="size-fit p-0 border-none shadow-none">
                        <MenubarMenu>
                            <MenubarTrigger asChild>
                                <Button variant={"outline"}>
                                    <Settings2 />
                                    <span>All Vaccine</span>
                                </Button>
                            </MenubarTrigger>
                            <MenubarContent align="start" alignOffset={0} sideOffset={2}>
                                <MenubarItem className="font-semibold text-primary">All Vaccine</MenubarItem>
                                <MenubarItem>Bacillus-Calmette-Guerin</MenubarItem>
                                <MenubarItem>Hepatitis B</MenubarItem>
                                <MenubarItem>DTwP-HepB-Hib</MenubarItem>
                                <MenubarItem>Pneumococcal Conjugate Vaccine</MenubarItem>
                                <MenubarItem>OPV</MenubarItem>
                                <MenubarItem>Inactivated Polio Vaccine</MenubarItem>
                                <MenubarItem>Measles - Rubella Vaccine</MenubarItem>
                                <MenubarItem>Measles - Mumps - Rubella Vaccine</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>

                <Card className="rounded-md shadow-xs gap-0 p-0 border-none overflow-hidden">
                    <div className="h-12 bg-primary border border-b-0 border-primary text-primary-foreground rounded-t-[inherit] grid grid-cols-8 [&>div:nth-child(-n+2)]:col-span-2 items-center [&>div]:pl-4">
                        <div className="">
                            <TypographySmall>Brgy.</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Issued By</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Vaccine</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Vials</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Vials Remaining</TypographySmall>
                        </div>
                    </div>
                    <div className="rounded-b-[inherit] border border-t-0 border-border divide-y divide-border">
                        {brgys.map((brgy, index) => (
                            <div key={brgy.id} className="h-12 grid grid-cols-8 [&>div:nth-child(-n+2)]:col-span-2 items-center [&>div]:pl-4">
                                <div className="">
                                    <TypographySmall>{brgy.brgy}</TypographySmall>
                                </div>
                                <div className="">
                                    <TypographySmall>{brgy.issuer}</TypographySmall>
                                </div>
                                <div className="">
                                    <TypographySmall>{brgy.vaccine}</TypographySmall>
                                </div>
                                <div className="">
                                    <TypographySmall>{brgy.vials}</TypographySmall>
                                </div>
                                <div className="">
                                    <TypographySmall>50</TypographySmall>
                                </div>
                                <div className="flex justify-center gap-3">
                                    <Button size="icon" className="size-8 bg-green-600 hover:bg-green-600/90">
                                        <Check />
                                    </Button>
                                    <Button size="icon" variant={"destructive"} className="size-8">
                                        <X />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                    <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
                </div>
            </div>
        </div>
    )
}

const brgys = [
    {
        id: 1,
        brgy: 'New Malitbog',
        issuer: 'Anna Rose',
        vaccine: 'BCG',
        vials: '40',
    },
    {
        id: 2,
        brgy: 'New Visayas',
        issuer: 'John Anton Sy',
        vaccine: 'BOPV',
        vials: '12',
    },
    {
        id: 3,
        brgy: 'San Pedro',
        issuer: 'Althea Santos',
        vaccine: 'IPV',
        vials: '14',
    },
    {
        id: 4,
        brgy: 'Maduao',
        issuer: 'Ethan Rivera',
        vaccine: 'OPV',
        vials: '20',
    },
    {
        id: 5,
        brgy: 'Malativas',
        issuer: 'Johny Bravo',
        vaccine: 'OPV',
        vials: '10',
    },
]