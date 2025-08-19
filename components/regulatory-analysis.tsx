import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { regulatoryLandscape } from "@/lib/data/uk-market-data"
import { Shield, CheckCircle, AlertTriangle, Clock, FileText } from "lucide-react"

export function RegulatoryAnalysis() {
  const getReadinessColor = (score: number) => {
    if (score >= 75) return "text-lime-600 bg-lime-100"
    if (score >= 60) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  const regulatoryTimeline = [
    {
      phase: "Current State",
      status: "Active",
      description: "Testing permitted with safety driver",
      timeframe: "2024",
      requirements: ["CCAV Code of Practice", "£5M Insurance", "Safety Driver Required"],
    },
    {
      phase: "Phase 1",
      status: "Pending",
      description: "Limited commercial operations",
      timeframe: "2025-2026",
      requirements: ["Updated Safety Standards", "Commercial Insurance", "Route Approval"],
    },
    {
      phase: "Phase 2",
      status: "Future",
      description: "Full commercial deployment",
      timeframe: "2027+",
      requirements: ["Full Regulatory Framework", "Public Acceptance", "Infrastructure Ready"],
    },
  ]

  return (
    <div className="space-y-6">
      {/* Regional Regulatory Readiness */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-600" />
            Regional Regulatory Readiness
          </CardTitle>
          <CardDescription>
            Assessment of regulatory preparedness across UK regions for autonomous vehicle deployment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regulatoryLandscape.map((region) => (
              <div key={region.region} className="p-4 rounded-lg border bg-white/50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 font-sans">{region.region}</h3>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getReadinessColor(region.readinessScore)}`}
                  >
                    {region.readinessScore}/100
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      {region.avTestingPermitted ? (
                        <CheckCircle className="w-4 h-4 text-lime-500" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      )}
                      <span>AV Testing: {region.avTestingPermitted ? "Permitted" : "Restricted"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {region.commercialOperationAllowed ? (
                        <CheckCircle className="w-4 h-4 text-lime-500" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      )}
                      <span>Commercial Ops: {region.commercialOperationAllowed ? "Allowed" : "Pending"}</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Insurance: {region.insuranceRequirements}</div>
                    <div>Standards: {region.safetyStandards}</div>
                    <div>Privacy: {region.dataPrivacyCompliance}</div>
                  </div>
                </div>

                <Progress value={region.readinessScore} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Regulatory Timeline */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-600" />
            Regulatory Development Timeline
          </CardTitle>
          <CardDescription>Expected progression of UK autonomous vehicle regulations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regulatoryTimeline.map((phase, index) => (
              <div key={phase.phase} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      phase.status === "Active"
                        ? "bg-lime-500"
                        : phase.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-gray-300"
                    }`}
                  />
                  {index < regulatoryTimeline.length - 1 && <div className="w-0.5 h-16 bg-gray-200 mt-2" />}
                </div>

                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 font-sans">{phase.phase}</h3>
                    <Badge
                      variant={
                        phase.status === "Active" ? "default" : phase.status === "Pending" ? "secondary" : "outline"
                      }
                    >
                      {phase.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{phase.timeframe}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{phase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.requirements.map((req) => (
                      <div key={req} className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded">
                        <FileText className="w-3 h-3" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
