import { ukCitiesData, type CityData } from "./uk-market-data"

export interface MarketInsight {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "stable"
  description: string
}

export function calculateMarketInsights(): MarketInsight[] {
  const totalPopulation = ukCitiesData.reduce((sum, city) => sum + city.population, 0)
  const avgMarketOpportunity = ukCitiesData.reduce((sum, city) => sum + city.marketOpportunity, 0) / ukCitiesData.length
  const highOpportunityCities = ukCitiesData.filter((city) => city.marketOpportunity > 70).length

  return [
    {
      title: "Total Addressable Market",
      value: `${(totalPopulation / 1000000).toFixed(1)}M people`,
      change: "+2.3%",
      trend: "up",
      description: "Combined population across target UK cities",
    },
    {
      title: "Average Market Opportunity",
      value: `${avgMarketOpportunity.toFixed(0)}/100`,
      change: "+5.2%",
      trend: "up",
      description: "Composite score based on demographics, regulation, and competition",
    },
    {
      title: "High-Opportunity Cities",
      value: `${highOpportunityCities}`,
      change: "+1",
      trend: "up",
      description: "Cities with market opportunity score above 70",
    },
    {
      title: "Regulatory Readiness",
      value: "75%",
      change: "+8.1%",
      trend: "up",
      description: "Average regulatory preparedness across regions",
    },
  ]
}

export function getRankedCities(): CityData[] {
  return [...ukCitiesData].sort((a, b) => b.marketOpportunity - a.marketOpportunity)
}

export function calculateRevenueProjection(city: CityData): {
  year1: number
  year3: number
  year5: number
} {
  // Simple revenue model based on population, income, and market opportunity
  const baseRevenue = (city.population * city.avgHouseholdIncome * city.marketOpportunity) / 100000000

  return {
    year1: Math.round(baseRevenue * 0.1),
    year3: Math.round(baseRevenue * 0.4),
    year5: Math.round(baseRevenue * 0.8),
  }
}
