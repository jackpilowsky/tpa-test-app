import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import chart from '../images/chart.jpg'

export default function ValueProposition() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:px-8 bg-[linear-gradient(203.25deg,#D8DBE2_13.63%,#FFFCFF_81.93%)] rounded-[10px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src={chart}
              alt="Financial Chart"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="text-[#231f20]">
            <h3 className="text-3xl font-bold text-[#231f20] mb-3">Jorem ipsum dolor sit amet</h3>
            <p className="text-lg">
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
            <p className="py-3 text-lg border-b border-[#666]">Rorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="py-3 text-lg border-b border-[#666]">Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="py-3 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center space-x-4">

              <Button className="bg-[#00ab80] hover:bg-[#00ab80]/90 text-white">Book a Discovery Call</Button>
              <button className="flex items-center">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}