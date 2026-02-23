"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaChevronLeft } from "react-icons/fa"
import SearchBar from "./search-bar"

export default function HomeHeader() {
    const path = usePathname();
    const atActivities = path === ("/activities")
    const atDetails = path.includes("/activities/")
    console.log(atDetails)

    return (
        <header className={`h-20 ${!atDetails ? "relative" : "absolute z-100 w-full"} `}>
            <div className="absolute w-full cust-grid-stack text-white items-center h-full px-6">
                {
                    atDetails && (
                        <Link href={"/home/activities"}>
                            <FaChevronLeft />
                        </Link>
                    )
                }

                <h1 className="justify-self-center text-2xl font-ubuntu">Page Title</h1>
                {
                    atActivities && (
                        <SearchBar />
                    )
                }

            </div>
        </header>
    )
}