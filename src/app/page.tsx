import { ChevronDown, ArrowRight, TrendingUp, Users, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Hero from './sections/Hero'
import ProductSuite from './sections/ProductSuite'


export default function Home() {
  return (
    <>
      <Hero />
      <ProductSuite />

      {/* Feature Section with Chart */}
      <section className="py-16 bg-[#f9fbfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/financial-trading-chart-with-candlesticks-and-tren.png"
                alt="Financial Chart"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#231f20] mb-4">Jorem ipsum dolor sit amet</h3>
              <p className="text-[#7c8b9d] mb-6">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
              </p>
              <p className="text-[#7c8b9d] mb-6">Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-[#7c8b9d] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex items-center space-x-4">
                <Button className="bg-[#00ab80] hover:bg-[#00ab80]/90 text-white">Book a Discovery Call</Button>
                <button className="text-[#7c8b9d] hover:text-[#231f20] flex items-center">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Features */}
      <section className="py-16 bg-white">
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
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-[#f9fbfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#7c8b9d] mb-4">Sorem ipsum</p>
            <h2 className="text-4xl font-bold text-[#231f20]">Dorem ipsum dolor sit</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg p-6">
                <Image
                  src="/financial-chart-with-green-trend-line.png"
                  alt="Case Study Chart"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-semibold text-[#231f20] mb-2">Gorem ipsum dolor</h3>
                <p className="text-sm text-[#7c8b9d] mb-4">
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                  aliquet odio mattis.
                </p>
                <button className="text-[#00ab80] hover:text-[#00ab80]/80 flex items-center text-sm">
                  Read Case Study <ArrowRight className="ml-1 h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <button className="p-2 rounded-full border border-[#d1d9e2] hover:bg-[#f9fbfd]">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-full border border-[#d1d9e2] hover:bg-[#f9fbfd]">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#231f20] text-center mb-12">
            Frequently Asked
            <br />
            Questions
          </h2>
          <div className="space-y-4">
            {[
              "Sorem ipsum dolor sit amet, consectetur adipiscing elit?",
              "Vorem ipsum dolor sit amet, consectetur adipiscing elit?",
              "Dorem ipsum dolor sit amet, consectetur adipiscing elit?",
              "Gorem ipsum dolor sit amet, consectetur adipiscing elit?",
              "Qorem ipsum dolor sit amet, consectetur adipiscing elit?",
            ].map((question, index) => (
              <div key={index} className="border border-[#d1d9e2] rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#231f20]">{question}</h3>
                  <ChevronDown className="h-5 w-5 text-[#7c8b9d]" />
                </div>
                {index === 0 && (
                  <p className="text-[#7c8b9d] mt-4">
                    Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#00ab80] hover:bg-[#00ab80]/90 text-white">Book a Discovery Call</Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-[#f9fbfd]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#231f20] mb-8">
            Horem ipsum dolor sit
            <br />
            amet,{" "}
            <span className="text-[#00ab80]">
              consectetur
              <br />
              adipiscing elit.
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-left">
                <div className="text-[#00ab80] font-bold text-lg mb-2">LOGO</div>
                <h3 className="font-semibold text-[#231f20] mb-2">Rorem ipsum</h3>
                <p className="text-sm text-[#7c8b9d] mb-4">Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-sm text-[#7c8b9d]">
                  Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                  aliquet odio mattis.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
