import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { IoPersonOutline, IoBagOutline, IoMenu, IoClose, IoSearch } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/img/logo.png";

const Header = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const { state } = useCart();
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [wishlistOnly, setWishlistOnly] = useState(false);

  const totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const links = [
    ["Home", "/"],
    ["Men", "/men"],
    ["Women", "/women"],
    ["Kids", "/kids"],
    ["Beauty", "/beauty"],
  ];

  useEffect(() => {
    if (wishlistOnly) {
      window.dispatchEvent(new CustomEvent("wishlist-filter"));
    }
  }, [wishlistOnly]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:px-6">
        <button
          className="rounded-lg p-2 text-2xl lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <IoClose /> : <IoMenu />}
        </button>

        <Link to="/" className="shrink-0">
          <img src={logo} alt="Fashion Store" className="h-10 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive ? "text-rose-600" : "text-slate-700 hover:text-rose-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden min-w-0 flex-1 max-w-md md:block">
          <div className="flex items-center rounded-xl bg-slate-100 px-3 ring-1 ring-transparent focus-within:ring-rose-300">
            <IoSearch className="text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <button
            onClick={() => setWishlistOnly(!wishlistOnly)}
            className="relative rounded-xl p-2 text-xl text-slate-700 hover:bg-slate-100 hover:text-rose-600"
            aria-label="Wishlist"
          >
            {wishlistOnly ? <FaHeart className="text-rose-500" /> : <FaRegHeart />}
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="relative rounded-xl p-2 text-2xl text-slate-700 hover:bg-slate-100 hover:text-rose-600"
            aria-label="Cart"
          >
            <IoBagOutline />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>

          <button onClick={() => navigate(user ? "/profile" : "/login")} className="hidden rounded-xl p-2 text-2xl text-slate-700 hover:bg-slate-100 hover:text-rose-600 sm:block" aria-label="Profile"><IoPersonOutline /></button>
        </div>
      </div>

      <div className="px-4 pb-3 md:hidden">
        <div className="flex items-center rounded-xl bg-slate-100 px-3 ring-1 ring-transparent focus-within:ring-rose-300">
          <IoSearch className="text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"
          />
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <nav className="grid grid-cols-2 gap-2">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-rose-50 hover:text-rose-600"
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
