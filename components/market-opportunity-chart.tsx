"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, ScatterChart, Scatter } from "recharts"
import { getRankedCities } from "@/lib/data/market-analysis"
import { TrendingUp } from "lucide-react"

export function MarketOpportunityChart() {
  const cities = getRankedCities()

  const chartData = cities.map((city) => ({
    name: city.name,
    opportunity: city.marketOpportunity,
    population: city.population / 1000000, // Convert to millions
    income: city.avgHouseholdIncome / 1000, // Convert to thousands
    region: city.region,
  }))

  const scatterData = cities.map((city) => ({
    x: city.population / 1000000,
    y: city.marketOpportunity,
    name: city.name,
    income: city.avgHouseholdIncome,
    region: city.region,
  }))

  const chartConfig = {
    opportunity: {
      label: "Market Opportunity",
      color: "hsl(var(--chart-1))",
    },
    population: {
      label: "Population (M)",
      color: "hsl(var(--chart-2))",
    },
  }

  return (
    <div className="space-y-6">
      {/* Bar Chart - Market Opportunity by City */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-600" />
            Market Opportunity by City
          </CardTitle>
          <CardDescription>Comparative analysis of market potential across UK cities</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value, name) => [
                        name === "opportunity" ? `${value}/100` : `${value}M`,
                        name === "opportunity" ? "Market Score" : "Population",
                      ]}
                    />
                  }
                />
                <Bar dataKey="opportunity" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Scatter Plot - Population vs Market Opportunity */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans">Population vs Market Opportunity</CardTitle>
          <CardDescription>Relationship between city size and market potential</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={scatterData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis
                  type="number"
                  dataKey="x"
                  name="Population"
                  unit="M"
                  tick={{ fontSize: 12 }}
                  label={{ value: "Population (Millions)", position: "insideBottom", offset: -10 }}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name="Market Opportunity"
                  unit="/100"
                  domain={[0, 100]}
                  tick={{ fontSize: 12 }}
                  label={{ value: "Market Opportunity Score", angle: -90, position: "insideLeft" }}
                />
                <ChartTooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload
                      return (
                        <div className="bg-white p-3 border rounded-lg shadow-lg">
                          <p className="font-semibold">{data.name}</p>
                          <p className="text-sm text-gray-600">{data.region}</p>
                          <p className="text-sm">Population: {data.x.toFixed(1)}M</p>
                          <p className="text-sm">Market Score: {data.y}/100</p>
                          <p className="text-sm">Avg Income: £{(data.income / 1000).toFixed(0)}k</p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Scatter dataKey="y" fill="var(--color-chart-1)" />
              </ScatterChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
