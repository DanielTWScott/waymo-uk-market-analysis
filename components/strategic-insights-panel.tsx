import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, TrendingUp, Shield, Clock, AlertTriangle, CheckCircle, Lightbulb, MapPin } from "lucide-react"

export function StrategicInsightsPanel() {
  const strategicRecommendations = [
    {
      priority: "High",
      title: "London-First Market Entry Strategy",
      description:
        "Launch initial operations in London leveraging highest market opportunity score (92/100) and established regulatory framework.",
      rationale: [
        "Largest addressable market (9.6M population)",
        "Highest regulatory readiness (85/100)",
        "Strong public transport integration opportunities",
        "Premium customer segment with £52k average income",
      ],
      timeline: "Q2 2025",
      investment: "£45M",
      expectedROI: "180%",
      riskLevel: "Medium",
    },
    {
      priority: "High",
      title: "Strategic Partnership with Transport for London",
      description:
        "Establish formal partnership to integrate AV services with existing transport infrastructure and gain regulatory advantage.",
      rationale: [
        "Accelerated regulatory approval process",
        "Access to transport data and infrastructure",
        "Reduced operational complexity",
        "Enhanced public acceptance through official endorsement",
      ],
      timeline: "Q1 2025",
      investment: "£8M",
      expectedROI: "250%",
      riskLevel: "Low",
    },
    {
      priority: "Medium",
      title: "Differentiated B2B Corporate Services",
      description:
        "Target corporate partnerships and premium services to avoid direct competition with Uber's consumer focus.",
      rationale: [
        "Uber dominates consumer market (45% share)",
        "Underserved corporate transport segment",
        "Higher margins and predictable revenue",
        "Easier regulatory approval for controlled routes",
      ],
      timeline: "Q3 2025",
      investment: "£25M",
      expectedROI: "320%",
      riskLevel: "Low",
    },
    {
      priority: "Medium",
      title: "Phased Geographic Expansion",
      description:
        "Sequential expansion to Manchester, Birmingham, and Bristol based on market readiness and infrastructure development.",
      rationale: [
        "Manchester: Strong market opportunity (78/100) with lower competition",
        "Birmingham: Central location for logistics optimization",
        "Bristol: High regulatory readiness (80/100) and tech-friendly population",
      ],
      timeline: "2026-2027",
      investment: "£120M",
      expectedROI: "195%",
      riskLevel: "Medium",
    },
  ]

  const riskAssessment = [
    {
      risk: "Regulatory Delays",
      probability: "Medium",
      impact: "High",
      mitigation: "Early engagement with CCAV, pilot program participation, safety-first approach",
      status: "Monitored",
    },
    {
      risk: "Public Acceptance",
      probability: "Medium",
      impact: "Medium",
      mitigation: "Transparent communication, safety demonstrations, gradual rollout",
      status: "Mitigated",
    },
    {
      risk: "Competitive Response",
      probability: "High",
      impact: "Medium",
      mitigation: "Differentiated positioning, strategic partnerships, technology advantages",
      status: "Planned",
    },
    {
      risk: "Infrastructure Readiness",
      probability: "Low",
      impact: "High",
      mitigation: "Partnership with local authorities, infrastructure investment, flexible deployment",
      status: "Mitigated",
    },
  ]

  const keyMetrics = [
    {
      metric: "Market Entry Timeline",
      target: "Q2 2025",
      current: "Planning Phase",
      progress: 25,
      status: "On Track",
    },
    {
      metric: "Regulatory Approval",
      target: "Q1 2025",
      current: "Pre-submission",
      progress: 40,
      status: "On Track",
    },
    {
      metric: "Partnership Agreements",
      target: "3 Major Partners",
      current: "1 LOI Signed",
      progress: 33,
      status: "On Track",
    },
    {
      metric: "Revenue Target Y1",
      target: "£85M",
      current: "£0M",
      progress: 0,
      status: "Not Started",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High":
        return "text-red-600"
      case "Medium":
        return "text-yellow-600"
      case "Low":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      {/* Executive Summary */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <Target className="w-5 h-5 text-cyan-600" />
            Executive Summary & Strategic Recommendations
          </CardTitle>
          <CardDescription>
            Comprehensive market entry strategy for Waymo's UK autonomous vehicle deployment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-cyan-50 rounded-lg border border-cyan-200">
              <div className="text-2xl font-bold text-cyan-600 font-sans">£4.5B</div>
              <div className="text-sm text-cyan-700">Total Addressable Market</div>
              <div className="text-xs text-cyan-600 mt-1">By 2030</div>
            </div>
            <div className="text-center p-4 bg-lime-50 rounded-lg border border-lime-200">
              <div className="text-2xl font-bold text-lime-600 font-sans">18 Months</div>
              <div className="text-sm text-lime-700">Recommended Entry Timeline</div>
              <div className="text-xs text-lime-600 mt-1">Q2 2025 Launch</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-600 font-sans">£198M</div>
              <div className="text-sm text-purple-700">Total Investment Required</div>
              <div className="text-xs text-purple-600 mt-1">3-Year Horizon</div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3 font-sans">Key Strategic Insights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-lime-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>London presents optimal entry point</strong> with highest market opportunity and regulatory
                  readiness
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-lime-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>B2B corporate services</strong> offer differentiated positioning vs. consumer-focused
                  competitors
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-lime-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Strategic partnerships</strong> with TfL and local authorities critical for success
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-lime-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Phased expansion approach</strong> minimizes risk while maximizing market capture
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strategic Recommendations */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-cyan-600" />
            Detailed Strategic Recommendations
          </CardTitle>
          <CardDescription>Prioritized action items with investment requirements and expected returns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {strategicRecommendations.map((rec, index) => (
              <div key={index} className="p-4 rounded-lg border bg-white/50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Badge className={`${getPriorityColor(rec.priority)} border`}>{rec.priority} Priority</Badge>
                    <h3 className="font-semibold text-gray-900 font-sans">{rec.title}</h3>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-semibold text-gray-900">{rec.timeline}</div>
                    <div className="text-gray-600">Target Launch</div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4">{rec.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Strategic Rationale</h4>
                    <ul className="space-y-1">
                      {rec.rationale.map((point, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{rec.investment}</div>
                      <div className="text-xs text-gray-600">Investment</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-lime-600">{rec.expectedROI}</div>
                      <div className="text-xs text-gray-600">Expected ROI</div>
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${getRiskColor(rec.riskLevel)}`}>{rec.riskLevel}</div>
                      <div className="text-xs text-gray-600">Risk Level</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-600" />
            Risk Assessment & Mitigation
          </CardTitle>
          <CardDescription>Identified risks with probability, impact, and mitigation strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskAssessment.map((risk, index) => (
              <div key={index} className="p-4 rounded-lg border bg-white/50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 font-sans">{risk.risk}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={getRiskColor(risk.probability)}>
                      {risk.probability} Probability
                    </Badge>
                    <Badge variant="outline" className={getRiskColor(risk.impact)}>
                      {risk.impact} Impact
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-2">{risk.mitigation}</p>
                <div className="flex items-center gap-2">
                  {risk.status === "Mitigated" && <CheckCircle className="w-4 h-4 text-lime-500" />}
                  {risk.status === "Planned" && <Clock className="w-4 h-4 text-blue-500" />}
                  {risk.status === "Monitored" && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                  <span className="text-xs text-gray-600">Status: {risk.status}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Performance Indicators */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-600" />
            Key Performance Indicators & Milestones
          </CardTitle>
          <CardDescription>Critical metrics for tracking market entry success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="p-4 rounded-lg border bg-white/50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 font-sans">{metric.metric}</h3>
                  <Badge
                    variant={metric.status === "On Track" ? "default" : "secondary"}
                    className={metric.status === "On Track" ? "bg-lime-500" : ""}
                  >
                    {metric.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="text-gray-600">Current: {metric.current}</span>
                  <span className="text-gray-900 font-medium">Target: {metric.target}</span>
                </div>
                <Progress value={metric.progress} className="h-2" />
                <div className="text-xs text-gray-500 mt-1">{metric.progress}% Complete</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-sans flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-600" />
            Immediate Next Steps (Next 90 Days)
          </CardTitle>
          <CardDescription>Critical actions required to initiate UK market entry strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 font-sans">Regulatory & Legal</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>Submit CCAV testing application for London pilot</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>Establish UK legal entity and insurance framework</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span>Engage with Transport for London on partnership terms</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 font-sans">Operations & Technology</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>Establish London operations center and fleet depot</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span>Adapt vehicle systems for UK traffic patterns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Recruit local operations and engineering teams</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
