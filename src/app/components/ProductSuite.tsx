import { Button } from "@/components/ui/button"

export default function ProductSuite() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[##231F20] mb-4 text-3xl">Explore Our Product Suite</p>
        <div className="flex items-center justify-center p-2">
          <div
            role="separator"
            aria-orientation="vertical"
            className="w-[220px] h-[6px] bg-[#00AB80] shrink-0"
          ></div>
        </div>

        <h2 className="text-6xl font-bold text-[#231f20] mb-8">
          Jorem ipsum dolor sit <span className="text-[#00ab80]">amet consectetur</span>
        </h2>
        <p className="text-[#7c8b9d] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex items-center justify-center space-x-4">
          <Button className="btn-gradient">Lorem Ipsurm</Button>
          <button className="border-2 border-[#D8DBE2] px-4 py-2 rounded text-[#666] hover:text-[#231f20]">Colerm Ipsum Lorem</button>
          <button className="border-2 border-[#D8DBE2] px-4 py-2 rounded text-[#666] hover:text-[#231f20]">Forem Ipsum</button>
        </div>
      </div>
    </section>
  )
}