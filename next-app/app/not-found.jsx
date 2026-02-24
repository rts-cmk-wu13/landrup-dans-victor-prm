import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export default function Custom404() {
    return (
        <div className="fixed inset-0 flex items-center justify-center font-redhat">
            <hgroup className="text-dance-e9">
                <h1 className="text-7xl font-ubuntu">404</h1>
                <p>Siden findes ikke!</p>

                <Link className="mt-4 text-dance-acc cursor-pointer inline-flex gap-2 items-center hover:opacity-70" href={"/home/activities"}>Gå til forsiden <FaArrowRight /></Link>
            </hgroup>
        </div>
    )
}