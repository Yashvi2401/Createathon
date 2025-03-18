import React from 'react';
import { Link } from 'react-router-dom';

function Signup({setCurrentStep}) {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-red-500 text-2xl font-bold mb-4">Sign Up</h2>
      
      <div className="flex space-x-3 mb-2">
        <div className="w-8 h-8 border border-red-400 flex items-center justify-center rounded"></div>
        <div className="w-8 h-8 border border-red-400 flex items-center justify-center rounded"></div>
        <div className="w-8 h-8 border border-red-400 flex items-center justify-center rounded"></div>
      </div>

      <div className="text-center text-gray-500 mb-2">OR</div>
      
      <form className="space-y-4 w-64">
        <input className="w-full p-2 border border-red-400 rounded" type="text" placeholder="Username" />
        <input className="w-full p-2 border border-red-400 rounded" type="email" placeholder="Email" />
        <input className="w-full p-2 border border-red-400 rounded" type="password" placeholder="Password" />
        <input className="w-full p-2 border border-red-400 rounded" type="password" placeholder="Confirm Password" />
        <Link to={"/dashboard"}>
        <button className="w-full p-2 bg-red-400 text-white rounded hover:bg-red-500 transition">Submit</button>
        </Link>
      </form>

        <Link to={"/authentication"} onClick={()=>setCurrentStep("login")}>Login</Link>
    </div>
  );
}

export default Signup;
