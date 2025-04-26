import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/users/userData`,
          { withCredentials: true }
        );
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const logout = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/users/logout`,
        { withCredentials: true }
      );
      console.log("User logged out successfully", res.data);
      navigate("/signin");
    } catch (error) {
      console.error(error.message);
    }
  };

  const addBook = async () => {
    navigate("/addBook")
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-stone-900 shadow-gray-200 shadow-md text-center px-10 py-10">
      <div className="container border border-black rounded-lg shadow-lg p-6 w-96 bg-white">
        {/* Profile Picture */}
        {/* <div className="flex justify-center mb-4">
          <Image
            src={"" || profileDefault} // Default avatar if missing
            width={100}
            height={100}
            alt="Profile Picture"
            className="rounded-full border-2 border-green-500"
          />
        </div> */}

        {/* User Details */}
        <h1 className="text-2xl font-bold text-green-700">
          {user.fullname || "Your Name"}
        </h1>
        <p className="text-gray-600">@{user?.username || "username"}</p>
        <p className="text-gray-500 mt-2">{user?.email || "Your Email"}</p>
        <p className="text-gray-500">{user?.phone || "Your Phone Number"}</p>

        {/* Logout Button */}
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={logout}
            className="bg-red-500 w-72 hover:bg-red-700 text-white px-4 py-2 mt-4 rounded-md transition"
          >
            Logout
          </button>
          <button
            onClick={addBook}
            className="bg-yellow-400 w-72 hover:bg-yellow-700 text-white px-4 py-2 mt-4 rounded-md transition"
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
}
