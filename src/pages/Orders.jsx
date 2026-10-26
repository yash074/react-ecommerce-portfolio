import { Link } from "react-router";
import { FaBoxOpen } from "react-icons/fa";
export default function Orders(){
 
 
    const orders=JSON.parse(localStorage.getItem("fashion_orders")||"[]");
 
 return<section className="mx-auto max-w-5xl px-4 py-10">
    <Link to="/profile" className="font-bold text-rose-600">← Profile</Link>
    <h1 className="mt-3 text-3xl font-black">My Orders</h1>
 {!orders.length?<div className="mt-8 rounded-2xl bg-white p-12 text-center shadow">
    <FaBoxOpen className="mx-auto text-5xl text-slate-300"/>
    <h2 className="mt-4 text-xl font-bold">No orders yet</h2>
    <Link to="/" className="mt-5 inline-block rounded-xl bg-slate-900 px-6 py-3 font-bold text-white">Start Shopping</Link>
    </div>:
 
 <div className="mt-8 space-y-4">{orders.map(o=><div key={o.id} className="rounded-2xl bg-white p-5 shadow-sm"><div className="flex justify-between"><b>Order #{o.id}</b>
 <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">{o.status}</span>
 </div>
 <p className="mt-2 text-sm text-slate-500">{o.date}</p>
 <p className="mt-4 font-bold">Total: ₹{o.total.toLocaleString("en-IN")}</p>
 </div>)}
 </div>}
 </section>
}
