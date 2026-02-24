"use client"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export default function Error() {
    return (
        <div className="fixed inset-0 flex items-center justify-center font-redhat">
            <hgroup className="text-dance-e9">
                <h1 className="text-7xl font-ubuntu">Av!</h1>
                <p>Noget gik galt</p>

                <Link className="mt-4 text-dance-acc cursor-pointer inline-flex gap-2 items-center hover:opacity-70" href={"/home/profile"}>Prøv igen <FaArrowRight /></Link>
            </hgroup>
        </div>
    )
}