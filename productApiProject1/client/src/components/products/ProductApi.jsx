
import React, { useEffect, useState } from "react";

const ProductApi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products"
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("API RESPONSE:", data);

        const productList = Array.isArray(data)
          ? data
          : Array.isArray(data.products)
          ? data.products
          : Array.isArray(data.data)
          ? data.data
          : null;

        if (!productList) {
          throw new Error("Invalid products data from API");
        }

        setProducts(productList);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Loading UI
  if (loading) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600"></div>
          <p className="mt-4 font-medium text-gray-600">
            Loading products...
          </p>
        </div>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="mx-auto my-10 max-w-xl rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
        <h2 className="text-xl font-bold text-red-700">
          Oops! Something went wrong
        </h2>
        <p className="mt-2 text-sm text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl text-center">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Our Collection
        </span>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Explore Our{" "}
          <span className="text-blue-600">Products</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
          Discover our collection of quality products at great prices.
        </p>

        <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-blue-600"></div>
      </div>

      {/* Product Count */}
      <div className="mx-auto mb-6 flex max-w-7xl items-center justify-between">
        <h2 className="text-lg font-bold text-slate-800">
          All Products
        </h2>

        <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200">
          {products.length} Products
        </span>
      </div>

      {/* Empty State */}
      {products.length === 0 ? (
        <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <h2 className="text-xl font-bold text-slate-800">
            No Products Found
          </h2>
          <p className="mt-2 text-slate-500">
            There are currently no products to display.
          </p>
        </div>
      ) : (
        /* Product Cards */
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product._id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              {/* Card Top */}
              <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/50 transition-transform duration-500 group-hover:scale-150"></div>

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-3xl font-black text-blue-600 shadow-md transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                  {product.name?.charAt(0)?.toUpperCase() || "P"}
                </div>

                <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
                  {product.category || "General"}
                </span>

                <span
                  className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
                    Number(product.stock) > 0
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {Number(product.stock) > 0
                    ? "In Stock"
                    : "Out of Stock"}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-1 text-lg font-bold text-slate-800 transition-colors group-hover:text-blue-600">
                  {product.name}
                </h3>

                <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
                  {product.discription || "No description available."}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-end justify-between gap-2 border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Price
                    </p>
                    <p className="mt-1 text-xl font-extrabold text-blue-700">
                      Rs.{" "}
                      {Number(product.price).toLocaleString("en-PK")}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-100 px-3 py-2 text-right">
                    <p className="text-xs text-slate-400">Stock</p>
                    <p className="font-bold text-slate-700">
                      {product.stock ?? 0} units
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() =>
                    console.log("Selected product:", product)
                  }
                  className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 active:scale-95"
                >
                  View Product
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductApi;
