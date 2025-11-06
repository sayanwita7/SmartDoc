import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterComponent() {
    const [formData, setFormData] = useState({
    name:"",
    email: "",
    username: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(import.meta.env.VITE_REGISTER_URL, {
        name: formData.name,
        email: formData.email,
        username:formData.username,
        password: formData.password,
        phone:formData.phone
      });
      alert("User registered successfully!");
      navigate(-1);
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed.");
    }
  };
      
  return (
    <>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#121212] to-fuschia-700 font-sans m-0">
          <div className="relative w-[350px] bg-white/5 rounded-[15px] p-5 text-center shadow-md backdrop-blur-md mt-6">
            <h2 className="text-white mb-5 text-xl font-semibold">REGISTER</h2>


        {/* Name */}
        <div className="mb-4 text-left">
          <label htmlFor="floating_name" 
          className="block text-sm text-gray-400 mb-1">
            NAME
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id="floating_name"
            className="w-[95%] p-2.5 rounded-lg bg-white/10 text-white text-sm border-none focus:outline-none placeholder:text-gray-300"
            placeholder="Enter Name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4 text-left">
          <label htmlFor="floating_email" 
          className="block text-sm text-gray-400 mb-1">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="floating_email"
            className="w-[95%] p-2.5 rounded-lg bg-white/10 text-white text-sm border-none focus:outline-none placeholder:text-gray-300"
            placeholder="Enter Email"
            required
          />
          
        </div>

        {/* Username */}
        <div className="mb-4 text-left">
          <label htmlFor="floating_name" 
          className="block text-sm text-gray-400 mb-1">
            USERNAME
          </label>
          <input
            type="text"
            name="name"
            value={formData.username}
            onChange={handleChange}
            id="floating_name"
            className="w-[95%] p-2.5 rounded-lg bg-white/10 text-white text-sm border-none focus:outline-none placeholder:text-gray-300"
            placeholder="Enter username"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4 text-left">
          <label htmlFor="floating_password" 
          className="block text-sm text-gray-400 mb-1">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="floating_password"
            className="w-[95%] p-2.5 rounded-lg bg-white/10 text-white text-sm border-none focus:outline-none placeholder:text-gray-300"
            placeholder="Enter Password"
            required
          />
        </div>

        {/* PHONE */}
        <div className="mb-4 text-left">
          <label className="block text-sm text-gray-400 mb-1">
            PHONE
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            id="floating_phone"
            className="w-[95%] p-2.5 rounded-lg bg-white/10 text-white text-sm border-none focus:outline-none placeholder:text-gray-300"
            placeholder="Phone Number"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-[#1f2d52] text-white text-center rounded-full font-bold mt-2 hover:bg-[#293b6a] cursor-pointer border-none"
        >
          REGISTER
        </button>
        <div className="mt-3 text-sm flex justify-between text-white">
              <a onClick={() => navigate("/login")} className="cursor-pointer text-[#4a90e2] hover:underline">Already Registered? Log In!</a>
            </div>
        </div>
        </div>
      </form>
    </>
  );
}

export default RegisterComponent;