import logo from "../images/logo.svg"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="text-[#231F20]">
      <div className="max-w-7xl mx-auto  py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <Image className="h-8 w-auto" width={50} height={50} src={logo.src} alt="Logo" />
            <p className="text-sm">Rorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#00ab80]">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#00ab80]">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#00ab80]">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#00ab80]">Insight</h3>
            <ul className="space-y-2 text-sm">
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#231f20] px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Left side - description and email form */}
            <div className="flex-1">
              <p className="text-white text-sm mb-4">Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              {/* Email subscription form */}
              <div className="flex gap-0 max-w-sm">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 text-sm text-[#666666] bg-white border-0 rounded-l focus:outline-none focus:ring-2 focus:ring-[#00ab80]"
                />
                <button className="px-6 py-2 bg-[#00ab80] text-white text-sm font-medium rounded-r hover:bg-[#00ab80]/90 transition-colors">
                  Submit
                </button>
              </div>
            </div>

            {/* Right side - footer links */}
            <div className="flex flex-wrap gap-6 text-sm pt-8">
              <a href="#" className="text-[#d1d9e2] hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#d1d9e2] hover:text-white transition-colors">
                Terms of Use
              </a>
              <span className="text-[#d1d9e2]">Copyright © 2025 Gorem ipsum dolor sit amet elit.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}