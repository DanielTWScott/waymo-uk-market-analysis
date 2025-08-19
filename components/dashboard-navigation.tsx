"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart3, Map, Users, Shield, Target } from "lucide-react"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function DashboardNavigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections = [
    { id: "overview", label: "Market Overview", icon: BarChart3 },
    { id: "cities", label: "City Analysis", icon: Map },
    { id: "competitors", label: "Competitive Landscape", icon: Users },
    { id: "regulatory", label: "Regulatory Environment", icon: Shield },
    { id: "strategy", label: "Strategic Recommendations", icon: Target },
  ]

  return (
    <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onSectionChange(section.id)}
                className={`flex items-center gap-2 font-sans ${
                  activeSection === section.id
                    ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                {section.label}
              </Button>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
