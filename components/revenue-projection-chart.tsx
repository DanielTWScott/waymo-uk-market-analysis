"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from "recharts"
import { getRankedCities, calculateRevenueProjection } from "@/lib/data/market-analysis"
import { PoundSterling } from "lucide-react"

export function RevenueProjectionChart() {
  const cities = getRankedCities().slice(0, 4) // Top 4 cities

  // Create time series data
  const years = [2025, 2026, 2027, 2028, 2029, 2030]
  const timeSeriesData = years.map((year) => {
    const yearData: any = { year }
    let totalRevenue = 0

    cities.forEach((city) => {
      const projection = calculateRevenueProjection(city)
      let revenue = 0

      // Calculate revenue based on year
      if (year <= 2025) revenue = projection.year1
      else if (year <= 2027) {
        const progress = (year - 2025) / 2
        revenue = projection.year1 + (projection.year3 - projection.year1) * progress
      } else {
        const progress = (year - 2027) / 3
        revenue = projection.year3 + (projection.year5 - projection.year3) * progress
      }

      yearData[city.name] = Math.round(revenue)
      totalRevenue += revenue
    })

    yearData.total = Math.round(totalRevenue)
    return yearData
  })

  // Cumulative revenue data
  const cumulativeData = years.map((year, index) => {
    const cumulative = timeSeriesData.slice(0, index + 1).reduce((sum, yearData) => sum + yearData.total, 0)
    return {
      year,
      cumulative: Math.round(cumulative),
      annual: timeSeriesData[index].total,
    }
  })

  const chartConfig = {
    London: { label: "London", color: "hsl(var(--chart-1))" },
    Manchester: { label: "Manchester", color: "hsl(var(--chart-2))" },
    Birmingham: { label: "Birmingham", color: "hsl(var(--chart-3))" },
    Leeds: { label: "Leeds", color: "hsl(var(--chart-4))" },
    total: { label: "Total Revenue", color: "hsl(var(--chart-1))" },
    cumulative: { label: "Cumulative Revenue", color: "hsl(var(--chart-2))" },
  }

  return (
    <div className="space-y-6">
      {/* Revenue Projections by City */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <PoundSterling className="w-5 h-5 text-cyan-600" />
            Revenue Projections by City (2025-2030)
          </CardTitle>
          <CardDescription>Projected annual revenue growth across top UK markets</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeSeriesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} label={{ value: "Revenue (£M)", angle: -90, position: "insideLeft" }} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value, name) => [`£${value}M`, name]}
                      labelFormatter={(label) => `Year ${label}`}
                    />
                  }
                />
                <Line type="monotone" dataKey="London" stroke="var(--color-chart-1)" strokeWidth={3} dot={{ r: 4 }} />
                <Line
                  type="monotone"
                  dataKey="Manchester"
                  stroke="var(--color-chart-2)"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="Birmingham"
                  stroke="var(--color-chart-3)"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line type="monotone" dataKey="Leeds" stroke="var(--color-chart-4)" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Cumulative Revenue Growth */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans">Cumulative Revenue Growth</CardTitle>
          <CardDescription>Total market value accumulation over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cumulativeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} label={{ value: "Revenue (£M)", angle: -90, position: "insideLeft" }} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value, name) => [
                        `£${value}M`,
                        name === "cumulative" ? "Cumulative Revenue" : "Annual Revenue",
                      ]}
                      labelFormatter={(label) => `Year ${label}`}
                    />
                  }
                />
                <Area
                  type="monotone"
                  dataKey="cumulative"
                  stroke="var(--color-chart-2)"
                  fill="var(--color-chart-2)"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Line type="monotone" dataKey="annual" stroke="var(--color-chart-1)" strokeWidth={2} dot={{ r: 4 }} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
