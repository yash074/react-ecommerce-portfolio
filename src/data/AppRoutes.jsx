import {Routes,Route} from "react-router";
import Home from "../pages/Home"; 
import Men from "../pages/Men"; 
import Women from "../pages/Women"; 
import Kids from "../pages/Kids"; 
import Beauty from "../pages/Beauty"; 
import Cart from "../pages/Cart"; 
import Login from "../pages/Login"; 
import Profile from "../pages/Profile"; 
import Orders from "../pages/Orders"; import Wishlist from "../pages/Wishlist"; 
import ProtectedRoute from "../components/ProtectedRoute";


export default function AppRoutes({search})
{
    return <Routes>
<Route path="/" element={<Home search={search}/>}/>
<Route path="/men" element={<Men search={search}/>}/>
<Route path="/women" element={<Women search={search}/>}/>
<Route path="/kids" element={<Kids search={search}/>}/>
<Route path="/beauty" element={<Beauty search={search}/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>

<Route path="/orders" element={<ProtectedRoute><Orders/></ProtectedRoute>}/>
<Route path="/wishlist" element={<ProtectedRoute><Wishlist/></ProtectedRoute>}/>
</Routes>
}
