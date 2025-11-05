import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyH1, TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight, PillBottle } from "lucide-react";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Vaccine Queue</TypographyLarge>
            
            <div className="mt-6">
                <Card className="shadow-xs rounded-md p-3 grid grid-cols-3 gap-3">
                    <Card className="shadow-xs rounded-md gap-0 p-3">
                        <TypographySmall className="uppercase font-semibold text-center">Skipped Queue</TypographySmall>
                        <div className="grid grid-cols-3 gap-3 mt-3">
                            <div className="rounded-sm shadow-xs border border-border text-center p-2">
                                <span className="text-muted-foreground">QN:</span> <span className="font-medium">10</span>
                            </div>
                            <div className="rounded-sm shadow-xs border border-border text-center p-2">
                                <span className="text-muted-foreground">QN:</span> <span className="font-medium">16</span>
                            </div>
                        </div>
                    </Card>
                    <div className="">
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <Button className="h-10 uppercase">
                                <ChevronLeft />
                                Prev
                            </Button>
                            <Button className="h-10 uppercase">
                                Next
                                <ChevronRight />
                            </Button>
                        </div>
                        <Card className="shadow-none rounded-md gap-0 p-0 border-none">
                            <Card className="shadow-xs rounded-md gap-0 p-3 w-full">
                                <div className="text-center text-primary">
                                    <TypographySmall className="uppercase font-semibold">Current Serving</TypographySmall>
                                </div>
                                <div className="text-center mt-5">
                                    <TypographyH1 className="text-8xl text-destructive">
                                        20
                                    </TypographyH1>
                                </div>
                            </Card>
                            <div className="grid grid-cols-2 gap-3 mt-3">
                                <Card className="shadow-xs rounded-md gap-0 p-3 text-center">
                                    <TypographySmall className="uppercase font-semibold">Total Served</TypographySmall>
                                    <TypographyLarge>19</TypographyLarge>
                                </Card>
                                <Card className="shadow-xs rounded-md gap-0 p-3 text-center">
                                    <TypographySmall className="uppercase font-semibold">Queuing</TypographySmall>
                                    <TypographyLarge>130</TypographyLarge>
                                </Card>
                            </div>
                        </Card>
                    </div>

                    <Card className="shadow-xs rounded-md gap-0 p-3">
                        <TypographySmall className="uppercase font-semibold text-center">Next Serving</TypographySmall>
                        <div className="rounded-sm shadow-xs border border-border text-center p-2 my-3">
                            <span className="text-muted-foreground">QN:</span> <span className="font-medium">21</span>
                        </div>
                        <TypographySmall className="uppercase font-semibold text-center">Waiting</TypographySmall>
                        <div className="grid grid-cols-3 gap-3 mt-3">
                            {Array.from({length:10}).map((_,index) => (
                                <div key={index} className="rounded-sm shadow-xs border border-border text-center p-2">
                                    <span className="text-muted-foreground">QN:</span> <span className="font-medium">{index+22}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </Card>

                <div className="mt-5">
                    <Card className="shadow-xs rounded-md p-3 grid grid-cols-2">
                        <div className="flex items-center gap-2">
                            <TypographySmall className="font-normal text-muted-foreground text-base">Name:</TypographySmall>
                            <TypographySmall className="text-base font-semibold">John Doe</TypographySmall>
                        </div>
                        <div className="flex items-center gap-2">
                            <TypographySmall className="font-normal text-muted-foreground text-base">Sex:</TypographySmall>
                            <TypographySmall className="text-base font-semibold">Male</TypographySmall>
                        </div>
                        <div className="flex items-center gap-2">
                            <TypographySmall className="font-normal text-muted-foreground text-base">Birth Height:</TypographySmall>
                            <TypographySmall className="text-base font-semibold">50 CM</TypographySmall>
                        </div>
                        <div className="flex items-center gap-2">
                            <TypographySmall className="font-normal text-muted-foreground text-base">Birth Weight:</TypographySmall>
                            <TypographySmall className="text-base font-semibold">2.5 KG</TypographySmall>
                        </div>
                    </Card>
                </div>

                <div className="mt-5">
                    <div className="mb-4">
                        <TypographyLarge>Vaccines</TypographyLarge>
                    </div>

                    <div className="space-y-2">
                        <Card className="shadow-xs rounded-md p-3 flex-row items-center gap-3">
                            <div className="size-10 flex items-center justify-center text-primary bg-primary/10 rounded-sm">
                                <PillBottle className="size-5" />    
                            </div>
                            <div className="">
                                <TypographySmall className="text-base">BCG</TypographySmall>
                            </div>
                            <Button className="ml-auto">
                                Received
                            </Button>
                        </Card>
                        <Card className="shadow-xs rounded-md p-3 flex-row items-center gap-3">
                            <div className="size-10 flex items-center justify-center text-primary bg-primary/10 rounded-sm">
                                <PillBottle className="size-5" />    
                            </div>
                            <div className="">
                                <TypographySmall className="text-base">HEPATITIS B</TypographySmall>
                            </div>
                            <Button className="ml-auto">
                                Received
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}