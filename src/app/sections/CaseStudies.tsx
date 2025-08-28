import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import skyline from '../images/skyline.png'

export default function CaseStudies() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-[#231F20] text-4xl mb-4">Sorem ipsum</h2>
          <div className="flex items-center justify-center p-2">
            <div
              role="separator"
              aria-orientation="vertical"
              className="w-[220px] h-[6px] bg-[#00AB80] shrink-0"
            ></div>
          </div>

          <h2 className="text-6xl font-bold text-[#231f20]">Dorem ipsum dolor sit</h2>
        </div>
        {/* Fade overlay */}
        <div className="absolute top-0 right-0 h-full w-[200px] bg-gradient-to-l from-white to-transparent pointer-events-none z-1"></div>
        <Carousel className="pb-10 relative">
          <CarouselContent className="-ml-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <CarouselItem key={item} className="basis-1/4 pl-4">
                <div className="bg-[linear-gradient(203.25deg,#D8DBE2_13.63%,#FFFCFF_81.93%)] rounded-[10px] w-full p-4">
                  <Image
                    src={skyline.src}
                    alt={`Case Study ${item}`}
                    width={264}
                    height={172}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-[#231f20] mb-2">Case Study {item}</h3>
                  <p className="text-sm text-[#7c8b9d] mb-4">
                    Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis.
                  </p>
                  <button className="text-[#00ab80] hover:text-[#00ab80]/80 flex items-center text-sm">
                    Read Case Study <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Buttons pinned bottom right */}
          <div className="absolute bottom-0 right-4 flex gap-2 z-2">
            <CarouselPrevious className="relative static translate-y-0 translate-x-0" />
            <CarouselNext className="relative static translate-y-0 translate-x-0" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}