"use client";

import React, { useMemo } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Area,
    ComposedChart,
    TooltipProps,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

// Define the shape of your chart data
interface ChartDataPoint {
    month: string;
    actual?: number;
    forecast?: number;
    upper?: number;
    lower?: number;
    trend?: number;
    type: "actual" | "transition" | "forecast";
}

// Reusable color config for consistency
const COLORS = {
    actual: "#2563eb",
    forecast: "#f59e0b",
    trend: "#10b981",
    confidence: "#fbbf24",
};

export default function ForecastChart(): JSX.Element {
    // Historical data
    const historicalData: ChartDataPoint[] = [
        { month: "Jan", actual: 40, type: "actual" },
        { month: "Feb", actual: 30, type: "actual" },
        { month: "Mar", actual: 50, type: "actual" },
        { month: "Apr", actual: 45, type: "actual" },
        { month: "May", actual: 60, type: "actual" },
        { month: "Jun", actual: 55, type: "actual" },
    ];

    // Forecast data with confidence intervals
    const forecastData: ChartDataPoint[] = [
        { month: "Jun", actual: 55, forecast: 55, upper: 55, lower: 55, type: "transition" },
        { month: "Jul", forecast: 62, upper: 68, lower: 56, type: "forecast" },
        { month: "Aug", forecast: 65, upper: 73, lower: 57, type: "forecast" },
        { month: "Sep", forecast: 70, upper: 80, lower: 60, type: "forecast" },
        { month: "Oct", forecast: 75, upper: 88, lower: 62, type: "forecast" },
        { month: "Nov", forecast: 80, upper: 95, lower: 65, type: "forecast" },
    ];

    // Combine data for chart
    const chartData: ChartDataPoint[] = [...historicalData, ...forecastData];

    // Simple linear regression for trend
    const calculateTrend = (data: ChartDataPoint[]) => {
        const n = data.length;
        const sumX = data.reduce((sum, _, i) => sum + i, 0);
        const sumY = data.reduce((sum, d) => sum + (d.actual ?? 0), 0);
        const sumXY = data.reduce((sum, d, i) => sum + i * (d.actual ?? 0), 0);
        const sumX2 = data.reduce((sum, _, i) => sum + i * i, 0);

        const denominator = n * sumX2 - sumX * sumX;
        const slope = denominator !== 0 ? (n * sumXY - sumX * sumY) / denominator : 0;
        const intercept = (sumY - slope * sumX) / n;

        return { slope, intercept };
    };

    // Memoized calculations to prevent re-renders
    const { slope, intercept } = useMemo(() => calculateTrend(historicalData), [historicalData]);

    const dataWithTrend: ChartDataPoint[] = useMemo(
        () =>
            chartData.map((d, i) => ({
                ...d,
                trend: Math.round(slope * i + intercept),
            })),
        [chartData, slope, intercept],
    );

    // Typed custom tooltip
    const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const firstPayload = payload[0].payload as ChartDataPoint;
            const isForecast = firstPayload.type === "forecast";

            return (
                <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
                    <p className="mb-1 text-sm font-semibold">{label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} className="text-sm" style={{ color: entry.color }}>
                            {entry.name}: {entry.value?.toLocaleString()}
                            {isForecast && entry.name === "Forecast" && " (predicted)"}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <Card className="gap-0 overflow-hidden rounded-md shadow-xs">
            <CardHeader>
                <CardTitle>Vaccine Forceast</CardTitle>
                <CardDescription>Dashed line indicates predicted values</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
                <ResponsiveContainer width="100%" height={300} minHeight={300}>
                    <LineChart data={dataWithTrend}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="actual"
                            stroke={COLORS.actual}
                            strokeWidth={2}
                            name="Actual"
                            dot={{ fill: COLORS.actual, r: 4 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="forecast"
                            stroke={COLORS.forecast}
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            name="Forecast"
                            dot={{ fill: COLORS.forecast, r: 4 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="trend"
                            stroke={COLORS.trend}
                            strokeWidth={1}
                            strokeDasharray="3 3"
                            name="Trend"
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );

    // return (
    //     <div className="min-h-screen w-full space-y-6 bg-gray-50 p-6">
    //         <div className="mx-auto max-w-6xl space-y-6">
    //             <div className="text-center">
    //                 <h1 className="mb-2 text-3xl font-bold text-gray-900">Sales Forecast Dashboard</h1>
    //                 <p className="text-gray-600">
    //                     Historical data with predictive forecasting and confidence intervals
    //                 </p>
    //             </div>

    //             {/* Method 1: Line Chart with Forecast */}
    //             <Card className="shadow-xs rounded-md gap-0 p-0 overflow-hidden">
    //                 <CardHeader>
    //                     <CardTitle>Line Chart with Forecast</CardTitle>
    //                     <CardDescription>Dashed line indicates predicted values</CardDescription>
    //                 </CardHeader>
    //                 <CardContent>
    //                     <ResponsiveContainer width="100%" height={300} minHeight={300}>
    //                         <LineChart data={dataWithTrend}>
    //                             <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
    //                             <XAxis dataKey="month" />
    //                             <YAxis />
    //                             <Tooltip content={<CustomTooltip />} />
    //                             <Legend />
    //                             <Line
    //                                 type="monotone"
    //                                 dataKey="actual"
    //                                 stroke={COLORS.actual}
    //                                 strokeWidth={2}
    //                                 name="Actual"
    //                                 dot={{ fill: COLORS.actual, r: 4 }}
    //                             />
    //                             <Line
    //                                 type="monotone"
    //                                 dataKey="forecast"
    //                                 stroke={COLORS.forecast}
    //                                 strokeWidth={2}
    //                                 strokeDasharray="5 5"
    //                                 name="Forecast"
    //                                 dot={{ fill: COLORS.forecast, r: 4 }}
    //                             />
    //                             <Line
    //                                 type="monotone"
    //                                 dataKey="trend"
    //                                 stroke={COLORS.trend}
    //                                 strokeWidth={1}
    //                                 strokeDasharray="3 3"
    //                                 name="Trend"
    //                                 dot={false}
    //                             />
    //                         </LineChart>
    //                     </ResponsiveContainer>
    //                 </CardContent>
    //             </Card>

    //             {/* Method 2: Forecast with Confidence Interval */}
    //             <Card hidden>
    //                 <CardHeader>
    //                     <CardTitle>Forecast with Confidence Interval</CardTitle>
    //                     <CardDescription>Shaded area shows prediction uncertainty range</CardDescription>
    //                 </CardHeader>
    //                 <CardContent>
    //                     <ResponsiveContainer width="100%" height={300} minHeight={300}>
    //                         <ComposedChart data={dataWithTrend}>
    //                             <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
    //                             <XAxis dataKey="month" />
    //                             <YAxis />
    //                             <Tooltip content={<CustomTooltip />} />
    //                             <Legend />

    //                             {/* Confidence interval */}
    //                             <Area
    //                                 type="monotone"
    //                                 dataKey="upper"
    //                                 stroke="none"
    //                                 fill={COLORS.confidence}
    //                                 fillOpacity={0.2}
    //                                 name="Upper Bound"
    //                             />
    //                             <Area
    //                                 type="monotone"
    //                                 dataKey="lower"
    //                                 stroke="none"
    //                                 fill={COLORS.confidence}
    //                                 fillOpacity={0.2}
    //                                 name="Lower Bound"
    //                             />

    //                             <Line
    //                                 type="monotone"
    //                                 dataKey="actual"
    //                                 stroke={COLORS.actual}
    //                                 strokeWidth={3}
    //                                 name="Actual"
    //                                 dot={{ fill: COLORS.actual, r: 5 }}
    //                             />

    //                             <Line
    //                                 type="monotone"
    //                                 dataKey="forecast"
    //                                 stroke={COLORS.forecast}
    //                                 strokeWidth={3}
    //                                 strokeDasharray="8 4"
    //                                 name="Forecast"
    //                                 dot={{
    //                                     fill: COLORS.forecast,
    //                                     r: 5,
    //                                     strokeWidth: 2,
    //                                     stroke: "#fff",
    //                                 }}
    //                             />
    //                         </ComposedChart>
    //                     </ResponsiveContainer>
    //                 </CardContent>
    //             </Card>

    //             {/* Legend Guide */}
    //             <Card hidden>
    //                 <CardHeader>
    //                     <CardTitle>Chart Indicators Guide</CardTitle>
    //                 </CardHeader>
    //                 <CardContent className="space-y-3">
    //                     <div className="flex items-center gap-3">
    //                         <div className="h-0.5 w-12 bg-blue-600"></div>
    //                         <span className="text-sm">
    //                             <strong>Solid line:</strong> Historical actual data
    //                         </span>
    //                     </div>
    //                     <div className="flex items-center gap-3">
    //                         <div className="h-0.5 w-12 border-t-2 border-dashed border-amber-500 bg-amber-500"></div>
    //                         <span className="text-sm">
    //                             <strong>Dashed line:</strong> Predicted/forecasted values
    //                         </span>
    //                     </div>
    //                     <div className="flex items-center gap-3">
    //                         <div className="h-4 w-12 bg-amber-300 opacity-30"></div>
    //                         <span className="text-sm">
    //                             <strong>Shaded area:</strong> Confidence interval
    //                         </span>
    //                     </div>
    //                     <div className="flex items-center gap-3">
    //                         <div className="h-0.5 w-12 border-t-2 border-dotted border-green-500 bg-green-500"></div>
    //                         <span className="text-sm">
    //                             <strong>Trend line:</strong> Overall data trend direction
    //                         </span>
    //                     </div>
    //                 </CardContent>
    //             </Card>
    //         </div>
    //     </div>
    // );
}
