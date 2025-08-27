import { TrendingUp, Users, Shield, } from "lucide-react"
import Image from "next/image"
import automation from '../images/automation.svg'
import bookmark_flag from '../images/bookmark-flag.svg'
import squigglyArrow from '../images/squiggly-arrow.svg'

export default function ValueProposition() {
  return (<section className="py-8 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-[#231f20] text-center ">Rorem ipsum dolor</h2>
      <div className="flex items-center justify-center p-6">
        <div
          role="separator"
          aria-orientation="vertical"
          className="w-[220px] h-[6px] bg-[#D8DBE2] shrink-0"
        ></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Image className="h-8 w-auto" width={50} height={30} src={squigglyArrow.src} alt="Logo" />

          </div>
          <h3 className="text-3xl font-semibold text-[#231f20] mb-2">Vorem ipsum dolor</h3>
          <p className="text-[#7c8b9d]">Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">

            <Image className="h-8 w-auto" width={43} height={43} src={bookmark_flag.src} alt="Logo" />
          </div>
          <h3 className="text-3xl font-semibold text-[#231f20] mb-2">Jorem ipsum dolor sit</h3>
          <p className="text-[#7c8b9d]">Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Image className="h-8 w-auto" width={35} height={30} src={automation.src} alt="Logo" />
          </div>
          <h3 className="text-3xl font-semibold text-[#231f20] mb-2">Gorem ipsum</h3>
          <p className="text-[#7c8b9d]">Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </section>)
}