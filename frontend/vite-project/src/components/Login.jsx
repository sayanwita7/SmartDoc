import axios from "axios";
import { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux"
import { login as authLogin } from '../store/authSlice.js'

function LoginComponent() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

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
      const response = await axios.post(import.meta.env.VITE_LOGIN_URL, {
        phone: formData.phone,
        password: formData.password,
      });
      const username= response.data.user.Username;
      if (username) {
            dispatch (authLogin({userData: {username}}));
            alert("Logged In! Welcome ", username);
            navigate(location.state?.from || "/", { replace: true });
      }
      else{
        alert("Invalid login credentials.");
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Logging failed.");
    }
  };
      
  return (
    <>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#121212] to-fuschia-700 font-sans m-0">
          <div className="relative w-[350px] bg-white/5 rounded-[15px] p-5 text-center shadow-md backdrop-blur-md">
            <h2 className="text-white mb-5 text-xl font-semibold">LOGIN</h2>

            <div className="mb-4 text-left">
              <label htmlFor="floating_username" className="block text-sm text-gray-400 mb-1">PHONE</label>
              <input
                type="name"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                id="phone"
                placeholder="Enter Phone"
                required
                className="w-[95%] p-2.5 rounded-lg bg-white/10 text-white text-sm border-none focus:outline-none placeholder:text-gray-300"
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="floating_password" className="block text-sm text-gray-400 mb-1">PASSWORD</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="floating_password"
                placeholder="Enter Password"
                required
                className="w-[95%] p-2.5 rounded-lg bg-white/10 text-white text-sm border-none focus:outline-none placeholder:text-gray-300"
              />
            </div>

            <button type="submit" className="w-full py-2.5 bg-[#1f2d52] text-white text-center rounded-full font-bold mt-2 hover:bg-[#293b6a] cursor-pointer border-none">
              LOGIN
            </button>

            <div className="mt-3 text-sm flex justify-between text-white">
              <a onClick={() => navigate("/register")} className="cursor-pointer text-[#4a90e2] hover:underline">Not Signed Up? Register!</a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginComponent;