import Image from "next/image"
import HeroBG from "@/app/_assets/img/heroimg.jpg"
import CompanyLogo from "@/app/_components/company-logo"
import Link from "next/link"

export default function LandingHero() {
    return (
        <div className="relative overflow-clip">
            <figure className="flex min-h-dvh opacity-90">
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
                <CompanyLogo />
                <div className="relative">
                    <h1 className="flex flex-col items-end text-dance-e9 font-genos text-5xl font-bold italic uppercase leading-[66%]">
                        <span className="mr-6">Landrup</span>
                        <span>Dans</span>
                    </h1>
                    <hr className="mt-2 border-3 absolute -left-[200%] border-dance-e9 w-[300%]" />
                </div>
                
            </div>
            <div className="w-full flex flex-col gap-8 items-center absolute bottom-16 left-1/2 -translate-x-1/2">
                <button className="box-dance bg-dance-e9 min-w-60 text-dance-reg p-3">Log ind her</button>
                {/* Next Link doesnt seem to work here? */}
                <a href="#main">Go</a>
            </div>
            
        </div>

    )
}