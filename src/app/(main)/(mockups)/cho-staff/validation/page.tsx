import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TooltipComponent } from "@/components/ui/tooltip";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { Check, Eye, Undo } from "lucide-react";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Validation</TypographyLarge>

            <div className="mt-6">
                <Card className="shadow-xs rounded-md gap-0 p-0 border-none">
                    <div className="h-12 bg-primary text-primary-foreground border border-primary rounded-t-[inherit] grid grid-cols-5 items-center [&>div]:px-4">
                        <div className="col-span-2"> <TypographySmall>Barangay</TypographySmall> </div>
                        <div className=""> <TypographySmall>Present</TypographySmall> </div>
                        <div className=""> <TypographySmall>Absent</TypographySmall> </div>
                        <div className=""></div>
                    </div>
                    <div className="rounded-b-[inherit] border border-border divide-y divide-border">
                        <div className="h-12 grid grid-cols-5 items-center [&>div]:px-4">
                            <div className="col-span-2"> <TypographySmall>New Malitbog</TypographySmall> </div>
                            <div className=""> <TypographySmall>150</TypographySmall> </div>
                            <div className=""> <TypographySmall>5</TypographySmall> </div>
                            <div className="flex items-center gap-3">
                                <TooltipComponent title="View Details">
                                    <Button className="size-8" size="icon" variant="outline"><Eye /></Button>
                                </TooltipComponent>
                                <TooltipComponent title="Marked as Valid">
                                    <Button className="size-8" size="icon"><Check /></Button>
                                </TooltipComponent>
                                <TooltipComponent title="Send Back">
                                    <Button className="size-8" size="icon" variant="destructive"><Undo /></Button>
                                </TooltipComponent>
                            </div>
                        </div>
                        <div className="h-12 grid grid-cols-5 items-center [&>div]:px-4">
                            <div className="col-span-2"> <TypographySmall>New Pandan</TypographySmall> </div>
                            <div className=""> <TypographySmall>150</TypographySmall> </div>
                            <div className=""> <TypographySmall>5</TypographySmall> </div>
                            <div className="flex items-center gap-3">
                                <TooltipComponent title="View Details">
                                    <Button className="size-8" size="icon" variant="outline"><Eye /></Button>
                                </TooltipComponent>
                                <TooltipComponent title="Marked as Valid">
                                    <Button className="size-8" size="icon"><Check /></Button>
                                </TooltipComponent>
                                <TooltipComponent title="Send Back">
                                    <Button className="size-8" size="icon" variant="destructive"><Undo /></Button>
                                </TooltipComponent>
                            </div>
                        </div>
                        <div className="h-12 grid grid-cols-5 items-center [&>div]:px-4">
                            <div className="col-span-2"> <TypographySmall>New Visayas</TypographySmall> </div>
                            <div className=""> <TypographySmall>150</TypographySmall> </div>
                            <div className=""> <TypographySmall>5</TypographySmall> </div>
                            <div className="flex items-center gap-3">
                                <TooltipComponent title="View Details">
                                    <Button className="size-8" size="icon" variant="outline"><Eye /></Button>
                                </TooltipComponent>
                                <TooltipComponent title="Marked as Valid">
                                    <Button className="size-8" size="icon"><Check /></Button>
                                </TooltipComponent>
                                <TooltipComponent title="Send Back">
                                    <Button className="size-8" size="icon" variant="destructive"><Undo /></Button>
                                </TooltipComponent>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}