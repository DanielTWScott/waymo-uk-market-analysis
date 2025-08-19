import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { competitorAnalysis } from "@/lib/data/uk-market-data"
import { Building2, MapPin, DollarSign, Activity } from "lucide-react"

export function CompetitiveLandscape() {
  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Commercial":
        return "bg-lime-500"
      case "Pilot":
        return "bg-yellow-500"
      case "Testing":
        return "bg-blue-500"
      default:
        return "bg-gray-400"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Ride-hailing":
        return "🚗"
      case "Delivery":
        return "📦"
      case "Testing":
        return "🧪"
      case "Technology":
        return "⚙️"
      default:
        return "🏢"
    }
  }

  return (
    <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-sans flex items-center gap-2">
          <Building2 className="w-5 h-5 text-cyan-600" />
          Competitive Landscape Analysis
        </CardTitle>
        <CardDescription>
          Current market players, their positioning, and market presence across UK cities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {competitorAnalysis.map((competitor) => (
            <div
              key={competitor.name}
              className="p-4 rounded-lg border bg-white/50 hover:bg-white/80 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{getTypeIcon(competitor.type)}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">{competitor.name}</h3>
                    <p className="text-sm text-gray-600">{competitor.type}</p>
                  </div>
                </div>
                <Badge variant="secondary" className={`text-white ${getStageColor(competitor.stage)}`}>
                  {competitor.stage}
                </Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-600">
                    {competitor.cities.length} cities: {competitor.cities.slice(0, 3).join(", ")}
                    {competitor.cities.length > 3 && ` +${competitor.cities.length - 3} more`}
                  </span>
                </div>

                {competitor.marketShare > 0 && (
                  <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-600">{competitor.marketShare}% market share</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <DollarSign className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-600">${competitor.funding}M funding</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
