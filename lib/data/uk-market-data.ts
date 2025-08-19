// Mock data simulating real UK sources: ONS, DfT, Local Transport Authorities
export interface CityData {
  id: string
  name: string
  region: string
  population: number
  populationDensity: number // per km²
  avgHouseholdIncome: number
  publicTransportUsage: number // percentage
  trafficAccidents: number // per 100k population
  regulatoryReadiness: number // 0-100 score
  competitorPresence: number // 0-100 score
  marketOpportunity: number // calculated score
  coordinates: [number, number] // [lat, lng]
}

export const ukCitiesData: CityData[] = [
  {
    id: "london",
    name: "London",
    region: "Greater London",
    population: 9648110,
    populationDensity: 5666,
    avgHouseholdIncome: 52000,
    publicTransportUsage: 85,
    trafficAccidents: 42,
    regulatoryReadiness: 85,
    competitorPresence: 90,
    marketOpportunity: 92,
    coordinates: [51.5074, -0.1278],
  },
  {
    id: "manchester",
    name: "Manchester",
    region: "North West",
    population: 2720000,
    populationDensity: 4735,
    avgHouseholdIncome: 35000,
    publicTransportUsage: 65,
    trafficAccidents: 38,
    regulatoryReadiness: 75,
    competitorPresence: 60,
    marketOpportunity: 78,
    coordinates: [53.4808, -2.2426],
  },
  {
    id: "birmingham",
    name: "Birmingham",
    region: "West Midlands",
    population: 2607000,
    populationDensity: 4200,
    avgHouseholdIncome: 32000,
    publicTransportUsage: 55,
    trafficAccidents: 45,
    regulatoryReadiness: 70,
    competitorPresence: 45,
    marketOpportunity: 75,
    coordinates: [52.4862, -1.8904],
  },
  {
    id: "leeds",
    name: "Leeds",
    region: "Yorkshire",
    population: 1901000,
    populationDensity: 1967,
    avgHouseholdIncome: 33000,
    publicTransportUsage: 45,
    trafficAccidents: 35,
    regulatoryReadiness: 65,
    competitorPresence: 35,
    marketOpportunity: 68,
    coordinates: [53.8008, -1.5491],
  },
  {
    id: "glasgow",
    name: "Glasgow",
    region: "Scotland",
    population: 1680000,
    populationDensity: 3298,
    avgHouseholdIncome: 31000,
    publicTransportUsage: 70,
    trafficAccidents: 32,
    regulatoryReadiness: 60,
    competitorPresence: 30,
    marketOpportunity: 65,
    coordinates: [55.8642, -4.2518],
  },
  {
    id: "bristol",
    name: "Bristol",
    region: "South West",
    population: 694000,
    populationDensity: 4200,
    avgHouseholdIncome: 38000,
    publicTransportUsage: 50,
    trafficAccidents: 28,
    regulatoryReadiness: 80,
    competitorPresence: 40,
    marketOpportunity: 72,
    coordinates: [51.4545, -2.5879],
  },
]

export interface RegulatoryData {
  region: string
  avTestingPermitted: boolean
  commercialOperationAllowed: boolean
  insuranceRequirements: string
  safetyStandards: string
  dataPrivacyCompliance: string
  readinessScore: number
}

export const regulatoryLandscape: RegulatoryData[] = [
  {
    region: "England",
    avTestingPermitted: true,
    commercialOperationAllowed: false,
    insuranceRequirements: "£5M minimum coverage",
    safetyStandards: "CCAV Code of Practice",
    dataPrivacyCompliance: "UK GDPR",
    readinessScore: 75,
  },
  {
    region: "Scotland",
    avTestingPermitted: true,
    commercialOperationAllowed: false,
    insuranceRequirements: "£5M minimum coverage",
    safetyStandards: "CCAV Code of Practice",
    dataPrivacyCompliance: "UK GDPR",
    readinessScore: 65,
  },
  {
    region: "Wales",
    avTestingPermitted: true,
    commercialOperationAllowed: false,
    insuranceRequirements: "£5M minimum coverage",
    safetyStandards: "CCAV Code of Practice",
    dataPrivacyCompliance: "UK GDPR",
    readinessScore: 60,
  },
]

export interface CompetitorData {
  name: string
  type: "Ride-hailing" | "Delivery" | "Testing" | "Technology"
  cities: string[]
  marketShare: number
  funding: number // millions USD
  stage: "Testing" | "Pilot" | "Commercial"
}

export const competitorAnalysis: CompetitorData[] = [
  {
    name: "Uber",
    type: "Ride-hailing",
    cities: ["london", "manchester", "birmingham", "leeds", "glasgow", "bristol"],
    marketShare: 45,
    funding: 25000,
    stage: "Commercial",
  },
  {
    name: "Bolt",
    type: "Ride-hailing",
    cities: ["london", "manchester", "birmingham"],
    marketShare: 15,
    funding: 1000,
    stage: "Commercial",
  },
  {
    name: "FiveAI",
    type: "Testing",
    cities: ["london", "bristol"],
    marketShare: 0,
    funding: 77,
    stage: "Testing",
  },
  {
    name: "Oxbotica",
    type: "Technology",
    cities: ["london", "birmingham"],
    marketShare: 0,
    funding: 140,
    stage: "Testing",
  },
]
