import { ChevronDown, ArrowRight, TrendingUp, Users, Shield, ChevronLeft, ChevronRight } from "lucide-react"

export default function ValueProposition() {
  return (<section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#231f20] text-center mb-12">Rorem ipsum dolor</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#00ab80] rounded-lg mx-auto mb-4 flex items-center justify-center">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-[#231f20] mb-2">Vorem ipsum dolor</h3>
          <p className="text-[#7c8b9d]">Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-[#00ab80] rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-[#231f20] mb-2">Jorem ipsum dolor sit</h3>
          <p className="text-[#7c8b9d]">Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-[#00ab80] rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-[#231f20] mb-2">Gorem ipsum</h3>
          <p className="text-[#7c8b9d]">Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </section>)
}