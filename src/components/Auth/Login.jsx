import React from "react";
import { Link } from "react-router-dom";

function Login({setCurrentStep}) {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-purple-600 text-2xl font-bold  text-5xl flex justify-center items-center mb-20">Login</h2>

      <form className="">
        <label className=" text-gray-600 font-semibold">UserName:</label>
        <input
          className="w-full p-2 border border-purple-400 rounded-lg bg-purple-200 outline-none focus:ring-2 focus:ring-purple-500 mb-10"
          type="text"
          placeholder="Enter username"
        />

        <label className="block text-gray-600 font-semibold">Password:</label>
        <input
          className="w-full p-2 border border-purple-400 rounded-lg bg-purple-200 outline-none focus:ring-2 focus:ring-purple-500 mb-10"
          type="password"
          placeholder="Enter password"
        />

        <Link to="/dashboard">
        <button className="w-full p-2 bg-purple-400 text-white rounded-lg border border-black hover:bg-purple-500 transition shadow-md mb-10">
          Submit
        </button>
        </Link>
        
        <Link to={"/authentication"} onClick={()=>setCurrentStep("signup")}>Signup</Link>
      </form>
    </div>
  );
}

export default Login;
