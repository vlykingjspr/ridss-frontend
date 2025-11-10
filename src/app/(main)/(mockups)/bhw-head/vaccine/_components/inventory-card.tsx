"use client"

import { Button } from "@/components/ui/button";
import { TypographySmall } from "@/components/ui/typography";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Props {
    vaccine: {
        name: string;
        vials: number;
        opened: number;
        doses: number;
    };
}
export default function InventoryCard({vaccine}: Props) {
    const [open, setOpen] = useState(false)

    return (
        <div className="">
            <div className="grid h-11 grid-cols-[repeat(3,_1fr)_5rem] items-center px-3 [&>div]:not-first:text-center data-open:bg-primary/20 data-open:text-primary" data-open={open?true:undefined}>
                <div className="">
                    <TypographySmall>{vaccine.name}</TypographySmall>
                </div>
                <div className="">
                    <TypographySmall>{vaccine.vials}</TypographySmall>
                </div>
                <div className="">
                    <TypographySmall className="line-clamp-1">{vaccine.opened}</TypographySmall>
                </div>
                <div className="flex items-center justify-center">
                    <Button variant="outline" size="icon" className="size-8" onClick={() => setOpen(!open)}>
                        <ChevronDown data-open={open?true:undefined} className="data-open:rotate-180 transition duration-250" />
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
                        className="overflow-hidden bg-secondary/25 shadow-inner border-t border-border"
                    >
                        <div className="p-3 space-y-3">
                            <div hidden={!vaccine.opened}>
                                <TypographySmall className="text-muted-foreground">OPENED VIALS</TypographySmall>
                                <div className="mt-2">
                                    <div className="grid grid-cols-4 bg-secondary p-2 [&>div]:px-4 rounded-t-md border border-border border-b-0">
                                        {/* <div className=""> <TypographySmall>Batch</TypographySmall> </div> */}
                                        <div className=""> <TypographySmall>Expiration</TypographySmall> </div>
                                        <div className=""> <TypographySmall>Vials</TypographySmall> </div>
                                        <div className=""> <TypographySmall>Doses Left</TypographySmall> </div>
                                        <div className="text-center"> <TypographySmall>Action</TypographySmall> </div>
                                    </div>
                                    <div className="divide-y divide-border border border-border rounded-b-md overflow-hidden">
                                        <div className="p-2 grid grid-cols-4 items-center [&>div]:px-4 bg-background">
                                            {/* <div className=""> <TypographySmall>D234FQ</TypographySmall> </div> */}
                                            <div className=""> <TypographySmall>Dec. 5, 2025</TypographySmall> </div>
                                            <div className=""> <TypographySmall>1</TypographySmall> </div>
                                            <div className=""> <TypographySmall>11</TypographySmall> </div>
                                            <div className="flex items-center justify-center">
                                                <Button>
                                                    Forward Vial
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <TypographySmall className="text-muted-foreground">UNOPENED VIALS</TypographySmall>
                                <div className="mt-2">
                                    <div className="grid grid-cols-4 bg-secondary p-2 [&>div]:px-4 rounded-t-md border border-border border-b-0">
                                        {/* <div className=""> <TypographySmall>Batch</TypographySmall> </div> */}
                                        <div className=""> <TypographySmall>Expiration</TypographySmall> </div>
                                        <div className=""> <TypographySmall>Vials</TypographySmall> </div>
                                        <div className=""> <TypographySmall>Doses Left</TypographySmall> </div>
                                        <div className="text-center"> <TypographySmall>Action</TypographySmall> </div>
                                    </div>
                                    <div className="divide-y divide-border border border-border rounded-b-md overflow-hidden">
                                        <div className="p-2 grid grid-cols-4 items-center [&>div]:px-4 bg-background">
                                            {/* <div className=""> <TypographySmall>D234FQ</TypographySmall> </div> */}
                                            <div className=""> <TypographySmall>May 2026</TypographySmall> </div>
                                            <div className=""> <TypographySmall>{vaccine.vials}</TypographySmall> </div>
                                            <div className=""> <TypographySmall>{vaccine.vials*vaccine.doses}</TypographySmall> </div>
                                            <div className="flex items-center justify-center">
                                                <Button>
                                                    Forward Vial
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
