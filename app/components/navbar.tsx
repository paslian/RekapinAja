"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();

  return (
    <>
      <div className="h-20 w-full border-b-2 flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/img/logo_rekapinaja.JPG"
              alt="Logo"
              width={100}
              height={100}
              className="md:block hidden"
            />
          </Link>
          <ul className="hidden md:flex space-x-4">
            <li className="p-2 cursor-pointer">
              <Link href="/pengeluaran">Pengeluaran</Link>
            </li>
            <li className="p-2 cursor-pointer">
              <Link href="/pemasukan">Pemasukan</Link>
            </li>
          </ul>
        </div>

        {/* User Info and Login/Logout Button */}
        <div className="hidden md:flex items-center space-x-4">
          {session?.data?.user ? (
            <>
              <div className="p-2 font-medium">{session.data.user.name}</div>
              <button
                className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </Link>
          )}
        </div>

        {/* Logo and Hamburger Menu for Mobile */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Link href="/">
            <Image
              src="/img/logo_rekapinaja.JPG"
              alt="Logo"
              width={50}
              height={50}
              className="block"
            />
          </Link>
          <button
            id="menu-toggle"
            className="p-2 text-gray-700 focus:outline-none focus:text-gray-900"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden flex-col space-y-2 bg-white shadow-lg rounded-lg p-4 absolute top-20 left-0 right-0 mx-4"
      >
        <ul className="flex flex-col space-y-2">
          <li className="p-2 cursor-pointer border-b">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2 cursor-pointer border-b">
            <Link href="/pengeluaran">Pengeluaran</Link>
          </li>
          <li className="p-2 cursor-pointer border-b">
            <Link href="/pemasukan">Pemasukan</Link>
          </li>
        </ul>
        {session?.data?.user && (
          <div className="mt-4">
            <div className="p-2 font-medium">{session.data.user.name}</div>
            <button
              className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-full mt-2"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <script src="/toggleMenu.js"></script>
    </>
  );
};

export default Navbar;
