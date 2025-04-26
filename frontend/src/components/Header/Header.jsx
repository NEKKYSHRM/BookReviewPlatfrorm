import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider.jsx";

export default function Header() {

  const {user} = useAuth()

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-md">
      <div className="text-xl font-bold">
        <Link to="/">
          Book <span className="text-yellow-400">Reviewer</span>
        </Link>
      </div>

      <nav className="space-x-6">
        {user ? (
          <>
            <Link
              to="/profile"
              className="hover:text-yellow-400 cursor-pointer transition duration-300"
            >
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/signin"
              className="hover:text-yellow-400 cursor-pointer transition duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="hover:text-yellow-400 cursor-pointer transition duration-300"
            >
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
