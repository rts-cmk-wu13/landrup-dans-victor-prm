import Image from "next/image"
import HeroBG from "@/app/_assets/img/heroimg.jpg"
import CompanyLogo from "@/app/_components/company-logo"
import { FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link"

export default function LandingHero() {
    return (
        <header className="relative">
            <Image
                src={HeroBG}
                alt="Landrup Dans Logo"
                width={1500}
                height={1000}
                className="absolute inset-0 object-cover opacity-20 blur-3xl h-dvh sm:max-h-160 mt-2"
                priority
            />

            <figure className="flex h-dvh sm:max-h-160 relative overflow-clip rounded-[0_0_2rem_2rem] after:absolute after:inset-0 after:bg-radial after:from-transparent after:from-80% after:to-dance-reg">
                <Image
                    src={HeroBG}
                    alt="Landrup Dans Logo"
                    width={1500}
                    height={1000}
                    className="object-cover blur-xs opacity-66"
                    priority
                />

                <div className="w-full flex flex-col gap-8 items-center absolute top-24 left-1/2 -translate-x-1/2">
                    <CompanyLogo twclass="animate-fade-in-scale" />
                    <div className="relative">
                        <h1 className="flex flex-col items-end text-dance-e9 font-genos text-5xl font-bold italic uppercase leading-[66%]">
                            <span className="mr-6 animate-fade-in-ltr">Landrup</span>
                            <span className="animate-fade-in-ltr">Dans</span>
                        </h1>
                        <hr className="mt-2 border-0 h-0.75 absolute -left-[300%] bg-dance-e9 rounded w-[400%] animate-fade-in-ltr" />
                    </div>

                </div>
            </figure>

            <div className="w-full flex flex-col gap-8 items-center absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
                <Link href="#" className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40">Log ind her</Link>
                {/* Next Link doesnt seem to work here? */}
                <a href="#main" className="px-12"><FaAngleDoubleDown className="size-8 text-dance-acc animate-bounce" /></a>
            </div>

        </header>

    )
}