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
    <section className="py-16 bg-[#f9fbfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#7c8b9d] mb-4">Sorem ipsum</p>
          <h2 className="text-4xl font-bold text-[#231f20]">Dorem ipsum dolor sit</h2>
        </div>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <CarouselItem key={item} className="basis-1/4">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}