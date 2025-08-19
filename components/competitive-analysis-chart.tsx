"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts"
import { competitorAnalysis } from "@/lib/data/uk-market-data"
import { Building2 } from "lucide-react"

export function CompetitiveAnalysisChart() {
  // Market share data for pie chart
  const marketShareData = competitorAnalysis
    .filter((comp) => comp.marketShare > 0)
    .map((comp) => ({
      name: comp.name,
      value: comp.marketShare,
      type: comp.type,
    }))

  // Add "Others" segment
  const totalMarketShare = marketShareData.reduce((sum, item) => sum + item.value, 0)
  if (totalMarketShare < 100) {
    marketShareData.push({
      name: "Others",
      value: 100 - totalMarketShare,
      type: "Other",
    })
  }

  // Funding data for bar chart
  const fundingData = competitorAnalysis
    .sort((a, b) => b.funding - a.funding)
    .map((comp) => ({
      name: comp.name,
      funding: comp.funding,
      type: comp.type,
      stage: comp.stage,
    }))

  const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"]

  const chartConfig = {
    marketShare: { label: "Market Share", color: "hsl(var(--chart-1))" },
    funding: { label: "Funding ($M)", color: "hsl(var(--chart-2))" },
  }

  return (
    <div className="space-y-6">
      {/* Market Share Pie Chart */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <Building2 className="w-5 h-5 text-cyan-600" />
            Current Market Share Distribution
          </CardTitle>
          <CardDescription>Breakdown of ride-hailing market share in the UK</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={marketShareData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                      labelLine={false}
                    >
                      {marketShareData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload
                          return (
                            <div className="bg-white p-3 border rounded-lg shadow-lg">
                              <p className="font-semibold">{data.name}</p>
                              <p className="text-sm text-gray-600">{data.type}</p>
                              <p className="text-sm">Market Share: {data.value}%</p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            <div className="space-y-3">
              {marketShareData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <div>
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-gray-600">{item.value}% market share</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Funding Comparison */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans">Competitor Funding Analysis</CardTitle>
          <CardDescription>Investment levels and development stage comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={fundingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
                <YAxis
                  scale="log"
                  domain={[1, "dataMax"]}
                  tick={{ fontSize: 12 }}
                  label={{ value: "Funding ($M)", angle: -90, position: "insideLeft" }}
                />
                <ChartTooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload
                      return (
                        <div className="bg-white p-3 border rounded-lg shadow-lg">
                          <p className="font-semibold">{data.name}</p>
                          <p className="text-sm text-gray-600">{data.type}</p>
                          <p className="text-sm">Funding: ${data.funding}M</p>
                          <p className="text-sm">Stage: {data.stage}</p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar dataKey="funding" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
