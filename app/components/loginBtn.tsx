"use client";

import { signIn } from "next-auth/react";
import React from "react";

const Loginbtn = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
    >
      Login with Google
    </button>
  );
};

export default Loginbtn;
