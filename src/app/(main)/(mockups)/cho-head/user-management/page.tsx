import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { ridsUsers } from "@/data/users";
import { ChevronDown, Ellipsis, Info, UserRoundCheck, UserRoundX, UserRoundPlus, PenLine, Edit, UserPen, UserRoundPen } from "lucide-react";
import { NewUserButton } from "./_components/new-user";
import UsersTab from "./_components/tab";

interface Props {
    searchParams: Promise<{ tab: "active" | "inactive" }>
}
export default async function Page({ searchParams }: Props) {
    const sp = await searchParams
    const tab = sp.tab || "active"

    return (
        <div className="">
            <TypographyLarge>User Management</TypographyLarge>

            <div className="mt-6">
                <div className="flex items-center mb-4">
                    <UsersTab tab={tab} />

                    <NewUserButton />
                </div>

                <Card className="rounded-md shadow-xs p-0 gap-0 border-none">
                    <div className="h-12 bg-primary border border-primary rounded-t-[inherit] text-primary-foreground grid grid-cols-[repeat(4,_1fr)_5rem] items-center [&>div]:px-4">
                        <div className=""> <TypographySmall>User</TypographySmall> </div>
                        <div className=""> <TypographySmall>Position</TypographySmall> </div>
                        <div className=""> <TypographySmall>Role</TypographySmall> </div>
                        <div className=""> <TypographySmall>Place of Assignment</TypographySmall> </div>
                        <div className=""> <TypographySmall></TypographySmall> </div>
                    </div>
                    <div className="rounded-b-[inherit] border border-t-0 border-border divide-y divide-border">

                        {ridsUsers.map((user) => user.role != "mother" && (
                            <div key={user.id} className="h-12 grid grid-cols-[repeat(4,_1fr)_5rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>{user.name}</TypographySmall> </div>
                                <div className=""> {{
                                    "bhw-head": "Barangay Health Worker",
                                    "bhw-staff": "Barangay Health Worker",
                                    "cho-head": "City Health Office",
                                    "cho-staff": "City Health Office",
                                }[user.role]} </div>
                                <div className=""> {{
                                    "bhw-head": "Head",
                                    "bhw-staff": "Staff",
                                    "cho-head": "Head",
                                    "cho-staff": "Staff",
                                }[user.role]} </div>
                                <div className=""> <TypographySmall>Brgy. New Visayas</TypographySmall> </div>
                                <div className="flex justify-end"> 
                                    <Menubar className="p-0 shadow-none h-fit w-fit border-none">
                                        <MenubarMenu>
                                            <MenubarTrigger asChild>
                                                <Button variant="outline" size="icon" className="size-8">
                                                    <Ellipsis />
                                                </Button>
                                            </MenubarTrigger>
                                            <MenubarContent align="end" alignOffset={0} sideOffset={1} className="min-w-42">
                                                <MenubarItem className="h-10 px-3"> <Info className="size-4.5 mr-2" /> View Details</MenubarItem>
                                                <MenubarItem className="h-10 px-3"> <UserRoundPen className="size-4.5 mr-2" /> Edit User</MenubarItem>
                                            </MenubarContent>
                                        </MenubarMenu>
                                    </Menubar>
                                </div>
                            </div>
                        ))}
                        <div className="h-12 grid grid-cols-[repeat(4,_1fr)_5rem] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>John Doe</TypographySmall> </div>
                            <div className=""> Barangay Health Worker </div>
                            <div className=""> Staff </div>
                            <div className=""> <TypographySmall>Brgy. New Visayas</TypographySmall> </div>
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
                                            <MenubarItem className="h-10 px-3"> <UserRoundPen className="mr-2 size-4.5" /> Edit User</MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}