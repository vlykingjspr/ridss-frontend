import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TooltipComponent } from "@/components/ui/tooltip";
import { TypographySmall } from "@/components/ui/typography";
import { format } from "date-fns";
import { Check, Undo } from "lucide-react";

export default function Verification() {
    return (
        <div className="">
            <Card className="shadow-xs gap-0 p-0 rounded-md border-none overflow-hidden">
                <div className="h-12 bg-primary border border-primary text-primary-foreground grid grid-cols-[10rem_1fr_repeat(4,_5rem)_10rem] items-center [&>div]:px-4">
                    <div className=""> <TypographySmall>Date</TypographySmall> </div>
                    <div className=""> <TypographySmall>Vaccine</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>Present</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>Absent</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>Vaccinated</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>Invalid</TypographySmall> </div>
                    <div className="text-center"><TypographySmall>Action</TypographySmall></div>
                </div>
                <div className="border border-border border-t-0 rounded-b-[inherit] divide-y divide-border">
                    {verification.map((ver) => (
                        <div key={ver.id} className="h-12 grid grid-cols-[10rem_1fr_repeat(4,_5rem)_10rem] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>{format(ver.date, "MMM d, y")}</TypographySmall> </div>
                            <div className=""> <TypographySmall>{ver.vaccine}</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>{ver.present}</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>{ver.absent}</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>{ver.vaccinated}</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>{ver.invalid}</TypographySmall> </div>
                            <div className="flex items-center justify-center gap-2">
                                <TooltipComponent title="Approve">
                                    <Button size="icon" className="size-8 bg-green-600 hover:bg-green-600/90">
                                        <Check />
                                    </Button>
                                </TooltipComponent>
                                <TooltipComponent title="Send Back">
                                    <Button size="icon" className="size-8" variant={'destructive'}>
                                        <Undo />
                                    </Button>
                                </TooltipComponent>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
            </div>
        </div>
    )
}

export const verification = [
    {
        id: 1,
        date: '10/08/2025',
        vaccine: 'PENTAVALENT',
        present: 10,
        absent: 1,
        vaccinated: 10,
        invalid: 0
    },
    {
        id: 2,
        date: '10/08/2025',
        vaccine: 'OPV',
        present: 10,
        absent: 1,
        vaccinated: 10,
        invalid: 0
    },
    {
        id: 3,
        date: '10/08/2025',
        vaccine: 'PCV',
        present: 10,
        absent: 1,
        vaccinated: 10,
        invalid: 0
    },
]