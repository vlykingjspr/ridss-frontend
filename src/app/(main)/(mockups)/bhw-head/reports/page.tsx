import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Calendar, Download } from "lucide-react";
import { eachMonthOfInterval, format } from "date-fns";

export default function Page() {
    const months = eachMonthOfInterval({
        start: new Date(2025, 0, 1),
        end: new Date(2025, 11, 31),
    }).map(date => format(date, "MMMM"));

    const startYear = 2015;
    const currentYear = new Date().getFullYear();

    const years = Array.from(
        { length: currentYear - startYear + 1 },
        (_, i) => startYear + i
    );

    return (
        <div className="">
            <TypographyLarge>Reports</TypographyLarge>

            
            <div className="mt-6">
                <div className="flex items-center gap-3">
                    <Menubar className="p-0 shadow-none border-none w-fit">
                        <MenubarMenu>
                            <MenubarTrigger asChild>
                                <Button variant={'outline'} className="w-35 justify-start">
                                    <Calendar />
                                    <span>November</span>
                                </Button>
                            </MenubarTrigger>
                            <MenubarContent alignOffset={0} sideOffset={1} className="min-w-35">
                                {months.map((m, index) => (
                                    <MenubarItem key={index}>{m}</MenubarItem>
                                ))}
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                    <Menubar className="p-0 shadow-none border-none w-fit">
                        <MenubarMenu>
                            <MenubarTrigger asChild>
                                <Button variant={'outline'} className="w-30 justify-start">
                                    <Calendar />
                                    <span>2025</span>
                                </Button>
                            </MenubarTrigger>
                            <MenubarContent alignOffset={0} sideOffset={1} className="min-w-30">
                                {years.reverse().map((m, index) => (
                                    <MenubarItem key={index}>{m}</MenubarItem>
                                ))}
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                    <div className="flex items-center gap-3 ml-auto">
                        <Button variant="outline">
                            <Download />
                            PDF Export
                        </Button>
                        <Button variant="outline">
                            <Download />
                            Excel Export
                        </Button>
                    </div>
                </div>

                <div className="mt-5">
                    <Card className="rounded-md shadow-xs border-none gap-0 p-0">
                        <div className="h-12 bg-primary text-primary-foreground boder border-primary rounded-t-[inherit] grid grid-cols-[1fr_repeat(3,10rem)] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>Activities</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>Male</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>Female</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>Total</TypographySmall> </div>
                        </div>
                        <div className="rounded-b-[inherit] border border-border border-t-0 divide-y divide-border">
                            {list.map((vacc, index) => (
                                <div key={index} className="h-12 grid grid-cols-[1fr_repeat(3,10rem)] items-center [&>div]:px-4">
                                    <div className=""> <TypographySmall>{vacc.vacc}</TypographySmall> </div>
                                    <div className="text-center"> <TypographySmall>{vacc.m}</TypographySmall> </div>
                                    <div className="text-center"> <TypographySmall>{vacc.f}</TypographySmall> </div>
                                    <div className="text-center"> <TypographySmall>{vacc.t}</TypographySmall> </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

const list = [
    {
        vacc: 'BCG',
        m: 50,
        f: 50,
        t: 50,
    },
    {
        vacc: 'PENTAVALENT 1',
        m: 50,
        f: 50,
        t: 50,
    },
    {
        vacc: 'PENTAVALENT 2',
        m: 50,
        f: 50,
        t: 50,
    },
    {
        vacc: 'PENTAVALENT 3',
        m: 50,
        f: 50,
        t: 50,
    },
    {
        vacc: 'POLIO 1',
        m: 50,
        f: 50,
        t: 50,
    },
    {
        vacc: 'POLIO 2',
        m: 50,
        f: 50,
        t: 50,
    },
    {
        vacc: 'POLIO 3',
        m: 50,
        f: 50,
        t: 50,
    },
    {
        vacc: 'IPV',
        m: 50,
        f: 50,
        t: 50,
    },
]