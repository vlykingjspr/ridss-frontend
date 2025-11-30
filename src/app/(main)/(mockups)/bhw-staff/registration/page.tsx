import Tab from "./_components/tab";
import SearchInput from "@/components/search-input";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { Check, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis, Eye, PenLine, SlidersHorizontal } from "lucide-react";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Fragment } from "react";

type Props = {
    searchParams?: { tab: string }
}

// async function getApiAddress<T>(
//     route: string,
//     setData: (data: Array<T>) => void
// ) {
//     try {
//         const response = await window.axios.get(route);

//         setData(response.data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }
// type BARANGAY = {
//     code: string;
//     name: string;
//     oldName: string;
//     subMunicipalityCode: string;
//     cityCode: string;
//     municipalityCode: string;
//     districtCode: string;
//     provinceCode: string;
//     regionCode: string;
//     islandGroupCode: string;
// };
// const onCityMunicipalitySelect = (CMCode: string) => {
//     getApiAddress<BARANGAY>(
//         "https://psgc.gitlab.io/api/cities-municipalities/" +
//             CMCode +
//             "/barangays.json",
//         setBarangay
//     );
// };
export default function Page({ searchParams }: Props) {
    const tabs = searchParams?.tab

    return (
        <div className="">
            <TypographyLarge>Registration</TypographyLarge>

            <div className="mt-5 w-full">
                <div className="mt-3">
                    <div className="flex items-center mb-3">
                        <Tab />

                        <div className="flex justify-end gap-3 grow">
                            <div className="flex items-center">
                                <Menubar className="border-none !p-0 shadow-none">
                                    <MenubarMenu>
                                        <MenubarTrigger asChild>
                                            <Button variant="outline" className="h-10 !rounded-md">
                                                <SlidersHorizontal className="" />
                                                <span>Filter</span>
                                            </Button>
                                        </MenubarTrigger>
                                        <MenubarContent align="end" alignOffset={0} sideOffset={1} className="round ed-sm">
                                            <MenubarItem></MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                            </div>

                            <div className="max-w-sm w-full">
                                <SearchInput className="h-10 w-full rounded-md" placeholder="Search child" />
                            </div>
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
                            <div className="h-12 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>John Doe</TypographySmall> </div>
                                <div className=""> <TypographySmall>Montana Doe</TypographySmall> </div>
                                <div className=""> <TypographySmall>Active</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    {tabs === 'pending' && (<Button size="icon" className="size-8 bg-green-600 hover:bg-green-600/90">
                                        <Check />
                                    </Button>)}
                                    {tabs === 'all' && (
                                        <Fragment>
                                            <Button size="icon" variant="outline" className="size-8">
                                                <PenLine />
                                            </Button>
                                            <Button size="icon" variant="outline" className="size-8">
                                                <Eye />
                                            </Button>
                                        </Fragment>
                                    )}
                                </div>
                            </div>
                            <div className="h-12 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>Juan Santos</TypographySmall> </div>
                                <div className=""> <TypographySmall> Jerry Santos</TypographySmall> </div>
                                <div className=""> <TypographySmall>Active</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    {tabs === 'pending' && (<Button size="icon" className="size-8 bg-green-600 hover:bg-green-600/90">
                                        <Check />
                                    </Button>)}
                                    {tabs === 'all' && (
                                        <Fragment>
                                            <Button size="icon" variant="outline" className="size-8">
                                                <PenLine />
                                            </Button>
                                            <Button size="icon" variant="outline" className="size-8">
                                                <Eye />
                                            </Button>
                                        </Fragment>
                                    )}
                                </div>
                            </div>
                            <div className="h-12 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>Miguel Villanueva</TypographySmall> </div>
                                <div className=""> <TypographySmall>Adrian Villanueva</TypographySmall> </div>
                                <div className=""> <TypographySmall>Active</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    {tabs === 'pending' && (<Button size="icon" className="size-8 bg-green-600 hover:bg-green-600/90">
                                        <Check />
                                    </Button>)}
                                    {tabs === 'all' && (
                                        <Fragment>
                                            <Button size="icon" variant="outline" className="size-8">
                                                <PenLine />
                                            </Button>
                                            <Button size="icon" variant="outline" className="size-8">
                                                <Eye />
                                            </Button>
                                        </Fragment>
                                    )}
                                </div>
                            </div>
                             <div className="h-12 grid grid-cols-[repeat(3,_1fr)_10rem] items-center [&>div]:px-4">
                                <div className=""> <TypographySmall>Paolo Fernandez</TypographySmall> </div>
                                <div className=""> <TypographySmall>Jericho Fernandez</TypographySmall> </div>
                                <div className=""> <TypographySmall>Active</TypographySmall> </div>
                                <div className="flex items-center justify-center gap-3">
                                    {tabs === 'pending' && (<Button size="icon" className="size-8 bg-green-600 hover:bg-green-600/90">
                                        <Check />
                                    </Button>)}
                                    {tabs === 'all' && (
                                        <Fragment>
                                            <Button size="icon" variant="outline" className="size-8">
                                                <PenLine />
                                            </Button>
                                            <Button size="icon" variant="outline" className="size-8">
                                                <Eye />
                                            </Button>
                                        </Fragment>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="flex items-center px-4">
                        <div className="">
                            <TypographySmall className="text-muted-foreground">2 of 50</TypographySmall>
                        </div>
                        <div className="flex items-center gap-2 mt-4 ml-auto">
                            <Button className="" variant={'outline'}>
                                Page 1 of 5
                            </Button>
                            <Button size="icon" variant={'outline'}>
                                <ChevronsLeft />
                            </Button>
                            <Button size="icon" variant={'outline'}>
                                <ChevronLeft />
                            </Button>
                            <Button size="icon" variant={'outline'}>
                                <ChevronRight />
                            </Button>
                            <Button size="icon" variant={'outline'}>
                                <ChevronsRight />
                            </Button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}