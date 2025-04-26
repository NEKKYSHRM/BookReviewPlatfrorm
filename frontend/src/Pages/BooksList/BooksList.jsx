import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

export default function BooksList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/books/getBooks`)
      .then((res) => {
        setBooks(res.data.data);
      })
      .catch((err) => {
        console.error("Failed to fetch books", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-screen text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full bg-stone-900 font-bold text-white justify-center items-center py-10">
      {/* Search bar */}
      <div className="w-3/5 m-auto flex justify-center items-center my-4">
        <input
          type="text"
          placeholder="Search"
          className="bg-white w-full py-2 text-black text-lg px-4 border-2 border-yellow-400"
        />
        <button className="bg-yellow-400 text-3xl py-2 px-4">
          <CiSearch />
        </button>
      </div>

      {/* Book Listing */}
      <section className="w-full flex flex-col gap-10 items-center justify-center bg-stone-900 p-10">
        <div className="w-full flex px-20">
          <h2 className="text-yellow-400 text-3xl font-bold text-left">
            Featured Books
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-20">
          {books.map((book) => (
            <div
              key={book._id}
              className="flex flex-col w-60 border-0 border-yellow-400 p-4 bg-stone-700 shadow-sm shadow-stone-100"
            >
              <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-yellow-400 border-2">
                <img
                  src={book.coverImage || "https://images.pexels.com/photos/19026790/pexels-photo-19026790/free-photo-of-old-books-on-a-market-stall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} // fallback if image is not present
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <h2 className="text-gray-100">{book.title}</h2>
                <div className="flex">
                  {Array.from({ length: book.averageRating || 3 }).map((_, index) => (
                    <FaStar key={index} size={24} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
