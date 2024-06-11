"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
/* import { getServerSession } from "next-auth"; */
import { IoLogoYoutube } from "react-icons/io";
import { TfiAlignJustify } from "react-icons/tfi";
import { MdEmojiEmotions } from "react-icons/md";
export function Navbar() {
  /* const session = await getServerSession(); */
  //const { data: session, status } = useSession();

  const pathname = usePathname();
  return (
    <nav className="">
      <div className="bg-white h-16  w-full ">
        <div className="flex mt-1">
          <div className="sm:flex w-20 sm:w-auto">

            
            <div className="text-xl ml-4 flex items-center">
              <span className="ml-6 mr-4  text-2xl hidden sm:block"><TfiAlignJustify /></span>
              <span className="text-yellow-300 text-4xl border-2 border-gray-500 rounded-full"><MdEmojiEmotions /></span>
              <h1 className="ml-2 font-bold hidden sm:block">Chansa</h1>
            </div>
          </div>
          <div className=" w-full">
            <div className="flex justify-center ">
              <form action="" >
                <div className="border-gray-400 rounded-lg flex">
                  <input type="text" className="sm:w-96  border-2 border-gray-300 rounded-l-full px-3 py-1 focus:ring-gray-500" />
                  <button className="border-2  border-gray-300 bg-gray-200  rounded-r-full"><CiSearch /></button>


                </div>
              </form>
            </div>

          </div>
          <div className="w-16 flex justify-center  sm:w-32 sm:flex sm:justify-center">
            <div className="h-10 w-10 rounded-full border-2 border-gray-400 bg-red-200 flex justify-center items-center">
      P
    </div>
          </div>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;
