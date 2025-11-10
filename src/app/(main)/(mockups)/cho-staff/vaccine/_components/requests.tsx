import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { TypographySmall } from "@/components/ui/typography";
import TransactionTabs from "../../../bhw-head/vaccine/_components/tansaction-tabs";
import { TooltipComponent } from "@/components/ui/tooltip";

export default function Requests() {
    return (
        <div className="mt-6">
            <div className="mb-3 px-4">
                <TransactionTabs />
            </div>

            <div className="">

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
                        <TypographySmall>Vials Requested</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall>Vials Remaining</TypographySmall>
                    </div>
                    <div className="text-center">
                        <TypographySmall>Action</TypographySmall>
                    </div>
                </div>
                <div className="rounded-b-[inherit] border border-t-0 border-border divide-y divide-border">
                    {brgy.map((b, index) => (
                        <div key={index} className="h-12 grid grid-cols-8 [&>div:nth-child(-n+2)]:col-span-2 items-center [&>div]:pl-4">
                            <div className="">
                                <TypographySmall>{b.brgy}</TypographySmall>
                            </div>
                            <div className="">
                                <TypographySmall>{b.issuer}</TypographySmall>
                            </div>
                            <div className="">
                                <TypographySmall>BCG</TypographySmall>
                            </div>
                            <div className="">
                                <TypographySmall>{(index*2)+3}</TypographySmall>
                            </div>
                            <div className="">
                                <TypographySmall>{50-((index*2)+3)}</TypographySmall>
                            </div>
                            <div className="flex justify-center gap-2">
                                <TooltipComponent title="Approve">
                                    <Button size="icon" className="size-8 bg-green-600 hover:bg-green-600/90">
                                        <Check />
                                    </Button>
                                </TooltipComponent>
                                <TooltipComponent title="Disapprove">
                                    <Button size="icon" variant={'destructive'} className="size-8">
                                        <X />
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

const brgy = [
    {
        id: 1,
        brgy: 'New Visayas',
        issuer: 'Aceir Spire',
    },
    {
        id: 2,
        brgy: 'Southern Davao',
        issuer: 'Marcus Villanueva',
    },
    {
        id: 3,
        brgy: 'Little Panay',
        issuer: 'Julian Mercado',
    },
    {
        id: 4,
        brgy: 'Nanyo',
        issuer: 'Ethan Rivera',
    },
    {
        id: 5,
        brgy: 'New Malitbog',
        issuer: 'Anna Doe',
    },
]