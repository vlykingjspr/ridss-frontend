import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@/components/ui/menubar";
import { TooltipComponent } from "@/components/ui/tooltip";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { CalendarDays, ThumbsUp, Ellipsis, Settings2, ThumbsDown, MessageSquareMore } from "lucide-react";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Approval Logs</TypographyLarge>

            <div className="mt-6">
                <div className="mb-4 flex items-center gap-3 border-b border-border pb-3">
                    <Menubar className="size-fit p-0 border-none shadow-none">
                        <MenubarMenu>
                            <MenubarTrigger asChild>
                                <Button variant={"outline"}>
                                    <CalendarDays />
                                    <span>Sort by Date</span>
                                </Button>
                            </MenubarTrigger>
                            <MenubarContent align="start" alignOffset={0} sideOffset={1}>
                                <MenubarItem>Yesterday</MenubarItem>
                                <MenubarItem>Last 7 days</MenubarItem>
                                <MenubarItem>Last 30 days</MenubarItem>
                                <MenubarSub>
                                    <MenubarSubTrigger className="!text-muted-foreground">
                                        Select Date
                                    </MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem></MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                    <Menubar className="size-fit p-0 border-none shadow-none">
                        <MenubarMenu>
                            <MenubarTrigger asChild>
                                <Button variant={"outline"}>
                                    <Settings2 />
                                    <span>All Action</span>
                                </Button>
                            </MenubarTrigger>
                            <MenubarContent align="start" alignOffset={0} sideOffset={1}>
                                <MenubarItem>All Action</MenubarItem>
                                <MenubarItem>Approval</MenubarItem>
                                <MenubarItem>Disapproved</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>

                <div className="[&>*:last-child_.trail]:hidden">
                    {Array.from({ length: 2}).map((_,index) => (
                        <div key={index} className="grid grid-cols-[1.5rem_1fr]">
                            <div className="relative flex">
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 size-2.5 rounded-full bg-zinc-400"></div>
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 h-full border-r bg-zinc-300 trail"></div>
                            </div>
                            <div className="px-2 pb-4">
                                <TypographySmall className="">September 0{2-index}, 2025</TypographySmall>
                                <div className="">
                                    <Card className="gap-0 overflow-hidden rounded-lg p-0 shadow-xs mt-2 divide-y">
                                        <div className="p-3">
                                            <div className="flex max-lg:flex-col-reverse lg:items-center gap-2">
                                                <div className="">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <TypographySmall className="text-[15px]">BCG (Bacillus-Calmette-Guerin)</TypographySmall>

                                                        <div className="text-[12px] w-fit text-green-600 flex items-center gap-1 font-medium px-2 pl-1.5 p-0.5 bg-green-100 rounded-full">
                                                            <ThumbsUp className="size-3.5" />
                                                            <span>Approved</span>
                                                        </div>
                                                    </div>

                                                    <div className="text-sm flex items-center gap-1 mt-1">
                                                        <span className="text-[13px]">Action taken By:</span>
                                                        <TypographySmall>You</TypographySmall>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 max-lg:justify-between lg:ml-auto">
                                                    <div className="flex items-center gap-1.5">
                                                        <TypographySmall className="font-normal text-[13px]">Vaccine Request &#8226; 09:45 AM </TypographySmall>
                                                    </div>

                                                    <Button className="size-6 ml-2" size="icon" variant={'ghost'}>
                                                        <Ellipsis />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="flex max-lg:flex-col-reverse lg:items-center gap-2">
                                                <div className="">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <TypographySmall className="text-[15px]">Hepatitis B</TypographySmall>

                                                        <div className="text-[12px] w-fit text-green-600 flex items-center gap-1 font-medium px-2 pl-1.5 p-0.5 bg-green-100 rounded-full">
                                                            <ThumbsUp className="size-3.5" />
                                                            <span>Approved</span>
                                                        </div>
                                                    </div>

                                                    <div className="text-sm flex items-center gap-1 mt-1">
                                                        <span className="text-[13px]">Action taken By:</span>
                                                        <TypographySmall>You</TypographySmall>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 max-lg:justify-between lg:ml-auto">
                                                    <div className="flex items-center gap-1.5">
                                                        <TypographySmall className="font-normal text-[13px]">Vaccine Request &#8226; 09:45 AM </TypographySmall>
                                                    </div>

                                                    <Button className="size-6 ml-2" size="icon" variant={'ghost'}>
                                                        <Ellipsis />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="flex max-lg:flex-col-reverse lg:items-center gap-2">
                                                <div className="">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <TypographySmall className="text-[15px]">Pneumococcal Conjugate Vaccine</TypographySmall>

                                                        <div className="text-[12px] w-fit text-red-600 flex items-center gap-1 font-medium px-2 pl-1.5 p-0.5 bg-red-100 rounded-full">
                                                            <ThumbsDown className="size-3.5" />
                                                            <span>Disapproved</span>
                                                        </div>

                                                        <TooltipComponent title="Remarks">
                                                            <MessageSquareMore className="size-3" />
                                                        </TooltipComponent>
                                                    </div>

                                                    <div className="text-sm flex items-center gap-1 mt-1">
                                                        <span className="text-[13px]">Action taken By:</span>
                                                        <TypographySmall>You</TypographySmall>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 max-lg:justify-between lg:ml-auto">
                                                    <div className="flex items-center gap-1.5">
                                                        <TypographySmall className="font-normal text-[13px]">Vaccine Request &#8226; 09:45 AM </TypographySmall>
                                                    </div>

                                                    <Button className="size-6 ml-2" size="icon" variant={'ghost'}>
                                                        <Ellipsis />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                    <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
                </div>
            </div>
        </div>
    );
}
