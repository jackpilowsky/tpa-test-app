import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import logo from '../images/LOGO.png'
import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="py-8 bg-[#f9fbfd]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-6xl font-bold text-[#231f20] mb-8">
          Horem ipsum dolor sit
          <br />
          amet,{" "}
          <span className="text-[#00ab80]">
            consectetur
            <br />
            adipiscing elit.
          </span>
        </h2>
        <Carousel className="pb-10 relative">
          <CarouselContent className="-ml-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <CarouselItem key={item} className="basis-1/3 text-left pl-4">
                <div className="rounded-lg bg-[#FFFCFF] border border-[#D8DBE2] p-6">
                  <Image src={logo} width={95} height={28} alt="Logo" className="mb-2" />
                  <h3 className="text-[#231f20] text-lg mb-2">Rorem ipsum</h3>
                  <p className="text-xs text-[#231f20] mb-4">Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p className="text-lg text-[#231f20]">
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis.
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-[#00AB80] bg-none border-0 bg-background-none" />
          <CarouselNext className="text-[#00AB80] bg-none border-0 bg-background-none" />
        </Carousel>
      </div>
    </section>
  )
}