import Image from "next/image"
import HeroBG from "@/app/_assets/img/heroimg.jpg"
import CompanyLogo from "@/app/_components/company-logo"
import { FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link"
import CompanyLogoFull from "../../company-logo/company-logo-full";

export default function LandingHero() {
    return (
        <header className="cust-grid-stack">
            {/*  Shadow Image */}
            <Image
                src={HeroBG}
                alt="Landrup Dans Logo"
                width={1500}
                height={1000}
                className="object-cover opacity-20 blur-3xl h-dvh sm:max-h-160 mt-2"
                priority
            />

            {/*  Background Image */}
            <figure className="
            flex h-dvh sm:max-h-160 relative overflow-clip rounded-[0_0_2rem_2rem] 
            after:absolute after:inset-0 after:bg-radial after:from-transparent after:from-80% after:to-dance-reg">
                <Image
                    src={HeroBG}
                    alt="Landrup Dans Logo"
                    width={1500}
                    height={1000}
                    className="object-cover blur-xs opacity-66"
                    priority
                />
            </figure>


            <CompanyLogoFull />

            <div className="w-full flex flex-col gap-8 items-center self-end mb-8 z-10">
                <Link href="login" className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40">Log ind her</Link>
                {/* Next Link doesnt seem to work here? */}
                <a href="#main" className="px-12"><FaAngleDoubleDown className="size-8 text-dance-acc animate-bounce" /></a>
            </div>

        </header>

    )
}