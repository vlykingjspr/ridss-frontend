"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TypographySmall } from "@/components/ui/typography";
import { ChevronLeft } from "lucide-react";
import { ProfilePhoto } from "../../../../../../components/ui/avatar";
import Component from "@/components/comp-235";

interface Props {
    onCloseNewSchedule: CallableFunction;
}
export default function EventForm({ onCloseNewSchedule }: Props) {
    return (
        <div className="h-full p-3">
            <div className="space-y-3">
                <div className="flex flex-col gap-1.5">
                    <TypographySmall>Time of Immunization</TypographySmall>
                    <Input type="time" className="" />
                </div>

                <div className="">
                    <Component />
                </div>

                <div className="flex flex-col gap-1.5">
                    <TypographySmall>Details</TypographySmall>
                    <Textarea className="min-h-60 resize-none rounded-sm" placeholder="Type here..." />
                </div>

                <div className="rounded-sm border border-border shadow-xs overflow-hidden" hidden>
                    <Input className="border-none shadow-none h-11 focus-visible:ring-0 ring-offset-0 focus-visible:bg-secondary/80 rounded-none" placeholder="Search user" />
                    <div className="border-t border-border p-2 flex flex-wrap gap-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="rounded-sm flex items-center gap-2 p-1 px-2 border border-border w-fit shadow-xs shrink-0">
                                <ProfilePhoto className="size-7" />
                                <TypographySmall>Lorem ipsum dol</TypographySmall>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-4">
                <Button variant="outline" className="lg:w-40" onClick={() => onCloseNewSchedule(false)}>
                    Cancel
                </Button>
                <Button className="lg:w-40" onClick={() => onCloseNewSchedule(false)}>
                    Create
                </Button>
            </div>
        </div>
    )
}