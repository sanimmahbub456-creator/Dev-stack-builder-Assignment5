export default function Hero() {
  return (
    <section className="bg-gray-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT — Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Build Your Ideal{" "}
            <span className="gradient-text">Development Stack</span>
          </h1>

          <p className="text-gray-700 mb-6">
            Explore frontend, backend, database, and tooling options.
          </p>

          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-full text-white bg-brand-gradient text-sm">
              Explore Technologies
            </button>

            <button className="px-4 py-2 rounded-full border text-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT — Image */}
        <div className="flex justify-center">
          <img
            src="/banner-stack.png"   // ✅ FIXED: Works on Netlify app
            alt="Dev Stack Banner"
            className="max-w-xs md:max-w-sm rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
