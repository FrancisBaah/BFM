import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Register() {
  const [signUpOrIn, setSignupOrIn] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, password, email, confirmPassword } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="h-full w-full bg-gray-200 flex items-center justify-center">
      <div className="h-[80%] z-10 w-[80%] flex bg-white shadow-lg relative">
        <span className="w-full relative">
          <h1 className="spin absolute left-2 top-2">bfs</h1>
          <img
            src="/chart.jpg"
            className="w-full h-full object-cover"
            alt="Background"
          />
        </span>
        <span className="w-full px-10 md:px-20 py-5 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {signUpOrIn === "register" ? (
              <motion.form
                key="register"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                onSubmit={handleSubmit}
                className="flex flex-col"
              >
                <h1 className="title">Register Here</h1>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                  required
                />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                  required
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                  required
                />
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  className="p-2 mb-2 border rounded"
                  required
                />
                <button type="submit" className="btn">
                  Register
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="login"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4"
              >
                <h1 className="title">Login</h1>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                  required
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                  required
                />
                <button type="submit" className="btn">
                  Login
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          <div className="mt-4">
            {signUpOrIn === "register" ? (
              <p>
                Already have an account{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setSignupOrIn("login")}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                New member?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setSignupOrIn("register")}
                >
                  register
                </span>
              </p>
            )}
          </div>
        </span>
      </div>
      <div className="bg-blue-500 absolute h-screen w-[30vw] left-0 z-0"></div>
    </div>
  );
}

export default Register;
