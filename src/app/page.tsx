import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Hero from './sections/Hero'
import ProductSuite from './sections/ProductSuite'
import ValueProposition from "./sections/ValueProposition"
import FeaturedItems from "./sections/FeaturedItems"
import CaseStudies from "./sections/CaseStudies"
import FAQ from "./sections/FAQ"
import Testimonials from "./sections/Testimonials"


export default function Home() {
  return (
    <>
      <Hero />
      <ProductSuite />
      <ValueProposition />
      <FeaturedItems />
      <CaseStudies />
      <FAQ />
      <Testimonials />

      {/* Final CTA with Gradient */}
      <section className="py-20 bg-gradient-to-r from-[#c3ff00] to-[#00ab80]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#231f20] mb-4">
            Sorem ipsum
            <br />
            dolor sit
          </h2>
          <p className="text-[#231f20] mb-8">Rorem ipsum dolor sit amet consectetur</p>
          <p className="text-[#231f20] mb-8 max-w-2xl mx-auto">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button className="bg-[#231f20] hover:bg-[#231f20]/90 text-white">Book a Discovery Call</Button>
            <button className="text-[#231f20] hover:text-[#231f20]/80">Try for free</button>
          </div>
        </div>
      </section>
    </>
  )
}
