
import { Link } from "react-router-dom";
import { featuredProducts } from "../../data/homeData";

const FeaturedProducts = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
          Featured Products
        </h2>

        <Link
          to="/product"
          className="shrink-0 text-xs font-bold text-blue-600 hover:text-blue-800 sm:text-sm"
        >
          View All Products →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
        {featuredProducts.map((product) => (
          <article
            key={product.id}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <button
              type="button"
              aria-label={`Add ${product.name} to wishlist`}
              className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-500 transition hover:border-pink-300 hover:text-pink-500"
              onClick={() => console.log("Wishlist:", product.name)}
            >
              ♡
            </button>

            <Link to="/product">
              <div className="flex h-36 items-center justify-center overflow-hidden bg-slate-50 p-3 sm:h-32">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="p-3">
              <h3 className="truncate text-xs font-extrabold text-slate-900">
                {product.name}
              </h3>

              <p className="mt-2 text-sm font-extrabold text-blue-600">
                Rs. {product.price.toLocaleString("en-PK")}
              </p>

              <p className="mt-2 flex items-center gap-1 text-[11px] text-slate-500">
                <span className="text-sm text-amber-400">★</span>
                {product.rating} ({product.reviews})
              </p>

              <Link
                to="/product"
                className="mt-3 block rounded-md bg-blue-600 px-2 py-2 text-center text-[11px] font-bold text-white transition hover:bg-blue-700"
              >
                Add to Cart
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
