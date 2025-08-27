export default function Footer() {
  return (
    <footer className="bg-[#231f20] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="w-8 h-8 bg-[#00ab80] rounded mb-4"></div>
              <p className="text-sm text-[#7c8b9d]">Rorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#00ab80]">Solutions</h3>
              <ul className="space-y-2 text-sm text-[#7c8b9d]">
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#00ab80]">Company</h3>
              <ul className="space-y-2 text-sm text-[#7c8b9d]">
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#00ab80]">Resources</h3>
              <ul className="space-y-2 text-sm text-[#7c8b9d]">
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#5f6d7e] mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-[#7c8b9d]">Terms | Privacy and Legal | Accessibility | Contact Us | Cookies</p>
              <p className="text-sm text-[#7c8b9d] mt-4 md:mt-0">Copyright © 2024 Company name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
  );
}