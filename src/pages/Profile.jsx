import { useState } from "react";
import { Link,useNavigate } from "react-router";
import { FaHeart,FaShoppingBag,FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Profile(){
  const {user,updateProfile,logout}=useAuth(); const {state}=useCart(); const navigate=useNavigate();
  const [edit,setEdit]=useState(false); const [form,setForm]=useState(user);
  const wishlist=JSON.parse(localStorage.getItem("wishlist")||"[]");
  const save=()=>{updateProfile(form);setEdit(false);toast.success("Profile updated");};
  const out=()=>{logout();toast.success("Logged out");navigate("/");};
  
  
  return <section className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
    <div className="rounded-3xl bg-slate-900 p-6 text-white sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-black text-rose-600">{user.name?.[0]?.toUpperCase()}</div>
        <div><p className="text-sm text-slate-400">My Account</p><h1 className="text-3xl font-black">{user.name}</h1><p className="text-slate-300">{user.email}</p></div>
        <button onClick={out} className="sm:ml-auto rounded-xl bg-white/10 px-5 py-3 font-bold hover:bg-rose-600">Logout</button>
      </div>
    </div>
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      <Link to="/orders" className="rounded-2xl bg-white p-5 shadow-sm"><FaShoppingBag className="text-rose-600 text-2xl"/><b className="mt-3 block text-2xl">{state.cartItems.length}</b><span className="text-sm text-slate-500">Cart Items</span></Link>
      <Link to="/wishlist" className="rounded-2xl bg-white p-5 shadow-sm"><FaHeart className="text-rose-600 text-2xl"/><b className="mt-3 block text-2xl">{wishlist.length}</b><span className="text-sm text-slate-500">Wishlist</span></Link>
      <div className="rounded-2xl bg-white p-5 shadow-sm"><FaMapMarkerAlt className="text-rose-600 text-2xl"/><b className="mt-3 block">Address</b><span className="text-sm text-slate-500">{user.address}</span></div>
    </div>
    <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex justify-between"><h2 className="text-xl font-black">Personal Information</h2><button onClick={()=>setEdit(!edit)} className="font-bold text-rose-600">{edit?"Cancel":"Edit"}</button></div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {["name","email","phone","address"].map(k=><div key={k}><label className="mb-2 block text-xs font-bold uppercase text-slate-400">{k}</label>{edit?<input value={form[k]||""} onChange={e=>setForm({...form,[k]:e.target.value})} className="w-full rounded-xl border px-4 py-3 outline-none focus:border-rose-400"/>:<p className="rounded-xl bg-slate-50 px-4 py-3 text-sm">{user[k]||"Not added"}</p>}</div>)}
      </div>
      {edit&&<button onClick={save} className="mt-5 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white hover:bg-rose-600">Save Changes</button>}
    </div>
  </section>
}
