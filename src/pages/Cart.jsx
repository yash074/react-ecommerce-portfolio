import React from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;

  if (!cartItems.length) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center px-4 text-center">
        <div>
          <div className="text-6xl">🛍️</div>
          <h1 className="mt-5 text-3xl font-black">Your cart is empty</h1>
          <p className="mt-2 text-slate-500">Add something you love and come back here.</p>
          <Link to="/" className="mt-6 inline-block rounded-xl bg-slate-900 px-6 py-3 font-bold text-white hover:bg-rose-600">
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-12">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link to="/" className="text-sm font-semibold text-rose-600">← Continue Shopping</Link>
          <h1 className="mt-2 text-3xl font-black">Your Cart</h1>
          <p className="mt-1 text-sm text-slate-500">{cartItems.length} product type(s) in your cart</p>
        </div>
        <button
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          className="self-start rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 hover:bg-rose-50 hover:text-rose-600"
        >
          Clear Cart
        </button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default Cart;
