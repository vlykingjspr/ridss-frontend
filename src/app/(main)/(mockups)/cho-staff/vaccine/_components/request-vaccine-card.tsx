"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Props {
    label: string;
}
export default function WithdrawalCard({ label }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <Card className="rounded-md gap-0 p-3 shadow-xs">
            <div className="flex justify-between gap-3">
                <div className="leading-5">
                    <div><span className="text-sm">Barangay:</span> <TypographySmall className="text-[15px]">New Malitbog</TypographySmall></div>
                    <div><span className="text-sm">Issued By:</span> <TypographySmall className="text-[15px]">John Doe</TypographySmall></div>
                    <div className="text-muted-foreground text-sm">November 5, 2025 10:00 AM</div>
                </div>

                <Button className="rounded-full h-7 pointer-events-none bg-amber-100 text-amber-600 border-amber-500" variant={'outline'}>
                    Pending
                </Button>
            </div>

            {/* <div className="mt-5 space-y-2">
                <Card className="rounded-md gap-0 p-3 shadow-xs flex-row items-center">
                    <div className=""><TypographySmall className="text-[15px]">(IPV) Inactivated Polio Vaccine</TypographySmall></div>

                    <div className="flex items-center justify-center gap-2 ml-auto">
                        <TypographySmall className="font-normal">Requested Vials</TypographySmall>
                        <Button size="icon" className="h-8 w-10 text-center hover:bg-background shadow-none" variant={'outline'}>20</Button>
                    </div>
                </Card>
                <Card className="rounded-md gap-0 p-3 shadow-xs flex-row items-center">
                    <div className=""><TypographySmall className="text-[15px]">(OPV) Oral Polio Vaccine</TypographySmall></div>

                    <div className="flex items-center justify-center gap-2 ml-auto">
                        <TypographySmall className="font-normal">Requested Vials</TypographySmall>
                        <Button size="icon" className="h-8 w-10 text-center hover:bg-background shadow-none" variant={'outline'}>20</Button>
                    </div>
                </Card>
                <Card className="rounded-md gap-0 p-3 shadow-xs flex-row items-center">
                    <div className=""><TypographySmall className="text-[15px]">Pentavalent</TypographySmall></div>

                    <div className="flex items-center justify-center gap-2 ml-auto">
                        <TypographySmall className="font-normal">Requested Vials</TypographySmall>
                        <Button size="icon" className="h-8 w-10 text-center hover:bg-background shadow-none" variant={'outline'}>20</Button>
                    </div>
                </Card>
            </div> */}

            <div className="mt-5">
                <Card className="rounded-md shadow-xs border-none p-0 gap-0">
                    <div className="h-12 border border-primary bg-primary text-primary-foreground rounded-t-md grid grid-cols-[repeat(3,_1fr)_12rem] items-center [&>div]:px-4">
                        <div className=""> <TypographySmall>Vaccine</TypographySmall> </div>
                        <div className=""> <TypographySmall>Requested Vials</TypographySmall> </div>
                        <div className=""> <TypographySmall>Remaining Vials</TypographySmall> </div>
                    </div>
                    <div className="border border-border border-t-0 divide-y divide-border rounded-b-md">
                        <div className="h-12 grid grid-cols-[repeat(3,_1fr)_12rem] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>(IPV) Inactivated Polio Vaccine</TypographySmall> </div>
                            <div className=""> <TypographySmall>20</TypographySmall> </div>
                            <div className=""> <TypographySmall>100</TypographySmall> </div>
                            <div className="flex items-center justify-center">
                                <Button className="bg-green-600 hover:bg-green-600/90 h-8">
                                    Approve
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="flex justify-end items-center mt-4">
                <Button className="h-10 px-5">
                    <span>{label}</span>
                </Button>
            </div>
        </Card>
    )
}
