import { Car, TrendingUp, MapPin, Shield } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="border-b bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-cyan-600 rounded-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-sans">UK Autonomous Vehicle Market Strategy</h1>
              <p className="text-sm text-gray-600 font-sans">Data-driven insights for strategic market expansion</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-600" />
              <span>Live Data</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-600" />
              <span>6 Cities</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-600" />
              <span>Regulatory Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
