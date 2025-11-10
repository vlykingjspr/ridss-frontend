"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import { Check, ChevronDown, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Props {
    submittedTo?: string;
}
export default function WithdrawalCard({ submittedTo = "CHO" }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <Card className="rounded-md gap-0 p-3 shadow-xs">
            <div className="flex justify-between gap-3">
                <div className="leading-5">
                    <div>
                        <span className="text-sm">Issued By:</span> <TypographySmall className="text-[15px]">John Doe</TypographySmall>
                    </div>
                    <div className="text-muted-foreground text-sm">November 5, 2025 10:00 AM</div>
                </div>

                <Button className="rounded-full h-7 pointer-events-none bg-amber-100 text-amber-600 border-amber-500" variant={'outline'}>
                    Pending
                </Button>
            </div>

            <div className="mt-5 space-y-2">
                <Card className="rounded-md gap-0 p-3 shadow-xs flex-row items-center">
                    <div className=""><TypographySmall className="text-[15px]">(IPV) Inactivated Polio Vaccine</TypographySmall></div>

                    <div className="flex items-center justify-center gap-2 ml-auto">
                        <Button size="icon" className="size-8"> <Plus /> </Button>
                        <Button size="icon" className="h-8 w-10 text-center hover:bg-background shadow-none" variant={'outline'}>20</Button>
                        <Button size="icon" className="size-8" variant={'destructive'}> <Minus /> </Button>
                    </div>
                </Card>
                <Card className="rounded-md gap-0 p-3 shadow-xs flex-row items-center">
                    <div className=""><TypographySmall className="text-[15px]">(OPV) Oral Polio Vaccine</TypographySmall></div>

                    <div className="flex items-center justify-center gap-2 ml-auto">
                        <Button size="icon" className="size-8"> <Plus /> </Button>
                        <Button size="icon" className="h-8 w-10 text-center hover:bg-background shadow-none" variant={'outline'}>20</Button>
                        <Button size="icon" className="size-8" variant={'destructive'}> <Minus /> </Button>
                    </div>
                </Card>
                <Card className="rounded-md gap-0 p-3 shadow-xs flex-row items-center">
                    <div className=""><TypographySmall className="text-[15px]">Pentavalent</TypographySmall></div>

                    <div className="flex items-center justify-center gap-2 ml-auto">
                        <Button size="icon" className="size-8"> <Plus /> </Button>
                        <Button size="icon" className="h-8 w-10 text-center hover:bg-background shadow-none" variant={'outline'}>20</Button>
                        <Button size="icon" className="size-8" variant={'destructive'}> <Minus /> </Button>
                    </div>
                </Card>
            </div>

            <div className="flex justify-end items-center mt-4">
                <Button className="h-11 px-5">
                    <span>Submit to {submittedTo}</span>
                </Button>
            </div>
        </Card>
    )

    // reserved
    return (
        <div className="">
            <div className="grid h-12 grid-cols-[repeat(3,_1fr)_5rem] items-center [&>div]:px-4">
                <div className="">
                    <TypographySmall>Nov. 13, 2025</TypographySmall>
                </div>
                <div className="">
                    <TypographySmall>John Doe</TypographySmall>
                </div>
                <div className="">
                    <TypographySmall>Pending</TypographySmall>
                </div>
                <div className="flex items-center justify-center">
                    <Button size="icon" className="size-8" variant={"outline"} onClick={() => setOpen(!open)}>
                        <ChevronDown />
                    </Button>
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto'}}
                        exit={{ height: 0 }}
                        transition={{
                            type: "keyframes",
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        className="overflow-hidden bg-secondary/20 shadow-inner border-t border-border"
                    >
                        <div className="p-3">
                            <div className="grid grid-cols-3 bg-secondary p-2 [&>div]:px-4 rounded-t-md border border-border border-b-0">
                                <div className=""> <TypographySmall>Vaccines</TypographySmall> </div>
                                <div className="text-center"> <TypographySmall>Requested Vials</TypographySmall> </div>
                                <div className="text-center"> <TypographySmall>Current Vials</TypographySmall> </div>
                            </div>
                            <div className="divide-y divide-border border border-border rounded-b-md">
                                <div className="p-2 grid grid-cols-3 items-center [&>div]:px-4">
                                    <div className=""> <TypographySmall>BCG</TypographySmall> </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <Button size="icon" className="size-8"> <Plus /> </Button>
                                        <Button size="icon" className="size-8 hover:bg-background shadow-none" variant={'outline'}></Button>
                                        <Button size="icon" className="size-8" variant={'destructive'}> <Minus /> </Button>
                                    </div>
                                    <div className="text-center"> <TypographySmall>0</TypographySmall> </div>
                                </div>
                                <div className="p-2 grid grid-cols-3 items-center [&>div]:px-4">
                                    <div className=""> <TypographySmall>HEPATITS B</TypographySmall> </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <Button size="icon" className="size-8"> <Plus /> </Button>
                                        <Button size="icon" className="size-8 hover:bg-background shadow-none" variant={'outline'}></Button>
                                        <Button size="icon" className="size-8" variant={'destructive'}> <Minus /> </Button>
                                    </div>
                                    <div className="text-center"> <TypographySmall>0</TypographySmall> </div>
                                </div>
                                <div className="p-2 grid grid-cols-3 items-center [&>div]:px-4">
                                    <div className=""> <TypographySmall>IPV</TypographySmall> </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <Button size="icon" className="size-8"> <Plus /> </Button>
                                        <Button size="icon" className="size-8 hover:bg-background shadow-none" variant={'outline'}></Button>
                                        <Button size="icon" className="size-8" variant={'destructive'}> <Minus /> </Button>
                                    </div>
                                    <div className="text-center"> <TypographySmall>0</TypographySmall> </div>
                                </div>
                            </div>

                            <div className="flex justify-end items-center mt-4">
                                <Button>
                                    <span>Submit to CHO</span>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
