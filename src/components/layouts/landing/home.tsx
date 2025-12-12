"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  weight: ["800"], // tous les poids
  subsets: ["latin"],
});

export default function LandingHome () {
  return (
    <section className="">
        {/* TOP SECTION */}
        <div className="md:flex gap-10 items-start">
            {/* LEFT TEXT */}
            <div className="max-w-4xl">
                <p className={`${robotoSlab.className} text-sm tracking-wide font-bold mb-3`}>
                    Pour le secteur résidentiel
                </p>

                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-black capitalize">
                    Je <br /> construis <br /> Ma maison<br /> de Rêve
                </h1>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[450px] md:mt-0 mt-8 md:rounded-tl-[200px] rounded-tl-[100px] overflow-hidden">
                <Image
                    src="/assets/batiments/Crestron-Milan-Office-1.jpg"
                    alt="Industrial safety worker"
                    fill
                    className="object-cover"
                />
            </div>

        </div>
        <div className="">
            <div className="md:flex justify-between items-center gap-6">
                <p className="text-gray-600  max-w-2xl mt-2">
                    Our company is about safety. We design, develop, install and maintain
                    safety systems in a range of contexts, from large industrial buildings
                    to residential homes.
                </p>

                {/* Ligne pointillée */}
                <div className="flex-1 md:flex items-center hidden max-w-lg">
                    <hr className="border-t-4 border-gray-800 border-dashed w-full" />
                </div>
            </div>

            <div className="md:flex justify-between items-start">
                <div>
                    <Button className="mt-4 h-11 rounded-full uppercase px-10">
                        Parler à un expert
                    </Button>
                </div>
                <div className="flex md:mt-0 mt-6 items-center md:justify-end justify-center">
                    <div className="relative h-20 md:h-24 w-48">
                        <Image
                            src="/assets/landing/1a0ab4e00a136fbdbf475d4bc3f0b7aa.jpg"
                            alt="Industry"
                            fill
                            className="object-cover rounded-full opacity-90"
                        />
                        <div className="absolute inset-0 backdrop-blur-[1px] flex items-center justify-center">
                            <p className="text-white text-xs font-semibold text-center">
                            Fall Arresters For Industry
                            </p>
                        </div>
                    </div>

                    <div className="-ml-15 relative h-22 md:h-24 w-80 
                        mask-[radial-gradient(circle_50px_at_0%_50%,transparent_0,transparent_70px,black_41px)]
                        overflow-hidden">

                        <Image
                            src="/assets/landing/ef6e7d3cd6ff5e4c37c6016a7847c234.jpg"
                            alt="Building Safety"
                            fill
                            className="object-cover rounded-full opacity-90"
                        />

                        <div className="absolute inset-0 backdrop-blur-[1px] flex items-center justify-center">
                            <p className="text-white text-sm font-semibold text-center">
                                Building Safety
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
