import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import BarangayCard from "./_components/barangay-card";
import { Check, Loader, Mars, PillBottle, Syringe, UsersRound, Venus } from "lucide-react";
import { TooltipComponent } from "@/components/ui/tooltip";
import VaccinePing from "@/components/ping";
import BarangayStocks from "./_components/barangay-stocks";
import ImmunizingBarangay from "../../bhw-staff/dashboard/_components/Immunizing-brangay";

export default function Page() {
    const status: "shortage" | "sufficient" | "excess" | "used" = "sufficient";

    return (
        <div className="">
            <TypographyLarge>Dashboard</TypographyLarge>

            <div className="mt-6">
                <div className="space-y-3 mb-6">
                    <div className="">
                        <TypographySmall className="text-[15px]">Barangay Stocks Overview</TypographySmall>
                    </div>
                    
                    <BarangayStocks />
                </div>

                <ImmunizingBarangay />

                <Card className="gap-3 rounded-md p-3 shadow-xs" hidden>
                    <div className="mb-1 w-full">
                        <div className="mb-2 flex items-center gap-3 text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <VaccinePing />
                                <TypographySmall>Sufficient Vaccine</TypographySmall>
                            </div>
                            <div className="flex items-center gap-1">
                                <VaccinePing status="shortage" />
                                <TypographySmall>Sufficient Shortage</TypographySmall>
                            </div>
                            <div className="flex items-center gap-1">
                                <VaccinePing status="excess" />
                                <TypographySmall>Vaccine excess</TypographySmall>
                            </div>
                            <div className="flex items-center gap-1">
                                <VaccinePing status="used" />
                                <TypographySmall>Vaccine is used up</TypographySmall>
                            </div>
                        </div>
                        <TypographySmall className="line-clamp-1 text-base leading-5">
                            Actively Immunizing Barangays
                        </TypographySmall>
                    </div>

                    <Card className="relative col-span-full min-h-80 gap-0 rounded-md p-4 shadow-none">
                        <div className="flex items-center gap-3">
                            <TypographySmall className="line-clamp-1 text-[15px] leading-4">
                                Brgy. Lorem Ipsum
                            </TypographySmall>

                            <div className="flex items-center gap-3">
                                <Progress className="h-3.5 w-16" value={75} />
                                <TypographySmall>75%</TypographySmall>
                            </div>
                        </div>

                        <span className="absolute top-3 right-3 flex size-2.5">
                            <span
                                className={cn(
                                    "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 dark:bg-green-500",
                                )}
                            ></span>
                            <span
                                className={cn(
                                    "relative inline-flex size-2.5 rounded-full bg-green-600 dark:bg-green-700",
                                )}
                            ></span>
                        </span>

                        <div className="mt-4">
                            <div className="flex flex-wrap gap-3">
                                <div className="bg-secondary/70 border-border flex items-center gap-1.5 rounded-full border p-px px-2 py-[5px] shadow-xs">
                                    <UsersRound className="size-4 shrink-0" />
                                    <TypographySmall className="">No. of Children Present -</TypographySmall>
                                    <TypographySmall className="">156</TypographySmall>
                                </div>
                                <div className="flex items-center gap-1.5 rounded-full border border-green-300 bg-green-500/10 p-px px-2 py-[5px] shadow-xs">
                                    <Check className="size-4 shrink-0 text-green-600" />
                                    <TypographySmall className="text-green-600">Completed -</TypographySmall>
                                    <TypographySmall className="text-green-600">89</TypographySmall>
                                </div>
                                <div className="flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-500/10 p-px px-2 py-[5px] shadow-xs">
                                    <Loader className="size-4 shrink-0 text-amber-600" />
                                    <TypographySmall className="text-amber-600">Pending -</TypographySmall>
                                    <TypographySmall className="text-amber-600">67</TypographySmall>
                                </div>
                            </div>

                            <div className="mt-7">
                                <TypographySmall className="line-clamp-1 text-sm leading-4 px-3 text-muted-foreground">
                                    Vaccines Available
                                </TypographySmall>

                                <div className="mt-3 space-y-2">
                                    {Array.from({length:4}).map((_, index) => (
                                        <Card key={index} className="grid grid-cols-[1fr_repeat(5,7rem)] h-12 gap-0 rounded-sm p-0 shadow-xs overflow-hidden">
                                            <div className="p-2.5 flex items-center gap-3">
                                                <div className="flex items-center justify-center gap-1">
                                                    <VaccinePing />
                                                </div>
                                                <TypographySmall>Lorem ipsum</TypographySmall>
                                            </div>

                                            <TooltipComponent title="Vials Remaining">
                                                <div className="flex items-center justify-center gap-1 bg-purple-600/10 text-purple-600">
                                                    <PillBottle className="size-4" />
                                                    <TypographySmall>3</TypographySmall>
                                                </div>
                                            </TooltipComponent>
                                            <TooltipComponent title="Doses Remaining">
                                                <div className="flex items-center justify-center gap-1 bg-amber-600/10 text-amber-600">
                                                    <Syringe className="size-4" />
                                                    <TypographySmall>30</TypographySmall>
                                                </div>
                                            </TooltipComponent>
                                            <TooltipComponent title="Male">
                                                <div className="flex items-center justify-center gap-1 bg-blue-600/10 text-blue-600">
                                                    <Mars className="size-4" />
                                                    <TypographySmall>3 of 10</TypographySmall>
                                                </div>
                                            </TooltipComponent>
                                            <TooltipComponent title="Female">
                                                <div className="flex items-center justify-center gap-1 bg-rose-600/10 text-rose-600">
                                                    <Venus className="size-4" />
                                                    <TypographySmall>3 of 5</TypographySmall>
                                                </div>
                                            </TooltipComponent>
                                            <TooltipComponent title="Total Children">
                                                <div className="flex items-center justify-center gap-1 bg-foreground/10">
                                                    <UsersRound className="size-4" />
                                                    <TypographySmall>3 of 15</TypographySmall>
                                                </div>
                                            </TooltipComponent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(16rem,1fr))] gap-3">
                        <BarangayCard status="sufficient" />
                        <BarangayCard status="sufficient" />
                        <BarangayCard status="sufficient" />
                        <BarangayCard status="shortage" />
                        <BarangayCard status="sufficient" />
                        <BarangayCard status="sufficient" />
                    </div>

                </Card>
            </div>
        </div>
    );
}
