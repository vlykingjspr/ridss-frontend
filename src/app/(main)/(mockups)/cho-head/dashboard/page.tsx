import { Card } from "@/components/ui/card";
import { TypographyH3, TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { VaccinatedChart } from "./_components/vaccinated-chart";
import ForecastChart from "./_components/forecast";

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

            <div className="mt-6">
                <ForecastChart />
            </div>
            
        </div>
    )
}