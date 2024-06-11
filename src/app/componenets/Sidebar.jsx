// components/Sidebar.tsx
import React from "react";
import { FaHouse } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";
import Link from 'next/link';
const Sidebar = () => {
  return (
    <div className="w-24 md:w-64 bg-white text-white p-4 hidden sm:block">
      <ul className="text-black font-medium">
        <li className=" hover:bg-gray-200 hover:rounded-lg ">
          <Link href="/">
            <div className="flex p-2 ">
              <div className="w-16 flex justify-center items-center ">
                <span className="text-xl flex flex-col items-center">
                  <FaHouse />
                  <p className="text-xs pt-1 md:hidden">Inicio</p>
                </span>
              </div>
              <div className="w-full hidden md:block ">
                <h3 className="px-2 py-1">Inicio</h3>
              </div>
            </div>
          </Link>
        </li>
        <li className=" hover:bg-gray-200 hover:rounded-lg ">
          <Link href="/videos">
            <div className="flex p-2 ">
              <div className="w-16 flex justify-center items-center ">
                <span className="text-xl flex flex-col items-center">
                  <SiYoutubeshorts />
                  <p className="text-xs pt-1 md:hidden">Shorts</p>
                </span>
              </div>
              <div className="w-full hidden md:block ">
                <h3 className="px-2 py-1">Shorts</h3>
              </div>
            </div>
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
