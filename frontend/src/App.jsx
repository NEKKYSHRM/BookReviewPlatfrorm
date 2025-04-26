import React, { useEffect, useState } from "react";
import "./App.css";
import hero from "./assets/hero.jpg";
import { FaStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

function App() {
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

  return (
    <div className="bg-stone-950 font-bold text-white">
      <section className="relative">
        <img src={hero} alt="Hero" className="w-full h-[80vh] object-cover" />
        <div className="absolute inset-0  bg-opacity-100 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-yellow-400 text-center px-4 ">
            Welcome to <span className="text-white">Book Reviewer</span>
          </h1>
        </div>
      </section>

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

export default App;
