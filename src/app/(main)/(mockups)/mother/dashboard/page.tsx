import { Card, CardContent } from "@/components/ui/card";
import { TypographyH1, TypographyH3, TypographyLarge, TypographyLead, TypographySmall } from "@/components/ui/typography";
import FingerPrint from "./_components/finger-print";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Props {
    searchParams?: Promise<{ fingerprint: boolean }>
}
export default async function Page({searchParams}: Props) {
    const sp = await searchParams
    const fp = sp?.fingerprint

    return (
        <div className="">
            <TypographyLarge>Dashboard</TypographyLarge>

            <div className="space-y-7 mt-3">
                <div className="space-y-3">
                    <TypographyLead className="text-lg">Child Immunization Status</TypographyLead>
                    <div className="grid grid-cols-3 gap-3">
                        <Card className="!p-2 !py-4 bg-primary/5 border-none shadow-none">
                            <CardContent className="px-1.5 space-y-2 text-center">
                                <TypographyH3>3</TypographyH3>
                                <div className="text-[12px] text-center text-muted-foreground">Needs Immunization</div>
                            </CardContent>
                        </Card>
                        <Card className="!p-2 !py-4 bg-primary/5 border-none shadow-none">
                            <CardContent className="px-1.5 space-y-2 text-center">
                                <TypographyH3>1</TypographyH3>
                                <div className="text-[12px] text-center text-muted-foreground">This Month Immunization</div>
                            </CardContent>
                        </Card>
                        <Card className="!p-2 !py-4 bg-primary/5 border-none shadow-none">
                            <CardContent className="px-1.5 space-y-2 text-center">
                                <TypographyH3>0</TypographyH3>
                                <div className="text-[12px] text-center text-muted-foreground">Complete Immunization</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3" hidden>
                    <Card className="!p-3 relative cursor-pointer hover:dark:bg-zinc-800 transition duration-150">
                        <CardContent className="px-1.5 space-y-2">
                            <div className="text-center">
                                <TypographySmall>Your Queue Number</TypographySmall>

                                <TypographyH1 className="">21</TypographyH1>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="!p-3 relative cursor-pointer hover:dark:bg-zinc-800 transition duration-150">
                        <CardContent className="px-1.5 space-y-2">
                            <div className="text-center">
                                <TypographySmall>Current Serving</TypographySmall>

                                <TypographyH1 className="">5</TypographyH1>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-1.5">
                    <Card className="p-3 rounded-md cursor-pointer border-none shadow-none bg-primary/7">
                        <CardContent className="px-1.5 flex items-center">
                            <TypographySmall className="text-base">Jon Doe</TypographySmall>
                            <Button variant="ghost" className="h-7 ml-auto pointer-events-none !p-0">
                                <div className="text-muted-foreground">
                                    View QR Code
                                </div>
                                <ChevronRight />
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="p-3 rounded-md cursor-pointer border-none shadow-none bg-primary/7">
                        <CardContent className="px-1.5 flex items-center">
                            <TypographySmall className="text-base">Ann Doe</TypographySmall>
                            <Button variant="ghost" className="h-7 ml-auto pointer-events-none !p-0">
                                <div className="text-muted-foreground">
                                    View QR Code
                                </div>
                                <ChevronRight />
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-3">
                    <TypographyLead className="text-lg">Upcoming Schedules</TypographyLead>
                    <div className="space-y-3">
                        <Card className="!p-3 relative cursor-pointer hover:dark:bg-zinc-800 transition duration-150 shadow-none border-none bg-primary/10">
                            <span className="rounded-full size-2.5 dark:bg-blue-500 absolute top-3 right-3"></span>
                            <CardContent className="px-1.5 space-y-2">
                                <TypographyLarge className="text-primary">Immunization Schedule</TypographyLarge>
                                <div className="grid">
                                    <div className="text-[15px] dark:text-zinc-300">
                                        <div className="line-clamp-1">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae labore, eaque ea modi officia sed consequatur numquam porro neque velit molestias vel veniam impedit dolorem! Iure reiciendis libero cumque dolorem?
                                        </div>
                                    </div>
                                    <TypographySmall className="text-xs ml-auto mt-3">Just now</TypographySmall>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="!p-3 cursor-pointer hover:dark:bg-zinc-800 transition duration-150 shadow-none border-none bg-secondary/60">
                            <CardContent className="px-1.5 space-y-2">
                                <TypographyLarge className="text-muted-foreground">Immunization Schedule</TypographyLarge>
                                <div className="grid">
                                    <div className="text-[15px] text-muted-foreground">
                                        <div className="line-clamp-1">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae labore, eaque ea modi officia sed consequatur numquam porro neque velit molestias vel veniam impedit dolorem! Iure reiciendis libero cumque dolorem?
                                        </div>
                                    </div>
                                    <TypographySmall className="text-xs ml-auto mt-3 text-muted-foreground">3d</TypographySmall>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="!p-3 cursor-pointer hover:dark:bg-zinc-800 transition duration-150 shadow-none border-none bg-secondary/60">
                            <CardContent className="px-1.5 space-y-2">
                                <TypographyLarge className="text-muted-foreground">Immunization Schedule</TypographyLarge>
                                <div className="grid">
                                    <div className="text-[15px] text-muted-foreground">
                                        <div className="line-clamp-1">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae labore, eaque ea modi officia sed consequatur numquam porro neque velit molestias vel veniam impedit dolorem! Iure reiciendis libero cumque dolorem?
                                        </div>
                                    </div>
                                    <TypographySmall className="text-xs ml-auto mt-3 text-muted-foreground">4w</TypographySmall>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {fp && (<FingerPrint />)}
        </div>
    )
}