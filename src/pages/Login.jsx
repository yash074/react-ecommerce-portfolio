import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeMode = (signupMode) => {
    setIsSignup(signupMode);
    setForm({ name: "", email: "", password: "", confirmPassword: "" });
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();

    if (isSignup) {
      if (!name || !email || !form.password || !form.confirmPassword) {
        toast.error("Please fill all fields.");
        return;
      }

      if (form.password.length < 6) {
        toast.error("Password must be at least 6 characters.");
        return;
      }

      if (form.password !== form.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }

      const result = signup(name, email, form.password);

      if (!result.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
      changeMode(false);
      return;
    }

    if (!email || !form.password) {
      toast.error("Please enter email and password.");
      return;
    }

    const result = login(email, form.password);

    if (!result.ok) {
      toast.error(result.message);
      return;
    }

    toast.success("Login successful!");
    navigate("/profile");
  };

  return (
    <section className="min-h-[calc(100vh-100px)] bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-xl sm:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-black text-slate-900">
            {isSignup ? "Create Account" : "Login"}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {isSignup
              ? "Create your account to continue."
              : "Login to access your account."}
          </p>
        </div>

        <div className="mt-7 flex rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => changeMode(false)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-bold ${
              !isSignup ? "bg-white shadow-sm" : "text-slate-500"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => changeMode(true)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-bold ${
              isSignup ? "bg-white shadow-sm" : "text-slate-500"
            }`}
          >
            Signup
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {isSignup && (
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-rose-400"
              />
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-semibold">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-rose-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Password
            </label>

            <div className="flex rounded-xl border border-slate-200 px-4 focus-within:border-rose-400">
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                placeholder="Enter password"
                className="w-full py-3 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xl text-slate-400"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
          </div>

          {isSignup && (
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Confirm Password
              </label>

              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({
                    ...form,
                    confirmPassword: e.target.value,
                  })
                }
                placeholder="Confirm password"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-rose-400"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 py-3.5 font-bold text-white transition hover:bg-rose-600"
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => changeMode(!isSignup)}
            className="font-bold text-rose-600"
          >
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>

        <Link
          to="/"
          className="mt-4 block text-center text-sm font-semibold text-slate-400 hover:text-rose-600"
        >
          ← Continue Shopping
        </Link>
      </div>
    </section>
  );
}
