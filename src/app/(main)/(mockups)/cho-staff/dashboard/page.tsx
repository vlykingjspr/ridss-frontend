import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TypographyH3, TypographyH4, TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { ChartColumnBig, ChevronRight, PillBottle } from "lucide-react";
import ImmunizingBarangay from "../../bhw-staff/dashboard/_components/Immunizing-brangay";
import Link from "next/link";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Dashboard</TypographyLarge>

            <div className="mt-6 grid grid-cols-4 gap-3">
                <Card className="shadow-xs rounded-md gap-0 p-2 px-3">
                    <div className="">
                        <TypographySmall>Pending Vaccine Request</TypographySmall>

                        <TypographyH3 className="">4</TypographyH3>
                    </div>
                </Card>
                <Card className="shadow-xs rounded-md gap-0 p-2 px-3">
                    <div className="">
                        <TypographySmall>Low Stock Vaccine</TypographySmall>

                        <TypographyH3 className="">4</TypographyH3>
                    </div>
                </Card>
                <Card className="shadow-xs rounded-md gap-0 p-2 px-3">
                    <div className="">
                        <TypographySmall>Total No. of Vaccine</TypographySmall>

                        <TypographyH3 className="">12</TypographyH3>
                    </div>
                </Card>
                <Card className="shadow-xs rounded-md gap-0 p-2 px-3">
                    <div className="">
                        <TypographySmall>No. of Barangay</TypographySmall>

                        <TypographyH3 className="">5</TypographyH3>
                    </div>
                </Card>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
                <Card className="shadow-xs rounded-md gap-0 p-3 overflow-hidden h-120">
                    <div className="flex items-center justify-between">
                        <TypographySmall className="text-[15px]">Stocks Alert</TypographySmall>

                        <Button variant="outline" className="cursor-pointer">
                            <span>View Inventory</span>
                            <ChevronRight />
                        </Button>
                    </div>

                    <div className="mt-4 space-y-1">
                        <Card className="shadow-none rounded-sm hover:bg-secondary p-1.5 grid grid-cols-[auto_1fr] gap-3 cursor-pointer">
                            <div className="size-9 flex items-center justify-center bg-primary/20 rounded">
                                <PillBottle className="size-5 text-primary" />
                            </div>
                            <div className="flex flex-col justify-center gap-1.5 leading-0">
                                <div className="flex items-center">
                                    <TypographySmall className="font-semibold">PCV </TypographySmall>
                                    <TypographySmall className="font-normal ml-auto text-[13px]">5 vials left</TypographySmall>
                                </div>
                                <div className="grid grid-cols-[1fr_auto] items-center gap-5">
                                    <Progress baseColor="bg-amber-600/10" progressColor="bg-amber-600" className="w-1/2" max={50} value={5} />
                                    {/* <TypographySmall className="font-normal text-[13px]">15 remaining doses</TypographySmall> */}
                                </div>
                            </div>
                        </Card>
                        <Card className="shadow-none rounded-sm hover:bg-secondary p-1.5 grid grid-cols-[auto_1fr] gap-3 cursor-pointer">
                            <div className="size-9 flex items-center justify-center bg-primary/20 rounded">
                                <PillBottle className="size-5 text-primary" />
                            </div>
                            <div className="flex flex-col justify-center gap-1.5 leading-0">
                                <div className="flex items-center">
                                    <TypographySmall className="font-semibold">BCG </TypographySmall>
                                    <TypographySmall className="font-normal ml-auto text-[13px]">5 vials left</TypographySmall>
                                </div>
                                <div className="grid grid-cols-[1fr_auto] items-center gap-5">
                                    <Progress baseColor="bg-amber-600/10" progressColor="bg-amber-600" className="w-1/2" max={50} value={5} />
                                    {/* <TypographySmall className="font-normal text-[13px]">5 remaining doses</TypographySmall> */}
                                </div>
                            </div>
                        </Card>
                        <Card className="shadow-none rounded-sm hover:bg-secondary p-1.5 grid grid-cols-[auto_1fr] gap-3 cursor-pointer">
                            <div className="size-9 flex items-center justify-center bg-primary/20 rounded">
                                <PillBottle className="size-5 text-primary" />
                            </div>
                            <div className="flex flex-col justify-center gap-1.5 leading-0">
                                <div className="flex items-center">
                                    <TypographySmall className="font-semibold">HEPATITS B </TypographySmall>
                                    <TypographySmall className="font-normal ml-auto text-[13px]">5 vials left</TypographySmall>
                                </div>
                                <div className="grid grid-cols-[1fr_auto] items-center gap-5">
                                    <Progress baseColor="bg-amber-600/10" progressColor="bg-amber-600" className="w-1/2" max={50} value={5} />
                                    {/* <TypographySmall className="font-normal text-[13px]">5 remaining doses</TypographySmall> */}
                                </div>
                            </div>
                        </Card>
                        <Card className="shadow-none rounded-sm hover:bg-secondary p-1.5 grid grid-cols-[auto_1fr] gap-3 cursor-pointer">
                            <div className="size-9 flex items-center justify-center bg-primary/20 rounded">
                                <PillBottle className="size-5 text-primary" />
                            </div>
                            <div className="flex flex-col justify-center gap-1.5 leading-0">
                                <div className="flex items-center">
                                    <TypographySmall className="font-semibold">IPV </TypographySmall>
                                    <TypographySmall className="font-normal ml-auto text-[13px]">5 vials left</TypographySmall>
                                </div>
                                <div className="grid grid-cols-[1fr_auto] items-center gap-5">
                                    <Progress baseColor="bg-amber-600/10" progressColor="bg-amber-600" className="w-1/2" max={50} value={5} />
                                    {/* <TypographySmall className="font-normal text-[13px]">10 remaining doses</TypographySmall> */}
                                </div>
                            </div>
                        </Card>
                    </div>
                </Card>

                <Card className="shadow-xs rounded-md gap-0 p-3 overflow-hidden h-120">
                    <div className="flex items-center justify-between">
                        <TypographySmall className="text-[15px]">Pending Request</TypographySmall>

                        <Button variant="outline" className="cursor-pointer">
                            <span>View Requests</span>
                            <ChevronRight />
                        </Button>
                    </div>
                    <div className="mt-4 space-y-1">
                        <Link href="/cho-staff/vaccine?tab=request">
                            <Card className="shadow-none rounded-sm hover:bg-secondary p-3 py-2 flex-row items-center gap-3 cursor-pointer">
                                <div className="leading-5">
                                    <div className=""><TypographySmall>New Visayas</TypographySmall></div>
                                    <div className=""><TypographySmall className="text-muted-foreground text-[13px]">Issued By: </TypographySmall><TypographySmall className="text-[13px]">Anna Doe</TypographySmall></div>
                                </div>

                                <ChevronRight className="size-4 ml-auto" />
                            </Card>
                        </Link>
                    </div>
                </Card>

                <div className="col-span-full">
                    <ImmunizingBarangay />
                </div>
            </div>
        </div>
    )
}