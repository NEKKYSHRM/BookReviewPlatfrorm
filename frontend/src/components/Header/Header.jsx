import React from 'react'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-md">
    <div className="text-xl font-bold">
      Book <span className="text-yellow-400">Reviewer</span>
    </div>
    <nav className="space-x-6">
      <button className="hover:text-yellow-400 cursor-pointer transition duration-300">Sign In</button>
      <button className="hover:text-yellow-400 cursor-pointer transition duration-300">Sign Up</button>
    </nav>
  </header>
  )
}
