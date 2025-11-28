import SearchInput from "@/components/search-input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographySmall } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Edit, Ellipsis, Eye, Info, Settings2, Trash, Trash2, UserRoundPen } from "lucide-react";
import { Menubar, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function Registered() {
    return (
        <div className="">
            <div className="flex items-center">
                <div className="flex items-center">
                    <Menubar className="border-0 p-0 shadow-none">
                        <MenubarMenu>
                            <MenubarTrigger asChild>
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
                                        {" "}
                                        <div className="size-2 rounded-full bg-green-600"></div> Active
                                    </MenubarItem>
                                    <MenubarItem>
                                        {" "}
                                        <div className="size-2 rounded-full bg-purple-600"></div> Graduate
                                    </MenubarItem>
                                    <MenubarItem>
                                        {" "}
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
            <Card className="gap-0 overflow-hidden rounded-md border-none p-0 shadow-xs">
                <div className="bg-primary border-primary text-primary-foreground border">
                    <div className="bg-primary text-primary-foreground grid h-12 w-full grid-cols-[repeat(5,_1fr)] items-center">
                        <TypographySmall className="px-4">Name</TypographySmall>
                        <TypographySmall className="px-4">Sex</TypographySmall>
                        <TypographySmall className="px-4">Age</TypographySmall>
                        <TypographySmall className="px-4">Status</TypographySmall>
                        <TypographySmall className="px-4 text-center"></TypographySmall>
                    </div>
                </div>
                <div className="border-border divide-border divide-y rounded-b-[inherit] border border-t-0">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <div
                            key={index}
                            className="hover:bg-secondary grid h-11 w-full grid-cols-[repeat(5,_1fr)] items-center transition duration-200"
                        >
                            <div className="line-clamp-1 px-4 text-[15px]">John Doe</div>
                            <div className="line-clamp-1 px-4 text-[15px]">Male</div>
                            <div className="line-clamp-1 px-4 text-[15px]">1 yr/s</div>
                            <div className="px-4 text-[15px]">
                                <div className="shad ow-xs text-muted-foreground border-border flex w-fit items-center gap-2 rounded-full border px-2 py-1 text-xs font-medium">
                                    <div className="size-2 rounded-full bg-green-600"></div>
                                    <span className="">Active</span>
                                </div>
                            </div>
                            <div className="flex justify-center gap-3">
                                <Menubar className="p-0 shadow-none h-fit w-fit border-none">
                                    <MenubarMenu>
                                        <MenubarTrigger asChild>
                                            <Button variant="outline" size="icon" className="size-8">
                                                <Ellipsis />
                                            </Button>
                                        </MenubarTrigger>
                                        <MenubarContent align="end" alignOffset={0} sideOffset={1} className="min-w-42">
                                            <MenubarItem className="h-10 px-3"> <Info className="mr-2 size-4.5" /> View Details</MenubarItem>
                                            <MenubarItem className="h-10 px-3"> <UserRoundPen className="mr-2 size-4.5" /> Edit User</MenubarItem>
                                            <MenubarItem className="h-10 px-3"> <Trash2 className="mr-2 size-4.5" /> Remove User</MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
            <div className="flex items-center px-4">
                <div className="">
                    <TypographySmall className="text-muted-foreground">2 of 50</TypographySmall>
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
