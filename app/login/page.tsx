import React from "react";
import Loginbtn from "../components/loginBtn";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-80 h-auto p-8 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Login Page</h1>
        <Loginbtn />
      </div>
    </div>
  );
};

export default Login;
