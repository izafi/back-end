
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-sky-50 via-blue-50 to-blue-200">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-16">
        <div>
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-600 sm:text-sm">
            Best Quality Products
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Everything You Need
            <br />
            in <span className="text-blue-600">One Place</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            Shop the latest trends, best deals and premium
            quality products — all at your fingertips.
          </p>

          <Link
            to="/product"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Shop Now <span>→</span>
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: "🚚", title: "Free Shipping", text: "Orders over Rs. 2,000" },
              { icon: "🛡️", title: "Secure Payment", text: "100% safe & secure" },
              { icon: "🎧", title: "24/7 Support", text: "We're here to help" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[10px] text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-8 rounded-full bg-blue-300/40 blur-3xl" />

          <img
            src="/images/hero-products.jpg"
            alt="ShopSphere electronics and lifestyle collection"
            className="relative h-64 w-full rounded-3xl object-cover shadow-xl sm:h-80 lg:h-[340px]"
          />

          <div className="absolute right-3 top-5 rounded-xl bg-white/90 px-3 py-2 text-xs font-bold italic text-slate-800 shadow-md sm:right-5 sm:top-8 sm:text-sm">
            Upgrade Your Lifestyle ↙
          </div>

          <div className="absolute bottom-4 right-5 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
