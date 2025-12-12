
import Link from "next/link";
import Image from "next/image";
import Header from "./header";
import MobileNav from "./mobile_nav";


export default function Nav () {
    return (
        <>
            <div className="flex justify-between p-4 border-b bg-white">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/assets/logo/logo.png"
                        alt="TechMind Logo"
                        width={48}
                        height={48}
                        className="border border-gray-100 ml-3 md:ml-6 rounded-full w-10 h-10 md:w-12 md:h-12"
                    />
                </Link>
                <div>
                    <div className="md:block hidden">
                        <Header />
                    </div>

                    <div className="md:hidden">
                        <MobileNav />
                    </div>
                </div>
            </div>
        </>
    )
}