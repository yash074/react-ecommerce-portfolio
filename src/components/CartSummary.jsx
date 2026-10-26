import React from "react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const CartSummary = () => {
  const { state, dispatch } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { cartItems } = state;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = subtotal >= 999 ? 0 : 15;
  const total = subtotal - discount + deliveryFee;

  const checkout = () => {
    if (!user) 
      { toast("Please login to complete your order."); navigate("/login"); return;

       }
    const orders = JSON.parse(localStorage.getItem("fashion_orders") || "[]");
    const order = {
       id: `${Date.now().toString().slice(-6)}`,
        date: new Date().toLocaleString("en-IN"), 
        status: "Confirmed",
         total };
    localStorage.setItem("fashion_orders", JSON.stringify([order, ...orders]));
    dispatch({ type: "CLEAR_CART" });
    toast.success("Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-xl font-extrabold text-slate-900">Order Summary</h2>

      <div className="mt-5 space-y-4 text-sm">
        <div className="flex justify-between"><span className="text-slate-500">Subtotal</span><span>₹{subtotal.toLocaleString("en-IN")}</span></div>
        <div className="flex justify-between"><span className="text-slate-500">Total Items</span><span>{totalItems}</span></div>
        <div className="flex justify-between text-emerald-600"><span>Discount (20%)</span><span>- ₹{discount.toLocaleString("en-IN")}</span></div>
        <div className="flex justify-between"><span className="text-slate-500">Delivery</span><span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span></div>
      </div>

      <div className="my-5 border-t border-dashed border-slate-200 pt-5">
        <div className="flex justify-between text-lg font-extrabold">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <button
        onClick={checkout}
        className="w-full rounded-xl bg-rose-600 px-4 py-3.5 font-bold text-white transition hover:bg-rose-700"
      >
        Proceed to Checkout
      </button>

      <p className="mt-3 text-center text-xs text-slate-400">Secure checkout • Free delivery above ₹999</p>
    </div>
  );
};

export default CartSummary;
