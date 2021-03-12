import React from "react";

export default function Header() {
  return (
    <nav className="bg-indigo-700 shadow-lg">
      <div className="container mx-auto">
        <div className="sm:flex justify-between">
          {/* site title */}
          <a href="#" className="text-red-500 text-3xl font-bold p-3 ">
            PHIM HAY
          </a>
          {/* Menu Item */}
          <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
            <li className="sm:inline-block">
              <a href="#" className="p-3 hover:text-white">
                Home
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#" className="p-3 hover:text-white">
                About
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#" className="p-3 hover:text-white">
                Contact
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#" className="p-3 hover:text-white">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
