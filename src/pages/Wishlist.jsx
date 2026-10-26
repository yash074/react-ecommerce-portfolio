import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import { Products } from "../data/ProductData";
export default function Wishlist(){
 
    const ids=JSON.parse(localStorage.getItem("wishlist")||"[]"); 
    const items=Products.filter(p=>ids.includes(p.id));
 return <section className="mx-auto max-w-7xl px-4 py-10">
    <Link to="/profile" className="font-bold text-rose-600">← Profile</Link>
    
    <h1 className="mt-3 text-3xl font-black">My Wishlist</h1>
 
 {items.length?<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map(i=><ProductCard key={i.id} item={i}/>)}

 </div>:
 <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow"><div className="text-5xl">♡</div>
 <h2 className="mt-4 text-xl font-bold">Wishlist is empty</h2>
 
 <Link to="/" className="mt-5 inline-block rounded-xl bg-slate-900 px-6 py-3 font-bold text-white">Explore Products</Link>
 </div>
 }
 </section>
}
