import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { getRankedCities, calculateRevenueProjection } from "@/lib/data/market-analysis"
import { TrendingUp, Users, MapPin, PoundSterlingIcon as Pound } from "lucide-react"

export function CityRankingsTable() {
  const cities = getRankedCities()

  const getOpportunityBadge = (score: number) => {
    if (score >= 80) return { label: "High", variant: "default" as const, color: "bg-lime-500" }
    if (score >= 60) return { label: "Medium", variant: "secondary" as const, color: "bg-yellow-500" }
    return { label: "Low", variant: "outline" as const, color: "bg-gray-400" }
  }

  return (
    <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-sans flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-cyan-600" />
          City Market Opportunity Rankings
        </CardTitle>
        <CardDescription>
          Comprehensive analysis of UK cities ranked by market potential for autonomous vehicle deployment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cities.map((city, index) => {
            const revenue = calculateRevenueProjection(city)
            const badge = getOpportunityBadge(city.marketOpportunity)

            return (
              <div
                key={city.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-white/50 hover:bg-white/80 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-sm font-bold text-gray-600">
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900 font-sans">{city.name}</h3>
                      <Badge variant={badge.variant} className="text-xs">
                        {badge.label}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{(city.population / 1000000).toFixed(1)}M people</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{city.region}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Pound className="w-3 h-3" />
                        <span>£{(city.avgHouseholdIncome / 1000).toFixed(0)}k avg income</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>£{revenue.year3}M Y3 revenue</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Market Score</div>
                    <div className="w-24">
                      <Progress value={city.marketOpportunity} className="h-2" />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{city.marketOpportunity}/100</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
