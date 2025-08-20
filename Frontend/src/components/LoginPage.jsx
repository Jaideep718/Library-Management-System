
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("email", email); // Store email in localStorage
        toast.success("Logged in successfully", { duration: 1500 });
        navigate("/books");
      } else {
        toast.error(response.data.message || "Invalid email id or password", { duration: 2000 });
      }
    } catch (err) {
      toast.error("Error: " + (err.response?.data?.message || "Error logging in"), { duration: 2000 });
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} method="dialog" className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email-id
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              placeholder="Enter your Email-id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/signup" className="text-blue-500 hover:underline">
            New User? Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
