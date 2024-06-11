"use client";
import { usePathname } from "next/navigation";
import { FaHouse } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";
import Link from 'next/link';
export function Footer() {
    /* const session = await getServerSession(); */
    //const { data: session, status } = useSession();

    const pathname = usePathname();
    return (
        <nav className="border-t-2 border-2 mt-2  sm:hidden">
            <div className="h-12 w-full flex justify-between text-xs ">
                <div className="flex justify-center w-full">
                    <Link href="/">
                        <div className="flex flex-col items-center hover:bg-gray-200 w-full py-1">

                            <FaHouse className="text-2xl" />
                            <span className="text-center  ">Principal</span>

                        </div>
                    </Link>
                </div>
                <div className="flex justify-center w-full">
                    <Link href="/videos">
                        <div className="flex flex-col items-center hover:bg-gray-200 w-full py-2 cursor-pointer">
                            <SiYoutubeshorts className="text-2xl" />
                            <span className="text-center">Shorts</span>
                        </div>
                    </Link>
                </div>

            </div>

        </nav>
    );
}

export default Footer;
