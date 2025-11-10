import { TypographySmall } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Calendar, ChevronDown, Download, Plus } from "lucide-react";
import { eachMonthOfInterval, format } from "date-fns";
import { cn } from "@/lib/utils";
import TransactionTabs from "./tansaction-tabs";

export default function Transaction() {
    const year = 2025

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
        <div className="mt-6">
            <div className="flex items-center gap-3 border-b pb-3">
                <Menubar className="w-fit border-none p-0 shadow-none">
                    <MenubarMenu>
                        <MenubarTrigger asChild>
                            <Button variant={"outline"} className="w-30 justify-start">
                                <Calendar />
                                <span>{year}</span>
                            </Button>
                        </MenubarTrigger>
                        <MenubarContent alignOffset={0} sideOffset={1} className="min-w-30">
                            {years.reverse().map((y, index) => (
                                <MenubarItem key={index} className={cn(year == y && "text-primary font-bold")}>{y}</MenubarItem>
                            ))}
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>

                <div className="ml-auto flex items-center gap-3">
                    <div className="flex items-center">
                        <Button variant="outline" className="rounded-r-none border-r-0">
                            <Download />
                            PDF Export All
                        </Button>
                        <Menubar className="p-0 shadow-none border-none w-fit">
                            <MenubarMenu>
                                <MenubarTrigger asChild>
                                    <Button variant={'outline'} size="icon" className="rounded-l-none">
                                        <ChevronDown />
                                    </Button>
                                </MenubarTrigger>
                                <MenubarContent align="end" alignOffset={0} sideOffset={1} className="min-w-35">
                                    <MenubarLabel>Select Vaccine to Export</MenubarLabel>
                                    <MenubarItem>(BCG) Bacillus-Calmette-Guerin</MenubarItem>
                                    <MenubarItem>(HBV) Hepatitis B</MenubarItem>
                                    <MenubarItem>Pentavalent</MenubarItem>
                                    <MenubarItem>(PCV) Pneumococcal Conjugate Vaccine</MenubarItem>
                                    <MenubarItem>(OPV) Oral Polio Vaccine</MenubarItem>
                                    <MenubarItem>(IPV) Inactivated Polio Vaccine</MenubarItem>
                                    <MenubarItem>(AMV) Measles - Rubella Vaccine</MenubarItem>
                                    <MenubarItem>(MMR) Measles - Mumps - Rubella Vaccine</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                    <Button variant="outline" hidden>
                        <Download />
                        Excel Export
                    </Button>
                </div>
            </div>
            
            <div className="mt-5">
                <div className="mb-3">
                    <TransactionTabs />
                </div>

                <Card className="gap-0 rounded-md border-none p-0 shadow-xs">
                    <div className="border-primary bg-primary text-primary-foreground grid h-12 grid-cols-6 items-center rounded-t-md border [&>div]:px-4">
                        <div className="">
                            <TypographySmall>Date</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Transaction</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Received Vials</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Issued Vials</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Balance</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Remarks</TypographySmall>
                        </div>
                    </div>
                    <div className="border-border rounded-b-[inherit] border border-t-0">
                        <div className="divide-y divide-border">
                            <div className="grid h-12 grid-cols-6 items-center [&>div]:px-4">
                                <div className="">
                                    <TypographySmall>Jan 6, 2025</TypographySmall>
                                </div>
                                <div className="">
                                    <TypographySmall>Vaccine Withdrawal</TypographySmall>
                                </div>
                                <div className="">
                                    <TypographySmall>40</TypographySmall>
                                </div>
                                <div className="">
                                    <TypographySmall>-</TypographySmall>
                                </div>
                                <div className="">
                                    <TypographySmall>40</TypographySmall>
                                </div>
                                <div className="flex items-center">
                                    <Button variant={"outline"} className="h-8">
                                        <Plus />
                                        Add Remarks
                                    </Button>
                                </div>
                            </div>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className="grid h-12 grid-cols-6 items-center [&>div]:px-4">
                                    <div className="">
                                        <TypographySmall>{format((index+2)+'/'+(new Date().getDate() +'/'+ new Date().getFullYear()), "MMM")} {format(new Date(), "d, y")}</TypographySmall>
                                    </div>
                                    <div className="">
                                        <TypographySmall>Routine Imm.</TypographySmall>
                                    </div>
                                    <div className="">
                                        <TypographySmall>-</TypographySmall>
                                    </div>
                                    <div className="">
                                        <TypographySmall>{index+2}</TypographySmall>
                                    </div>
                                    <div className="">
                                        <TypographySmall>{40-(index+2)}</TypographySmall>
                                    </div>
                                    <div className="flex items-center">
                                        <Button variant={"outline"} className="h-8">
                                            <Plus />
                                            Add Remarks
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
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