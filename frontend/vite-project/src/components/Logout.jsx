import React from 'react'
import {useDispatch} from 'react-redux'
import { logout } from '../store/authSlice.js'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";

function LogoutComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_LOGOUT_URL,{});
            if (response){
                dispatch(logout());
                navigate("/");
            }
            else{
                alert ("No response")
            }
        } catch (error) {
            console.error("Error logging out: ", error);
            alert("Error logging out...");
        }
    }
    return (
        <button
        className='flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded-md text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        onClick={logoutHandler}>
            Logout <IoIosLogOut /> 
        </button>
    )
}

export default LogoutComponent