// import React from "react";
// import CubismComponent from "@/components/CubismComponent";

// const Home: React.FC = () => {
//   return (
//     <div>
//       <CubismComponent />
//     </div>
//   );
// };

// export default Home;
// pages/index.tsx
// import React from "react";
// import AzureSttComponent from "../src/components/AzureSttComponent";
// import CubismComponent from "../src/components/CubismComponent";
import CubismComponent from "@/components/CubismComponent";
import AzureSttComponent from "@/components/AzureSttComponent";

import React, { useState } from 'react';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <div
      className="h-screen kanit-regular"
      style={{
        backgroundImage: `url('background_gedung.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <nav className="fixed w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center z-20 top-[10px] start-[20px]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="menu.svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 w-full font-medium border border-gray-100 rounded-lg bg-gray-50 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                  onClick={handleMenuItemClick} // Close menu on item click
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={handleMenuItemClick} // Close menu on item click
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={handleMenuItemClick} // Close menu on item click
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={handleMenuItemClick} // Close menu on item click
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex justify-center items-center h-screen w-full">
        <CubismComponent />
        <AzureSttComponent />
        {/* Uncomment to show character image */}
        {/* <div className="flex justify-center items-center -mt-24">
          <img
            src="/images/fikri_character.png"
            alt="fikri_character"
            className="h-[355px]"
          />
        </div> */}
      </div>
      {/* Uncomment for footer section */}
      {/* <div className="w-full min-h-80 bg-[#1A0C44] fixed bottom-0 flex flex-col items-center">
        <div className="text-center text-3xl text-white font-medium">
          <div id="" className="mt-[55px]">
            Halo!
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;