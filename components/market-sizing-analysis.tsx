import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ukCitiesData } from "@/lib/data/uk-market-data"
import { TrendingUp, Users, PoundSterling, Target, Calculator } from "lucide-react"

export function MarketSizingAnalysis() {
  // Calculate market sizing metrics
  const totalPopulation = ukCitiesData.reduce((sum, city) => sum + city.population, 0)
  const totalHouseholds = Math.round(totalPopulation / 2.4) // UK avg household size
  const avgIncome = ukCitiesData.reduce((sum, city) => sum + city.avgHouseholdIncome, 0) / ukCitiesData.length

  // TAM calculation (Total Addressable Market)
  const transportSpendPerHousehold = 3000 // Annual transport spend per household
  const avPenetrationRate = 0.15 // 15% penetration by 2030
  const tam = Math.round((totalHouseholds * transportSpendPerHousehold * avPenetrationRate) / 1000000) // in millions

  // Market segments
  const segments = [
    {
      name: "Premium Urban",
      description: "High-income urban areas with excellent infrastructure",
      population: 3.2,
      penetration: 25,
      revenue: 180,
      cities: ["London", "Bristol"],
    },
    {
      name: "Mass Market Urban",
      description: "Mid-income urban centers with good transport links",
      population: 8.1,
      penetration: 15,
      revenue: 320,
      cities: ["Manchester", "Birmingham", "Leeds"],
    },
    {
      name: "Emerging Markets",
      description: "Growing cities with developing infrastructure",
      population: 4.2,
      penetration: 8,
      revenue: 85,
      cities: ["Glasgow", "Other cities"],
    },
  ]

  const businessModels = [
    {
      model: "Ride-Hailing",
      marketShare: 45,
      revenuePerRide: 12,
      ridesPerDay: 850000,
      annualRevenue: 3723,
    },
    {
      model: "Subscription Service",
      marketShare: 25,
      monthlyFee: 299,
      subscribers: 125000,
      annualRevenue: 448,
    },
    {
      model: "Corporate Partnerships",
      marketShare: 20,
      contractValue: 2.5,
      contracts: 150,
      annualRevenue: 375,
    },
    {
      model: "Delivery Services",
      marketShare: 10,
      revenuePerDelivery: 8,
      deliveriesPerDay: 45000,
      annualRevenue: 131,
    },
  ]

  return (
    <div className="space-y-6">
      {/* TAM Overview */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-600" />
            Total Addressable Market (TAM) Analysis
          </CardTitle>
          <CardDescription>Comprehensive market sizing for autonomous vehicle services in the UK</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 font-sans">£{tam}B</div>
              <div className="text-sm text-gray-600">Total TAM by 2030</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-600 font-sans">
                {(totalPopulation / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-600">Target Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 font-sans">
                {(totalHouseholds / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-600">Households</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 font-sans">15%</div>
              <div className="text-sm text-gray-600">Est. Penetration</div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2 font-sans">TAM Calculation Methodology</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div>• Population: {(totalPopulation / 1000000).toFixed(1)}M people across 6 major cities</div>
              <div>• Households: {(totalHouseholds / 1000000).toFixed(1)}M (avg 2.4 people per household)</div>
              <div>• Transport spend: £{transportSpendPerHousehold.toLocaleString()} per household annually</div>
              <div>• AV penetration: {avPenetrationRate * 100}% by 2030 (conservative estimate)</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Segments */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <Target className="w-5 h-5 text-cyan-600" />
            Market Segmentation Analysis
          </CardTitle>
          <CardDescription>Strategic market segments with distinct characteristics and opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {segments.map((segment) => (
              <div key={segment.name} className="p-4 rounded-lg border bg-white/50">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">{segment.name}</h3>
                    <p className="text-sm text-gray-600">{segment.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-lime-600">£{segment.revenue}M</div>
                    <div className="text-xs text-gray-500">Annual Revenue</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                      <Users className="w-3 h-3" />
                      Population
                    </div>
                    <div className="font-semibold">{segment.population}M people</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                      <TrendingUp className="w-3 h-3" />
                      Penetration
                    </div>
                    <div className="font-semibold">{segment.penetration}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Key Cities</div>
                    <div className="font-semibold text-sm">{segment.cities.join(", ")}</div>
                  </div>
                </div>

                <Progress value={segment.penetration} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Business Model Analysis */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <PoundSterling className="w-5 h-5 text-cyan-600" />
            Revenue Model Analysis
          </CardTitle>
          <CardDescription>Potential business models and revenue streams for UK market entry</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businessModels.map((model) => (
              <div key={model.model} className="p-4 rounded-lg border bg-white/50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 font-sans">{model.model}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-600">£{model.annualRevenue}M</div>
                    <div className="text-xs text-gray-500">Annual Revenue</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Market Share:</span>
                    <span className="font-medium">{model.marketShare}%</span>
                  </div>
                  {model.revenuePerRide && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Revenue per ride:</span>
                        <span className="font-medium">£{model.revenuePerRide}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Daily rides:</span>
                        <span className="font-medium">{model.ridesPerDay?.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                  {model.monthlyFee && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly fee:</span>
                        <span className="font-medium">£{model.monthlyFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subscribers:</span>
                        <span className="font-medium">{model.subscribers?.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                  {model.contractValue && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Avg contract:</span>
                        <span className="font-medium">£{model.contractValue}M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Active contracts:</span>
                        <span className="font-medium">{model.contracts}</span>
                      </div>
                    </>
                  )}
                  {model.revenuePerDelivery && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Revenue per delivery:</span>
                        <span className="font-medium">£{model.revenuePerDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Daily deliveries:</span>
                        <span className="font-medium">{model.deliveriesPerDay?.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-3">
                  <Progress value={model.marketShare} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
