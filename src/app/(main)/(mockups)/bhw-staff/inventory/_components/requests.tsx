import NewRequest from "../../vaccination/_components/new-request";
import WithdrawalCard from "../../../bhw-head/vaccine/_components/withdrawal-card";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import { Check, Loader, Trash2 } from "lucide-react";
import { TooltipComponent } from "@/components/ui/tooltip";

export default function InventoryRequest() {
    return (
        <div className="space-y-4 mt-5">
            <div className="flex">
                <NewRequest />
            </div>

            <Card className="gap-0 overflow-hidden rounded-md border-none p-0 shadow-xs">
                <div className="bg-primary text-primary-foreground grid h-12 grid-cols-5 items-center px-3" hidden>
                    <div className="">
                        <TypographySmall>Vaccine</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall>Qty</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall>Issued By</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall>Status</TypographySmall>
                    </div>
                    <div className="text-center">
                        <TypographySmall>Action</TypographySmall>
                    </div>
                </div>
                <div className="grid h-11 grid-cols-5 items-center px-3" hidden>
                    <div className="">
                        <TypographySmall>BCG</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall>3</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall className="line-clamp-1">John Doe</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall className="flex items-center gap-1">
                            <Loader className="size-3.5" />
                            Pending
                        </TypographySmall>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <TooltipComponent title="Approve">
                            <Button size="icon" className="size-8 bg-green-600 hover:bg-green-600/90 text-green-50">
                                <Check />
                            </Button>
                        </TooltipComponent>
                        <TooltipComponent title="Disapprove">
                            <Button size="icon" className="size-8" variant={"destructive"}>
                                <Trash2 />
                            </Button>
                        </TooltipComponent>
                    </div>
                </div>

                <div className="space-y-4">
                    <WithdrawalCard submittedTo="Head" />
                </div>
            </Card>

            <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
            </div>
        </div>
    );
}

const vaccinesRequested = [
    {
        id: 1,
        vaccine: 'BCG',
        issued: 20,
        status: 'Approved',
        issued_date: 'October 20, 2025',
        approved_date: 'October 21, 2025'
    },
    {
        id: 1,
        vaccine: 'HEPATITIS B',
        issued: 20,
        status: 'Approved',
        issued_date: 'October 20, 2025',
        approved_date: 'October 21, 2025'
    },
    {
        id: 1,
        vaccine: 'IPV',
        issued: 20,
        status: 'Approved',
        issued_date: 'October 20, 2025',
        approved_date: 'October 21, 2025'
    },
    {
        id: 1,
        vaccine: 'OPV',
        issued: 20,
        status: 'Approved',
        issued_date: 'October 20, 2025',
        approved_date: 'October 21, 2025'
    },
]