import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem("loggedInUser")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    else sessionStorage.removeItem("loggedInUser");
  }, [user]);

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("fashion_users") || "[]");

    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, message: "Email already registered." };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      phone: "",
      address: "",
    };

    localStorage.setItem("fashion_users", JSON.stringify([...users, newUser]));
    return { ok: true, message: "Signup successful. Please login." };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("fashion_users") || "[]");

    const foundUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!foundUser) {
      return { ok: false, message: "Invalid email or password." };
    }

    const loggedUser = { ...foundUser };
    delete loggedUser.password;
    setUser(loggedUser);

    return { ok: true };
  };

  const updateProfile = (updates) => {
    setUser((current) => {
      const updated = { ...current, ...updates };

      const users = JSON.parse(localStorage.getItem("fashion_users") || "[]");
      const nextUsers = users.map((u) =>
        u.id === updated.id ? { ...u, ...updates } : u
      );

      localStorage.setItem("fashion_users", JSON.stringify(nextUsers));
      return updated;
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
