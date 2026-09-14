export default function Footer() {
  return (
    <footer className="border-t bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Block */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src="/logo-text.png"   // ✅ FIXED: Works on Netlify
              alt="Deep Stack Logo"
              className="w-32 h-auto object-contain"
            />
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <a href="#" className="hover:text-gray-900">GitHub</a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
            <li><a href="#" className="hover:text-gray-900">Projects</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-10 py-6 text-center text-sm text-gray-500">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
        </div>
      </div>
    </footer>
  );
}
