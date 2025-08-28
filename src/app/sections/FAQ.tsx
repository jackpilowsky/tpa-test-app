import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#231f20] text-center mb-12">
          Frequently Asked
          <br />
          Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
          defaultValue="item-1"
        >
          {[1, 2, 3, 4].map((item) => (
            <AccordionItem key={item} value={`item-${item}`} className="border border-[#d1d9e2] p-6 bg-gradient-to-b from-[#D8DBE2] to-[#FFFCFF] w-full rounded-lg py-5 px-6">
              <AccordionTrigger className="font-semibold text-[#231f20] text-lg p-0">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-[#231f20] text-lg">
                <p className="text-[#7c8b9d] mt-4">
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                  aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur
                  neque.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-8">
          <Button className="bg-[#00ab80] hover:bg-[#00ab80]/90 text-white">Book a Discovery Call</Button>
        </div>
      </div>
    </section>
  )
}