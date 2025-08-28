
import { Button } from "@/components/ui/button"
import Hero from './sections/Hero'
import ProductSuite from './sections/ProductSuite'
import ValueProposition from "./sections/ValueProposition"
import FeaturedItems from "./sections/FeaturedItems"
import CaseStudies from "./sections/CaseStudies"
import FAQ from "./sections/FAQ"
import Testimonials from "./sections/Testimonials"
import FinalCTA from "./sections/FinalCTA"


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
      <FinalCTA />
    </>
  )
}
