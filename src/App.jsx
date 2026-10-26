import { useState } from "react";
import "./App.css";
import AppRoutes from "./data/AppRoutes";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./pages/Footer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className="min-h-screen bg-slate-50">
        <AppRoutes search={search} />
      </main>
      <Toaster position="top-right" />
      <Footer/>
    </>
  );
}

export default App;
