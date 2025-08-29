
import { Button } from "@/components/ui/button"
import Hero from './components/Hero'
import ProductSuite from './components/ProductSuite'
import ValueProposition from "./components/ValueProposition"
import FeaturedItems from "./components/FeaturedItems"
import CaseStudies from "./components/CaseStudies"
import FAQ from "./components/FAQ"
import Testimonials from "./components/Testimonials"
import FinalCTA from "./components/FinalCTA"


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
