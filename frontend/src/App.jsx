import { useState } from "react";
import "./App.css";
import hero from "./assets/hero.jpg";
import { FaStar } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

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

      <section className="w-full flex flex-col gap-10 items-center justify-center bg-stone-950 p-10">
        <div className="w-full flex px-20">
          <h2 className="text-yellow-400 text-3xl font-bold text-left">
            Featured Books Carcell
          </h2>
        </div>
        <div className="w-full grid grid-cols-4 place-content-center px-20">
          <div className="flex flex-col w-60 border-0 border-yellow-400 p-4 bg-stone-700 shadow-sm shadow-stone-100">
            <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-yellow-400 border-2">
              <img
                src="/hero.jpg"
                alt="student's profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <h2 className="text-gray-100">Traffic Secret</h2>
              <div className="flex">
                <FaStar size={24} className="text-yellow-400" />
                <FaStar size={24} className="text-yellow-400" />
                <FaStar size={24} className="text-yellow-400" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-60 border-0 border-yellow-400 p-4 bg-stone-700 shadow-sm shadow-stone-100">
            <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-yellow-400 border-2">
              <img
                src="/hero.jpg"
                alt="student's profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <h2 className="text-gray-100">Traffic Secret</h2>
              <div className="flex">
                <FaStar size={24} className="text-yellow-400" />
                <FaStar size={24} className="text-yellow-400" />
                <FaStar size={24} className="text-yellow-400" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-60 border-0 border-yellow-400 p-4 bg-stone-700 shadow-sm shadow-stone-100">
            <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-yellow-400 border-2">
              <img
                src="/hero.jpg"
                alt="student's profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <h2 className="text-gray-100">Traffic Secret</h2>
              <div className="flex">
                <FaStar size={24} className="text-yellow-400" />
                <FaStar size={24} className="text-yellow-400" />
                <FaStar size={24} className="text-yellow-400" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-60 border-0 border-yellow-400 p-4 bg-stone-700 shadow-sm shadow-stone-100">
            <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-yellow-400 border-2">
              <img
                src="/hero.jpg"
                alt="student's profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <h2 className="text-gray-100">Traffic Secret</h2>
              <div className="flex">
                <FaStar size={24} className="text-yellow-400" />
                <FaStar size={24} className="text-yellow-400" />
                <FaStar size={24} className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
