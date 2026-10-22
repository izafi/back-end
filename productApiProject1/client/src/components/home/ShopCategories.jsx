
import { Link } from "react-router-dom";
import { categories } from "../../data/homeData";

const ShopCategories = () => {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
          Shop by Category
        </h2>

        <Link
          to="/product"
          className="shrink-0 text-xs font-bold text-blue-600 hover:text-blue-800 sm:text-sm"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((category) => (
          <Link
            to="/product"
            key={category.id}
            className="group text-center"
          >
            <div className="overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-100">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-32 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-28"
              />
            </div>

            <h3 className="mt-3 text-xs font-bold text-slate-800 transition group-hover:text-blue-600">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopCategories;
