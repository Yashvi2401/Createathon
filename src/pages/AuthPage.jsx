import React, { useState } from "react";
import Signup from "../components/Auth/Signup";
import Welcome from "../components/Auth/Welcome";
import Login from "../components/Auth/Login";

export default function AuthPage() {
  const [currentStep, setCurrentStep] = useState("login");
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-3/4 h-3/4 border rounded-lg shadow-lg">
        <div className="basis-1/2 flex justify-center  border-r p-6">
          {currentStep == "login" && <Login setCurrentStep={setCurrentStep} />}
          {currentStep == "signup" && <Signup setCurrentStep={setCurrentStep} />}
        </div>

        <div className="basis-1/2 flex justify-center items-center p-6">
          <Welcome />
        </div>
      </div>
    </div>
  );
}
