import SearchInput from "@/components/search-input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographySmall } from "@/components/ui/typography";
import { Check, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Edit, Eye, Settings2, Trash2 } from "lucide-react";
import { Menubar, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Fragment } from "react";
import { TooltipComponent } from "@/components/ui/tooltip";

export default function PendingRegistration() {
    return (
        <div className="">
            <div className="flex items-center">
                <div className="flex items-center">
                    <Menubar className="border-0 p-0 shadow-none">
                        <MenubarMenu>
                            <MenubarTrigger asChild hidden>
                                <Button variant="outline">
                                    <Settings2 />
                                    <span>Filter</span>
                                </Button>
                            </MenubarTrigger>
                            <MenubarContent align="start" alignOffset={0} sideOffset={1}>
                                <div className="">
                                    <MenubarLabel className="text-muted-foreground text-[13px]">
                                        Immunization Status
                                    </MenubarLabel>
                                    <MenubarItem>
                                        <div className="size-2 rounded-full bg-green-600"></div> Active
                                    </MenubarItem>
                                    <MenubarItem>
                                        <div className="size-2 rounded-full bg-purple-600"></div> Graduate
                                    </MenubarItem>
                                    <MenubarItem>
                                        <div className="size-2 rounded-full bg-blue-600"></div> Completed
                                    </MenubarItem>
                                </div>
                                {/* <MenubarSeparator />
                                    <div className="">
                                        <MenubarLabel className="text-muted-foreground text-[13px]">Age</MenubarLabel>
                                        <MenubarItem></MenubarItem>
                                        <MenubarItem></MenubarItem>
                                        <MenubarItem></MenubarItem>
                                    </div> */}
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
                <div className="mb-4 ml-auto w-full max-sm:hidden sm:max-w-sm xl:max-w-lg">
                    <SearchInput placeholder="Search name" />
                </div>
            </div>
            <Card className="gap-0 p-0 shadow-xs rounded-lg border-none">
                        <div className="h-12 border border-primary bg-primary text-primary-foreground rounded-t-[inherit] grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>User</TypographySmall> </div>
                            <div className=""> <TypographySmall>Parent</TypographySmall> </div>
                            <div className=""> <TypographySmall>Vaccine Status</TypographySmall> </div>
                            <div className="text-center"> <TypographySmall>Action</TypographySmall> </div>
                        </div>
                        <div className="max-h-120 border border-border rounded-b-[inherit] divide-y divide-border">
                            <div className="h-11 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>John Ramos</TypographySmall> </div>
                                <div className=""> <TypographySmall>Montana Ramos</TypographySmall> </div>
                                <div className=""> <TypographySmall>For Approval</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    <TooltipComponent title="Approve">
                                        <Button size="icon" className="size-7 bg-green-600 hover:bg-green-600/90">
                                            <Check />
                                        </Button>
                                    </TooltipComponent>
                                </div>
                            </div>
                            <div className="h-11 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>John Javier</TypographySmall> </div>
                                <div className=""> <TypographySmall>Montana Javier</TypographySmall> </div>
                                <div className=""> <TypographySmall>For Approval</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    <TooltipComponent title="Approve">
                                        <Button size="icon" className="size-7 bg-green-600 hover:bg-green-600/90">
                                            <Check />
                                        </Button>
                                    </TooltipComponent>
                                </div>
                            </div>
                            <div className="h-11 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>John Mercado</TypographySmall> </div>
                                <div className=""> <TypographySmall>Montana Mercado</TypographySmall> </div>
                                <div className=""> <TypographySmall>For Approval</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    <TooltipComponent title="Approve">
                                        <Button size="icon" className="size-7 bg-green-600 hover:bg-green-600/90">
                                            <Check />
                                        </Button>
                                    </TooltipComponent>
                                </div>
                            </div>
                             <div className="h-11 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>John Navarro</TypographySmall> </div>
                                <div className=""> <TypographySmall>Montana Navarro</TypographySmall> </div>
                                <div className=""> <TypographySmall>For Approval</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    <TooltipComponent title="Approve">
                                        <Button size="icon" className="size-7 bg-green-600 hover:bg-green-600/90">
                                            <Check />
                                        </Button>
                                    </TooltipComponent>
                                </div>
                            </div>
                            <div className="h-11 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>John Castillo</TypographySmall> </div>
                                <div className=""> <TypographySmall>Montana Castillo</TypographySmall> </div>
                                <div className=""> <TypographySmall>For Approval</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    <TooltipComponent title="Approve">
                                        <Button size="icon" className="size-7 bg-green-600 hover:bg-green-600/90">
                                            <Check />
                                        </Button>
                                    </TooltipComponent>
                                </div>
                            </div>
                            <div className="h-11 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>John Ramirez</TypographySmall> </div>
                                <div className=""> <TypographySmall>Montana Ramirez</TypographySmall> </div>
                                <div className=""> <TypographySmall>For Approval</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    <TooltipComponent title="Approve">
                                        <Button size="icon" className="size-7 bg-green-600 hover:bg-green-600/90">
                                            <Check />
                                        </Button>
                                    </TooltipComponent>
                                </div>
                            </div>
                             <div className="h-11 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>John Reyes</TypographySmall> </div>
                                <div className=""> <TypographySmall>Montana Reyes</TypographySmall> </div>
                                <div className=""> <TypographySmall>For Approval</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    <TooltipComponent title="Approve">
                                        <Button size="icon" className="size-7 bg-green-600 hover:bg-green-600/90">
                                            <Check />
                                        </Button>
                                    </TooltipComponent>
                                </div>
                            </div>
                            <div className="h-11 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>John Cruz</TypographySmall> </div>
                                <div className=""> <TypographySmall>Montana Cruz</TypographySmall> </div>
                                <div className=""> <TypographySmall>For Approval</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    <TooltipComponent title="Approve">
                                        <Button size="icon" className="size-7 bg-green-600 hover:bg-green-600/90">
                                            <Check />
                                        </Button>
                                    </TooltipComponent>
                                </div>
                            </div>
                            <div className="h-11 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>John Santos</TypographySmall> </div>
                                <div className=""> <TypographySmall>Maria Santos</TypographySmall> </div>
                                <div className=""> <TypographySmall>For Approval</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    <TooltipComponent title="Approve">
                                        <Button size="icon" className="size-7 bg-green-600 hover:bg-green-600/90">
                                            <Check />
                                        </Button>
                                    </TooltipComponent>
                                </div>
                            </div>
                            <div className="h-11 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>John Fernandez</TypographySmall> </div>
                                <div className=""> <TypographySmall>Montana Fernandez</TypographySmall> </div>
                                <div className=""> <TypographySmall>For Approval</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    <TooltipComponent title="Approve">
                                        <Button size="icon" className="size-7 bg-green-600 hover:bg-green-600/90">
                                            <Check />
                                        </Button>
                                    </TooltipComponent>
                                </div>
                            </div>
                        </div>
                    </Card>
            <div className="flex items-center px-4">
                <div className="">
                    <TypographySmall className="text-muted-foreground">10 of 50</TypographySmall>
                </div>
                <div className="mt-4 ml-auto flex items-center gap-2">
                    <Button className="" variant={"outline"}>
                        Page 1 of 5
                    </Button>
                    <Button size="icon" variant={"outline"}>
                        <ChevronsLeft />
                    </Button>
                    <Button size="icon" variant={"outline"}>
                        <ChevronLeft />
                    </Button>
                    <Button size="icon" variant={"outline"}>
                        <ChevronRight />
                    </Button>
                    <Button size="icon" variant={"outline"}>
                        <ChevronsRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}
