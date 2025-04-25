import React from "react";
import { FaStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function BooksList() {
  return (
    <div className="w-full bg-stone-900 font-bold text-white justify-center items-center py-10">
      <div className="w-3/5 m-auto flex justify-center items-center my-4">
        <input type="text" placeholder="Search" className="bg-white w-full py-2 text-black text-lg px-4 border-2 border-yellow-400" />
        <button className="bg-yellow-400 border-1 border-yellow-400 text-3xl py-2 px-2 font-bold"><CiSearch/></button>
      </div>
      <section className="w-full flex flex-col gap-10 items-center justify-center bg-stone-900 p-10">
        <div className="w-full flex px-20">
          <h2 className="text-yellow-400 text-3xl font-bold text-left">
            Featured Books Carcell
          </h2>
        </div>
        <div className="w-full grid grid-cols-4 place-content-center gap-12 px-20">
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
