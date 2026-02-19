import Image from "next/image"
import HeroBG from "@/app/_assets/img/heroimg.jpg"
import CompanyLogo from "@/app/_components/company-logo"
import { FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link"

export default function LandingHero() {
    return (
        <div className="relative overflow-clip after:absolute after:inset-0 after:bg-radial after:from-transparent after:from-80% after:to-dance-reg">
            <figure className="flex h-dvh opacity-66 max-h-200">
                <Image
                    src={HeroBG}
                    alt="Landrup Dans Logo"
                    width={1500}
                    height={1000}
                    className="object-cover"
                    priority
                />
            </figure>
            <div className="w-full flex flex-col gap-8 items-center absolute top-16 left-1/2 -translate-x-1/2">
                <CompanyLogo twclass="animate-fade-in-scale"/>
                <div className="relative">
                    <h1 className="flex flex-col items-end text-dance-e9 font-genos text-5xl font-bold italic uppercase leading-[66%]">
                        <span className="mr-6 animate-fade-in-ltr">Landrup</span>
                        <span className="animate-fade-in-ltr">Dans</span>
                    </h1>
                    <hr className="mt-2 border-3 absolute -left-[200%] border-dance-e9 w-[300%] animate-fade-in-ltr" />
                </div>
                
            </div>
            <div className="w-full flex flex-col gap-8 items-center absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
                <button className="cust-container cust-button cust-acc-gradient min-w-60 text-dance-reg p-3">Log ind her</button>
                {/* Next Link doesnt seem to work here? */}
                <a href="#main" className="px-12"><FaAngleDoubleDown className="size-8 text-dance-acc animate-bounce"/></a>
            </div>
            
        </div>

    )
}