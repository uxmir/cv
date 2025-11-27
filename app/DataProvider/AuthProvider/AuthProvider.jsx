"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // getting user in localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Invalid JSON in user:", error);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);
  // signUp logic
  const signUp = async (formData) => {
    try {
      const auth_api = process.env.NEXT_PUBLIC_AUTH_API;
      const response = await fetch(`${auth_api}/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Signup response:", data);
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        setUser(data.user);
        console.log(data.user);
        toast.success("User created successfully");
        router.push("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      toast.error(data?.error || "Signup error");
    }
  };
  // login logic
  const login = async (formData) => {
    try {
      const login_api = process.env.NEXT_PUBLIC_AUTH_API;
      const response = await fetch(`${login_api}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Login response:", data);
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        setUser(data.user);
        toast.success("Login successful");
        router.push("/dashboard");
      } else {
        toast.warn(data.message);
      }
    } catch (error) {
      toast.error(data?.error || "Login error");
    }
  };
  // logout logic
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    toast.warn("You are logged out");
    router.push("/");
  };
  //deleteAccountLogic
  const deleteAccount = async (id) => {
    try {
      const delete_api = process.env.NEXT_PUBLIC_AUTH_API;
      const response = await fetch(`${delete_api}/auth/${id}`, {
        method: "DELETE",
      });
      setUser(null);
      toast.warn("Your Account is deleted successfully");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.push("/");
    } catch (error) {
      console.error("user is not deleted", error);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, setUser, signUp, login, logout, loading, deleteAccount }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
