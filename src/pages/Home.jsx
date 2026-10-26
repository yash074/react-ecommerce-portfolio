import React, { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Products } from "../data/ProductData";
import Slider from "./Slider";

const Home = ({ search = "" }) => {
  const [category, setCategory] = useState("All");

  const categories = ["All", "Clothing", "Kids", "Accessories", "Footwear"];

  const filteredProducts = useMemo(() => {
    const term = search.toLowerCase().trim();

    return Products.filter((item) => {
      const matchesSearch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.des.toLowerCase().includes(term);

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <>
      <Slider />

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-rose-600">Trending now</p>
            <h1 className="mt-1 text-3xl font-black text-slate-900 sm:text-4xl">Shop the collection</h1>
            <p className="mt-2 text-sm text-slate-500">Fresh styles, simple shopping, better prices.</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === cat
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-rose-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-xl font-bold">No products found</h2>
            <p className="mt-2 text-sm text-slate-500">Try another search or category.</p>
          </div>
        )}
      </section>

      <section className="mx-auto mb-10 max-w-7xl px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["🚚", "Fast Delivery", "Quick doorstep delivery"],
            ["🔒", "Secure Payment", "Safe and simple checkout"],
            ["↩️", "Easy Returns", "Hassle-free return support"],
          ].map(([icon, title, text]) => (
            <div key={title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <div className="text-2xl">{icon}</div>
              <h3 className="mt-3 font-bold">{title}</h3>
              <p className="mt-1 text-sm text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
