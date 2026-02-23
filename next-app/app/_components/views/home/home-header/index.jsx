import Link from "next/link"
import { FaChevronLeft } from "react-icons/fa"
import SearchBar from "./search-bar"

export default function HomeHeader() {
    return (
        <header className="h-20 relative ">
            <div className="absolute w-full cust-grid-stack text-white items-center h-full px-6">
                <Link href={"/home"}>
                    <FaChevronLeft />
                </Link>
                <h1 className="justify-self-center text-2xl font-ubuntu">Page Title</h1>
                <SearchBar/>
            </div>
        </header>
    )
}