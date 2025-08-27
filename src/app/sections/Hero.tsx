import Image from "next/image"
import heroLeft from "../images/hero-left.png"
import heroRight from "../images/hero-right.png"
import {  ArrowRight} from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Hero(){
  return (
      <section className="py-20 bg-[#f9fbfd]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src={heroLeft}
            alt="Hero Left"
            className="absolute top-40 left-0 hidden md:block"
          />
          <Image
            src={heroRight}
            alt="Hero Right"
            className="absolute top-40 right-0 hidden md:block"
          />
          <h1 className="text-6xl font-bold text-[#231f20] mb-6">
            Horem ipsum dolor sit <span className="text-[#00ab80]">amet consectetur</span>.
          </h1>
          <p className="text-2xl font-semibold text-[#231F20]  mb-8 max-w-3xl mx-auto">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <p className="text-[#7c8b9d]  mb-8 max-w-3xl mx-auto" >Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet 
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Curabitur tempus urna at turpis condimentum lobortis.</p>
          <div className="flex items-center justify-center space-x-4">
            <Button className="text-lg bg-[#00ab80] hover:bg-[#00ab80]/90 text-white px-8 py-3">Book a Discovery Call</Button>
            <button className="text-lg text-[#7c8b9d] hover:text-[#231f20] flex items-center">
              Try for free <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
  )
}