import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { format } from "date-fns";
import { ArrowUpDown, Eye, Settings2 } from "lucide-react";
import { Menubar, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Audit Logs</TypographyLarge>

            <div className="mt-6">
                <div className="flex items-center gap-3 mb-4">
                    {/* <Menubar className="p-0 border-0 shadow-none">
                        <MenubarMenu>
                            <MenubarTrigger asChild>
                                <Button variant="outline">
                                    <Settings2 />
                                    <span>Filter</span>
                                </Button>
                            </MenubarTrigger>
                            <MenubarContent align="start" alignOffset={0} sideOffset={1}>
                                <div className="">
                                    <MenubarLabel className="text-muted-foreground text-[13px]">Immunization Status</MenubarLabel>
                                    <MenubarItem> <div className="rounded-full size-2 bg-green-600"></div> Active</MenubarItem>
                                    <MenubarItem> <div className="rounded-full size-2 bg-purple-600"></div> Graduate</MenubarItem>
                                    <MenubarItem> <div className="rounded-full size-2 bg-blue-600"></div> Completed</MenubarItem>
                                </div>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar> */}
                    <Button variant="outline">
                        <ArrowUpDown />
                        <span>Sort</span>
                    </Button>

                    <Button variant="outline">
                        <Settings2 />
                        <span>Filter</span>
                    </Button>
                </div>

                <Card className="shadow-xs p-0 gap-0 rounded-lg border-none overflow-hidden">
                    <div className="h-12 grid grid-cols-[repeat(4,_1fr)_10rem] items-center bg-primary text-primary-foreground border border-primary rounded-t-[inherit]">
                        <TypographySmall className="px-4">Date</TypographySmall>
                        <TypographySmall className="px-4">Name</TypographySmall>
                        <TypographySmall className="px-4">Action Made</TypographySmall>
                        <TypographySmall className="px-4">Modified Field</TypographySmall>
                        <TypographySmall className="px-4 text-center"></TypographySmall>
                    </div>
                    <div className="border border-border rounded-b-[inherit] divide-y divide-border">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="h-11 grid grid-cols-[repeat(4,_1fr)_10rem] items-center">
                                <div className="px-4 line-clamp-1"> <TypographySmall>{format(new Date(), "MMMM d, y hh:m:ss a")}</TypographySmall> </div>
                                <div className="px-4 line-clamp-1"> <TypographySmall>John Doe</TypographySmall> </div>
                                <div className="px-4 line-clamp-1"> <TypographySmall>Request vials</TypographySmall> </div>
                                <div className="px-4 line-clamp-1"> <TypographySmall>Lorem ipsum dolor sit</TypographySmall> </div>
                                <div className="px-4 flex items-center justify-center">
                                    <Button variant="outline" size={'icon'} className="size-8">
                                        <Eye />
                                    </Button>
                                </div>
                            </div>
                        ))}
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div className="h-11 grid grid-cols-[repeat(4,_1fr)_10rem] items-center">
                                <div className="px-4 line-clamp-1"> <TypographySmall>{format(new Date(), "MMMM d, y hh:m:ss a")}</TypographySmall> </div>
                                <div className="px-4 line-clamp-1"> <TypographySmall>John Doe</TypographySmall> </div>
                                <div className="px-4 line-clamp-1"> <TypographySmall>Update</TypographySmall> </div>
                                <div className="px-4 line-clamp-1"> <TypographySmall>Lorem ipsum dolor sit</TypographySmall> </div>
                                <div className="px-4 flex items-center justify-center">
                                    <Button variant="outline" size={'icon'} className="size-8">
                                        <Eye />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}