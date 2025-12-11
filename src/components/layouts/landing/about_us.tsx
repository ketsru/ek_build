"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutUs () {
    return (
        <>
            <div className="md:flex gap-6 items-center">
                <div className="flex items-center md:p-5 gap-4">
                    <div className="relative w-80 h-[400px] rounded-none overflow-hidden border">
                        <Image
                        src="/assets/landing/1a0ab4e00a136fbdbf475d4bc3f0b7aa.jpg"
                        alt="Industry"
                        fill
                        className="object-cover"
                        />
                    </div>

                    <div className="-ml-36 mt-80 relative w-80 h-[400px] rounded-none overflow-hidden">
                        <Image
                        src="/assets/landing/ef6e7d3cd6ff5e4c37c6016a7847c234.jpg"
                        alt="Building Safety"
                        fill
                        className="object-cover"
                        />
                    </div>
                </div>
                <section className="px-6 md:px-20">
                    {/* TAG */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-10 h-0.5 bg-[#FBBF24] inline-block"></span>
                        <p className="text-[#FBBF24] font-bold">A propos de nous</p>
                    </div>

                    {/* TITLE */}
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Donner vie à <br />
                        votre habitat idéal, <br />
                        en partant des bases.
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-500 max-w-xl mb-8">
                        Nous menons à bien des tâches de complexité variable, offrons des garanties à long terme et maîtrisons régulièrement de nouvelles technologies. Notre portefeuille comprend des dizaines de projets.
                    </p>

                    {/* STATS */}
                    <div className="flex gap-14 mb-10">
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-[#FBBF24]">8k+</p>
                            <p className="text-gray-700 mt-1">Projects Completed</p>
                        </div>

                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-[#FBBF24]">7k+</p>
                            <p className="text-gray-700 mt-1">Satisfied Clients</p>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <Button className="px-6 rounded-full uppercase h-11">
                        Connaitre plus sur nous
                    </Button>
                    </section>
            </div>
        </>
    )
}