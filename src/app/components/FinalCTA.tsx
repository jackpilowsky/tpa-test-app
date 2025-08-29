import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#c3ff00] to-[#00ab80]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-6xl font-bold text-[#231f20] mb-4">
          Sorem ipsum
          <br />
          <span className="text-white">dolor sit</span>
        </h2>
        <p className="text-[#231f20] mb-8 font-semibold text-4xl">Rorem ipsum dolor sit amet consectetur</p>
        <p className="text-[#231f20] mb-8 max-w-2xl mx-auto  font-normal text-lg leading-[120%]">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Button className="bg-[#00AB80] hover:bg-[#231f20]/90 text-white">Book a Discovery Call</Button>
          <button className="text-[#231f20] hover:text-[#231f20]/80">
            Try for free
            <ArrowRight className="text-[#00AB80] inline-block ml-1" />
          </button>
        </div>
      </div>
    </section>)
}