
import { Link } from "react-router-dom";

const promos = [
  {
    id: 1,
    title: "Latest Smartphones",
    description: "Stay connected with the best",
    image: "/images/promo-smartphone.jpg",
    background: "from-sky-100 to-blue-50",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: 2,
    title: "Premium Headphones",
    description: "Pure sound. No distractions.",
    image: "/images/promo-headphones.jpg",
    background: "from-pink-100 to-rose-50",
    button: "bg-pink-500 hover:bg-pink-600",
  },
];

const PromoBanners = () => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 pb-10 pt-2 sm:px-8 lg:grid-cols-2">
      {promos.map((promo) => (
        <article
          key={promo.id}
          className={`relative flex min-h-40 items-center overflow-hidden rounded-xl bg-gradient-to-r ${promo.background} p-6 sm:p-7`}
        >
          <div className="relative z-10 max-w-[65%]">
            <h2 className="text-lg font-extrabold text-slate-900 sm:text-xl">
              {promo.title}
            </h2>

            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              {promo.description}
            </p>

            <Link
              to="/product"
              className={`mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold text-white transition ${promo.button}`}
            >
              Shop Now →
            </Link>
          </div>

          <img
            src={promo.image}
            alt={promo.title}
            loading="lazy"
            className="absolute bottom-0 right-0 h-full w-2/5 object-cover mix-blend-multiply transition duration-500 hover:scale-105"
          />
        </article>
      ))}
    </section>
  );
};

export default PromoBanners;
