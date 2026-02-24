"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaChevronLeft } from "react-icons/fa"
import SearchBar from "./search-bar"
import { setPageTitle } from "@/app/_utils/helpers-client"

export default function HomeHeader() {
    const path = usePathname();
    const atActivities = path === ("/home/activities")
    const atDetails = path.includes("/home/activities/")

    return (
        <header className={`h-20 ${!atDetails ? "relative" : "absolute z-100 w-full"} `}>
            <div className="absolute w-full cust-grid-stack text-white items-center h-full px-6">
                {
                    atDetails && (
                        <Link className="rounded-4xl bg-dance-drk/50 backdrop-blur-2xl size-fit p-2" href={"/home/activities"}>
                            <FaChevronLeft />
                        </Link>
                    )
                }

                <h1 className="justify-self-center text-2xl font-ubuntu text-shadow-md text-shadow-dance-00/50">{setPageTitle()}</h1>
                {
                    atActivities && (
                        <SearchBar />
                    )
                }

            </div>
        </header>
    )
}