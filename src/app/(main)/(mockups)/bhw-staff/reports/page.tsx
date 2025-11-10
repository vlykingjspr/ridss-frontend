import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { CalendarDays, ChevronLeft, ChevronRight, Download, Ellipsis } from "lucide-react";
import Report1 from "./_components/report-1";
import { Report2 } from "./_components/report-2";
import Report3 from "./_components/report-3";
import Report4 from "./_components/report4";
import { ChartBarStacked } from "./_components/test-report";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Reports</TypographyLarge>

            <div className="mt-6">
                <div className="flex items-center justify-end gap-3 border-b border-border pb-3 mb-5">
                    <Button variant="outline" className="mr-auto">
                        <CalendarDays />
                        <span>October 2025</span>
                    </Button>

                    <Button variant="outline">
                        <Download />
                        PDF Export
                    </Button>
                    <Button variant="outline">
                        <Download />
                        Excel Export
                    </Button>
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