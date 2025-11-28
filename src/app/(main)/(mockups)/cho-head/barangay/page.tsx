import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { ChevronDown, Ellipsis, Info, UserRoundCheck, UserRoundX, UserRoundPlus, Building2, Edit, PenLine } from "lucide-react";
import NewBarangay from "./_components/new-barangay";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Barangay</TypographyLarge>

            <div className="mt-6">
                <div className="flex items-center mb-4">
                    <NewBarangay />
                </div>

                <div className="mt-4 hidden gri d grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-3">
                    <Card className="gap-3 p-3 rounded-md shadow-xs flex-row items-center relative">
                        <Button className="absolute top-1 right-1 size-7 cursor-pointer" size="icon" variant="ghost">
                            <PenLine className="size-3.5" />
                        </Button>
                        <div className="size-10 flex items-center justify-center">
                            <Building2 className="size-6 text-muted-foreground" />
                        </div>
                        <div className="">
                            <TypographySmall className="text-[15px]">New Pandan</TypographySmall>
                            <div className="text-[13px]">
                                <span className="text-sm text-muted-foreground text-[13px]">Head: </span>
                                <TypographySmall className="text-[13px]">Chloe May Santos</TypographySmall>
                            </div>
                        </div>
                    </Card>
                    <Card className="gap-3 p-3 rounded-md shadow-xs flex-row items-center relative">
                        <Button className="absolute top-1 right-1 size-7 cursor-pointer" size="icon" variant="ghost">
                            <PenLine className="size-3.5" />
                        </Button>
                        <div className="size-10 flex items-center justify-center">
                            <Building2 className="size-6 text-muted-foreground" />
                        </div>
                        <div className="">
                            <TypographySmall className="text-[15px]">New Malitbog</TypographySmall>
                            <div className="text-[13px]">
                                <span className="text-sm text-muted-foreground text-[13px]">Head: </span>
                                <TypographySmall className="text-[13px]">Jasper Vell</TypographySmall>
                            </div>
                        </div>
                    </Card>
                    <Card className="gap-3 p-3 rounded-md shadow-xs flex-row items-center relative">
                        <Button className="absolute top-1 right-1 size-7 cursor-pointer" size="icon" variant="ghost">
                            <PenLine className="size-3.5" />
                        </Button>
                        <div className="size-10 flex items-center justify-center">
                            <Building2 className="size-6 text-muted-foreground" />
                        </div>
                        <div className="">
                            <TypographySmall className="text-[15px]">San Pedro</TypographySmall>
                            <div className="text-[13px]">
                                <span className="text-sm text-muted-foreground text-[13px]">Head: </span>
                                <TypographySmall className="text-[13px]">Ian Grace</TypographySmall>
                            </div>
                        </div>
                    </Card>
                </div>

                <Card className="rounded-md shadow-xs p-0 gap-0 border-none">
                    <div className="h-12 bg-primary border border-primary rounded-t-[inherit] text-primary-foreground grid grid-cols-[repeat(2,_1fr)_5rem] items-center [&>div]:px-4">
                        <div className=""> <TypographySmall>Barangay</TypographySmall> </div>
                        <div className=""> <TypographySmall>Head</TypographySmall> </div>
                        <div className=""> <TypographySmall></TypographySmall> </div>
                    </div>
                    <div className="rounded-b-[inherit] border border-t-0 border-border divide-y divide-border">
                        <div className="h-12 grid grid-cols-[repeat(2,_1fr)_5rem] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>Brgy. Malativas</TypographySmall> </div>
                            <div className=""> Chloe Doe </div>
                            <div className="flex justify-end"> 
                                <Menubar className="p-0 shadow-none h-fit w-fit border-none">
                                    <MenubarMenu>
                                        <MenubarTrigger asChild>
                                            <Button variant="outline" size="icon" className="size-8">
                                                <Ellipsis />
                                            </Button>
                                        </MenubarTrigger>
                                        <MenubarContent align="end" alignOffset={0} sideOffset={1} className="min-w-42">
                                            <MenubarItem className="h-10 px-3"> <Info className="mr-2 size-4.5" /> View Details</MenubarItem>
                                            <MenubarItem className="h-10 px-3"> <PenLine className="mr-2 size-4.5" /> Edit Barangay</MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* <Card className="rounded-md shadow-xs p-0 gap-0 border-none">
                    <div className="h-12 bg-primary border border-primary rounded-t-[inherit] text-primary-foreground grid grid-cols-[repeat(4,_1fr)_5rem] items-center [&>div]:px-4">
                        <div className=""> <TypographySmall>Barangay</TypographySmall> </div>
                        <div className=""> <TypographySmall>Head</TypographySmall> </div>
                        <div className=""> <TypographySmall>Role</TypographySmall> </div>
                        <div className=""> <TypographySmall>Place of Assignment</TypographySmall> </div>
                        <div className=""> <TypographySmall></TypographySmall> </div>
                    </div>
                    <div className="rounded-b-[inherit] border border-t-0 border-border divide-y divide-border">
                        <div className="h-12 grid grid-cols-[repeat(4,_1fr)_5rem] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>John Doe</TypographySmall> </div>
                            <div className=""> 
                                <Menubar className="p-0 shadow-none h-fit w-fit border-none">
                                    <MenubarMenu>
                                        <MenubarTrigger asChild>
                                            <Button variant="outline" className="h-8">
                                                <span>Lorem ipsum dolor</span>
                                                <ChevronDown className="size-4 ml-auto" />
                                            </Button>
                                        </MenubarTrigger>
                                        <MenubarContent alignOffset={0} sideOffset={1} className="min-w-44">
                                            <MenubarItem>Lorem ipsum dolor</MenubarItem>
                                            <MenubarItem>Lorem ipsum dolor</MenubarItem>
                                            <MenubarItem>Lorem ipsum dolor</MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>    
                            </div>
                            <div className=""> 
                                <Menubar className="p-0 shadow-none h-fit w-fit border-none">
                                    <MenubarMenu>
                                        <MenubarTrigger asChild>
                                            <Button variant="outline" className="h-8">
                                                <span>Lorem ipsum dolor</span>
                                                <ChevronDown className="size-4 ml-auto" />
                                            </Button>
                                        </MenubarTrigger>
                                        <MenubarContent alignOffset={0} sideOffset={1} className="min-w-44">
                                            <MenubarItem>Lorem ipsum dolor</MenubarItem>
                                            <MenubarItem>Lorem ipsum dolor</MenubarItem>
                                            <MenubarItem>Lorem ipsum dolor</MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>    
                            </div>
                            <div className=""> <TypographySmall>Brgy. New Visayas</TypographySmall> </div>
                            <div className="flex justify-end"> 
                                <Menubar className="p-0 shadow-none h-fit w-fit border-none">
                                    <MenubarMenu>
                                        <MenubarTrigger asChild>
                                            <Button variant="outline" size="icon" className="size-8">
                                                <Ellipsis />
                                            </Button>
                                        </MenubarTrigger>
                                        <MenubarContent align="end" alignOffset={0} sideOffset={1} className="min-w-40">
                                            <MenubarItem> <Info className="size-4 mr-2" /> Details</MenubarItem>
                                            <MenubarItem> <UserRoundCheck className="size-4 mr-2" /> Activate</MenubarItem>
                                            <MenubarItem variant="destructive"> <UserRoundX className="size-4 mr-2 text-inherit" /> Deactivate</MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                            </div>
                        </div>
                    </div>
                </Card> */}
            </div>
        </div>
    )
}