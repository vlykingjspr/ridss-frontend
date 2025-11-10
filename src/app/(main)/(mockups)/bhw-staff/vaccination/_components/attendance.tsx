import SearchInput from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import ScanQrCodeButton from "./scan-qr";

export default function VaccineAttendance() {
    return (
        <div className="mt-6">
            <div className="mb-4 flex items-center">
                <ScanQrCodeButton />
                <div className="w-full max-w-sm ml-auto">
                    <SearchInput className="h-10 w-full rounded-md" placeholder="Search child" />
                </div>
            </div>

            <Card className="gap-0 overflow-hidden rounded-md border-none p-0 shadow-xs">
                <div className="border-primary bg-primary text-primary-foreground grid h-12 grid-cols-[repeat(4,_1fr)_10rem] [&>div]:px-4 items-center rounded-t-[inherit] border-b">
                    <div className="">
                        <TypographySmall>Child Name</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall>Sex</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall>Age</TypographySmall>
                    </div>
                    <div className="">
                        <TypographySmall>Vaccine</TypographySmall>
                    </div>
                    <div className="text-center">
                        <TypographySmall>Action</TypographySmall>
                    </div>
                </div>
                <div className="border-border divide-border divide-y rounded-b-[inherit] border border-t-0">
                    <div className="grid h-11 grid-cols-[repeat(4,_1fr)_10rem] [&>div]:px-4 items-center">
                        <div className="">
                            <TypographySmall>John Doe</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Male</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>1 yr</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>BCG</TypographySmall>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button className="h-8" variant="outline">
                                <span>Received</span>
                            </Button>
                        </div>
                    </div>
                    <div className="grid h-11 grid-cols-[repeat(4,_1fr)_10rem] [&>div]:px-4 items-center">
                        <div className="">
                            <TypographySmall>Anton Doze</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>Male</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>1 yr</TypographySmall>
                        </div>
                        <div className="">
                            <TypographySmall>BCG</TypographySmall>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button className="h-8" variant="outline">
                                <span>Received</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="mx-auto mt-5 size-fit rounded-full shadow-xs dark:shadow-white/25">
                <div className="full size-2 rounded shadow-inner shadow-zinc-300/80 dark:shadow-white/25"></div>
            </div>

            <div className="flex items-center px-4" hidden>
                <div className="">
                    <TypographySmall className="text-muted-foreground">10 of 50</TypographySmall>
                </div>
                <div className="mt-4 ml-auto flex items-center gap-2">
                    <Button size="icon" variant={"outline"}>
                        <ChevronLeft />
                    </Button>
                    <Button size="icon" variant={"default"}>
                        1
                    </Button>
                    <Button size="icon" variant={"outline"}>
                        2
                    </Button>
                    <Button size="icon" variant={"outline"}>
                        <Ellipsis />
                    </Button>
                    <Button size="icon" variant={"outline"}>
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}
