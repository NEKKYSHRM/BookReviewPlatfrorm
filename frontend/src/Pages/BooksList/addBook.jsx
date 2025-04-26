import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function addBook() {
  const navigate = useNavigate();
  const [book, setBook] = React.useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
    genre: [],
    averageRating: "",
  });

  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/books/addBook`,
        book
      );
      console.log("Response: ", response.data);
      navigate("/");
    } catch (error) {
      console.log("Signup Error: ", error.message);
      //   toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-900">
      <div className="bg-white shadow-sm shadow-gray-200 rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          {loading ? "Loading..." : "Add Book"}
        </h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Book Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={book.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              value={book.author}
              onChange={(e) => setBook({ ...book, author: e.target.value })}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              value={book.description}
              onChange={(e) => setBook({ ...book, description: e.target.value })}
              required
              className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="coverImage"
              className="block text-sm font-medium text-gray-700"
            >
              Cover Image
            </label>
            <input
              type="text"
              name="coverImage"
              id="coverImage"
              value={book.coverImage}
              placeholder="Paste the image link...(use google images)"
              onChange={(e) => setBook({ ...book, coverImage: e.target.value })}
              required
              className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <input
              type="text"
              name="genre"
              id="genre"
              value={book.genre}
              onChange={(e) => setBook({ ...book, genre: e.target.value })}
              required
              className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="averageRating"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              type="number"
              name="averageRating"
              id="averageRating"
              value={book.averageRating}
              onChange={(e) => setBook({ ...book, averageRating: e.target.value })}
              required
              className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
