
import Link from "next/link";
import Image from "next/image";
import Header from "./header";
import MobileNav from "./mobile_nav";


export default function Nav () {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 flex justify-between p-4 border-b bg-white z-50">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Flowbite Logo"
                        width={32}
                        height={32}
                    />
                    <span className="text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
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