import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "../images/logo.svg"
import clientIcon from "../images/client-icon.svg"
import Image from "next/image"


export default function Header() {
  return (
    <header className="border-b border-[#d1d9e2] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image className="h-8 w-auto" width={50} height={50} src={logo.src} alt="Logo" />
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 text-lg">
                <div className="flex items-center text-[#231f20] hover:text-[#00ab80] cursor-pointer">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </div>
                <div className="flex items-center text-[#231f20] hover:text-[#00ab80] cursor-pointer">
                  Company <ChevronDown className="ml-1 h-4 w-4" />
                </div>
                <div className="flex items-center text-[#231f20] hover:text-[#00ab80] cursor-pointer">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </div>
                <div className="flex items-center text-[#231f20] hover:text-[#00ab80] cursor-pointer">
                  Learn <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              </div>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Image className="h-8 w-auto" width={13} height={16} src={clientIcon.src} alt="client icon" />
            <button className="text-[#231f20]">Client Login</button>
            <Button className="bg-[#00ab80] hover:bg-[#00ab80]/90 text-white">Book a Discovery Call</Button>
          </div>
        </div>
      </div>
    </header>

  );
}
