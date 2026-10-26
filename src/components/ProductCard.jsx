import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const ProductCard = ({ item }) => {
  const { dispatch } = useCart();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setLiked(saved.includes(item.id));
  }, [item.id]);

  const toggleWishlist = () => {
    const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const next = saved.includes(item.id)
      ? saved.filter((id) => id !== item.id)
      : [...saved, item.id];

    localStorage.setItem("wishlist", JSON.stringify(next));
    setLiked(!liked);
    toast.success(liked ? "Removed from wishlist" : "Added to wishlist");
  };

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success(`${item.name} added to cart`);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-50 p-5">
        <img
          src={item.img}
          alt={item.name}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
        <button
          onClick={toggleWishlist}
          className="absolute right-3 top-3 rounded-full bg-white p-2.5 shadow-md transition hover:scale-110"
          aria-label="Toggle wishlist"
        >
          {liked ? <FaHeart className="text-rose-500" /> : <FaRegHeart className="text-slate-500" />}
        </button>
        <span className="absolute left-3 top-3 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
          20% OFF
        </span>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-slate-900">{item.name}</h3>
            <p className="mt-1 text-xs text-slate-500">Size: {item.size}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-amber-500">
            <FaStar /> 4.5
          </div>
        </div>

        <p className="line-clamp-2 text-sm text-slate-500">{item.des}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-extrabold text-slate-900">₹{item.price.toLocaleString("en-IN")}</span>
            <span className="ml-2 text-xs text-slate-400 line-through">₹{(item.price * 1.25).toLocaleString("en-IN")}</span>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-rose-600 active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
