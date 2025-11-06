"use client";

import { Input } from "@/components/ui/input";
import { TypographySmall, TypographyMuted } from "@/components/ui/typography";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ProfileDetails() {
    const [children, setChildren] = useState<number[]>([1, 2]);

    const onRemove = (index: number) => {
        const childrens = children.splice(index, 1)
        // childrens.splice(index, 1)
        setChildren(childrens)
    }

    return (
        <div className="">
            <div className="mb-6">
                <div className="border-border relative border-b">
                    <TypographyMuted className="bg-background absolute top-1/2 -translate-y-1/2 pr-3">
                        Child Details
                    </TypographyMuted>
                </div>
                <div className="mt-5">
                    <div className="divide-border space-y-4 divide-y">
                        {children.map((child, index) => (
                            <div key={child} className={cn("relative", children.length > 1 && "pb-4")}>
                                {children.length > 1 && (
                                    <Button
                                        className="absolute -top-3 right-0 size-6"
                                        variant="destructive"
                                        size="icon"
                                        onClick={() => onRemove(index)}
                                    >
                                        <X />
                                    </Button>
                                )}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <TypographySmall>First Name</TypographySmall>
                                        <Input className="" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <TypographySmall>Middle Name</TypographySmall>
                                        <Input className="" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <TypographySmall>Last Name</TypographySmall>
                                        <Input className="" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <TypographySmall>Sex</TypographySmall>
                                        <Select>
                                            <SelectTrigger className="h-9 w-full rounded-sm">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="Male">Male</SelectItem>
                                                    <SelectItem value="Female">Female</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <TypographySmall>Date of Birth</TypographySmall>
                                        <Input type="date" className="" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <TypographySmall>Date Registered in the TCL</TypographySmall>
                                        <Input type="date" className="" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5 mt-4">
                                    <TypographySmall>Address</TypographySmall>
                                    <Input className="" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-2">
                        <Button variant="outline" className="w-full border-dashed" onClick={() => setChildren([...children, children.length + 1])}>
                            <Plus />
                            <span>Add New Row</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="!mt-10 mb-6">
                <div className="border-border relative border-b">
                    <TypographyMuted className="bg-background absolute top-1/2 -translate-y-1/2 pr-3">
                        Father Details
                    </TypographyMuted>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>First Name</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Middle Name</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Last Name</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Occupation</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="col-span-full flex flex-col gap-1.5">
                        <TypographySmall>Contact No.</TypographySmall>
                        <Input className="" />
                    </div>
                </div>
            </div>

            <Link href={`?success=true`}>
                <Button className="w-full" type="submit">
                    Submit
                </Button>
            </Link>
        </div>
    );
}
