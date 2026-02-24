import { FaUser, FaUserAltSlash } from "react-icons/fa"
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import Link from "next/link"

const ListItem = ({ name, age }) => (
    <li className="flex gap-2 justify-between items-center px-3">
        <span className="flex gap-2 items-center">
            <FaUser />
            <p>{name}</p>
        </span>

        <p>{age} år</p>
    </li>
)



export default function ClassCard({ id, title, subtitle, participants, maxCapacity, instructor = false }) {
    const [detailOpen, setDetailOpen] = useState(false);

    const handleDetails = () => {
        setDetailOpen(!detailOpen)
    }

    return (

        <li className="bg-dance-ff/80 text-dance-reg p-4 rounded-xl font-redhat w-full">
            <h3 className="text-2xl font-ubuntu font-medium">{title}</h3>
            <p>{subtitle}</p>

            {instructor ? (
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <p>Max deltagere: <span className="font-semibold text-dance-00">{maxCapacity}</span></p>
                        <p>Tilmeldte: <span className="font-semibold text-dance-00">{participants.length || 0}</span></p>
                    </div>
                    <details className="relative">
                        <summary className="list-none" onClick={handleDetails}>

                            <h4 className="font-ubuntu py-3 px-6 bg-dance-reg w-fit rounded-2xl text-dance-e9 cursor-pointer inline-flex gap-2 items-center">
                                Deltagerliste
                                <FaChevronDown className={`transition-transform duration-300 ${detailOpen && "rotate-180"}`} />
                            </h4>
                        </summary>
                        <ul className="absolute w-full bg-dance-ff/50 backdrop-blur-2xl py-3 rounded-2xl mt-2">
                            {
                                participants.length ? (
                                    <ListItem name="Marie Kjeldsen" age="17" />
                                ) : (
                                    <li className="flex gap-2 items-center px-3"><FaUserAltSlash /> Der er ingen tilmeldte</li>
                                )
                            }
                        </ul>
                    </details>
                </div>

            ) : (
                <Link href={`/home/activities/${id}`} className="mt-4 font-ubuntu py-3 px-6 bg-dance-reg w-fit rounded-2xl text-dance-e9 cursor-pointer inline-flex gap-2 items-center">Se hold</Link>
            )}
   
        </li >
    )
}