import React from "react";
import { useCart } from "../context/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-slate-50 sm:h-28 sm:w-28">
        <img src={item.img} alt={item.name} className="h-full w-full object-contain p-2" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-slate-900">{item.name}</h3>
            <p className="mt-1 text-sm text-slate-500">Size: {item.size}</p>
          </div>
          <button
            onClick={() => dispatch({ type: "Remove_From_Cart", payload: item.id })}
            className="rounded-lg p-2 text-lg text-slate-400 hover:bg-rose-50 hover:text-rose-600"
            aria-label="Remove item"
          >
            <RiDeleteBin6Line />
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-lg font-extrabold text-slate-900">₹{item.price.toLocaleString("en-IN")}</p>

          <div className="flex items-center rounded-lg border border-slate-200">
            <button
              onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
              className="p-2 hover:bg-slate-100"
            >
              <FaMinus className="text-xs" />
            </button>
            <span className="min-w-9 text-center text-sm font-bold">{item.quantity}</span>
            <button
              onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
              className="p-2 hover:bg-slate-100"
            >
              <FaPlus className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
