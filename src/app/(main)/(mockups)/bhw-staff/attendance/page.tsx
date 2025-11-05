import SearchInput from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto">
            <TypographyLarge>Attendance</TypographyLarge>

            <div className="mt-6">
                <div className="max-w-sm w-full mb-4 ml-auto">
                    <SearchInput className="h-10 w-full rounded-md" placeholder="Search child" />
                </div>

                <Card className="rounded-md shadow-xs overflow-hidden border-none p-0 gap-0">
                    <div className="h-12 grid grid-cols-[repeat(1,_1fr)_10rem] border-b border-primary bg-primary text-primary-foreground items-center rounded-t-[inherit]">
                        <div className="px-4">
                            <TypographySmall>Child Name</TypographySmall>
                        </div>
                        <div className="px-4 text-center">
                            <TypographySmall>Action</TypographySmall>
                        </div>
                    </div>
                    <div className="border border-t-0 border-border divide-y divide-border rounded-b-[inherit]">
                        <div className="h-11 grid grid-cols-[repeat(1,_1fr)_10rem] items-center">
                            <div className="px-4">
                                <TypographySmall>John Doe</TypographySmall>
                            </div>
                            <div className="px-4 flex items-center justify-center">
                                <Button className="bg-green-600 h-8">
                                    <span>Present</span>
                                </Button>
                            </div>
                        </div>
                        <div className="h-11 grid grid-cols-[repeat(1,_1fr)_10rem] items-center">
                            <div className="px-4">
                                <TypographySmall>John Doe</TypographySmall>
                            </div>
                            <div className="px-4 flex items-center justify-center">
                                <Button className="bg-green-600 h-8">
                                    <span>Present</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                    <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
                </div>

                <div className="flex items-center px-4" hidden>
                    <div className="">
                        <TypographySmall className="text-muted-foreground">10 of 50</TypographySmall>
                    </div>
                    <div className="flex items-center gap-2 mt-4 ml-auto">
                        <Button size="icon" variant={'outline'}>
                            <ChevronLeft />
                        </Button>
                        <Button size="icon" variant={'default'}>1</Button>
                        <Button size="icon" variant={'outline'}>2</Button>
                        <Button size="icon" variant={'outline'}><Ellipsis /></Button>
                        <Button size="icon" variant={'outline'}>
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}