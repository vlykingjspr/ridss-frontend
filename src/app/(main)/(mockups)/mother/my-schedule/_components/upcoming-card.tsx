import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";

interface Props {
    isToday?: boolean;
    onCancel: CallableFunction;
    onAttend: CallableFunction;
}
export default function UpcomingImmunizationCard({ isToday, onCancel, onAttend }: Props) {
    return (
        <Card className="!p-3">
            <CardContent className="space-y-2 px-1.5">
                <div className="text-sm text-right">
                    <TypographySmall className="text-muted-foreground font-normal text-xs">{isToday ? "1h" : "2d"} ago</TypographySmall>
                </div>
                <TypographyLarge className="">Scheduled Immunization</TypographyLarge>
                <div className="grid gap-4">
                    <div className="text-[15px] dark:text-zinc-300">
                        <div className="">
                            Your child is scheduled for immunization {isToday && "today"}{" "}
                            <span className="font-medium">December 11, 2025</span> at{" "}
                            <span className="font-medium">10:30 AM</span>
                        </div>
                        <div className="mt-2.5 text-sm">
                            Child to immunize: <span className="font-medium">John Doe</span>
                        </div>
                        <div className="text-sm">
                            Immunization Type: <span className="font-medium">OPV</span>
                        </div>
                        <div className="text-sm">
                            Immunization Dose: <span className="font-medium">2nd</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <Button onClick={() => onAttend(true)}>Can Attend</Button>
                        <Button variant={"secondary"} onClick={() => onCancel(true)}>
                            Cannot to Attend
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
