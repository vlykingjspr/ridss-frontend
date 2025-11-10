"use client"

import { Button } from "@/components/ui/button";
import { TooltipComponent } from "@/components/ui/tooltip";
import { TypographySmall } from "@/components/ui/typography";
import { Check, ChevronDown, Undo } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export default function VerificationCard() {
    const [open, setOpen] = useState(false)

    return (
        <div className="">
            <div className="grid h-12 grid-cols-6 items-center [&>div]:px-4">
                <div className="col-span-2">
                    <TypographySmall>New Malitbog</TypographySmall>
                </div>
                <div className="">
                    <TypographySmall>150</TypographySmall>
                </div>
                <div className="">
                    <TypographySmall>5</TypographySmall>
                </div>
                <div className="col-span-2 flex items-center gap-3">
                    <TooltipComponent title="Marked as Valid">
                        <Button className="h-8 bg-green-600 hover:bg-green-600/90">
                            <Check /> Approve
                        </Button>
                    </TooltipComponent>
                    <TooltipComponent title="Send Back">
                        <Button className="h-8 " variant="destructive">
                            <Undo /> Return
                        </Button>
                    </TooltipComponent>

                    <TooltipComponent title="Send Back">
                        <Button className="size-8 ml-auto" size="icon" variant="outline">
                            <ChevronDown />
                        </Button>
                    </TooltipComponent>
                </div>
            </div>
            <AnimatePresence>
                
            </AnimatePresence>
        </div>
    );
}
