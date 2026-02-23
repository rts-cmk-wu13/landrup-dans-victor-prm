import Image from "next/image"
import Link from "next/link"
import { capitalizeFirstLetter } from "@/app/_utils/helpers"

export default function ActivityCard({ title, subtitle, description, img, href }) {
    return (
        <li className="list-none font-ubuntu w-full animate-fade-in-scale">
            <figure className="cust-shape relative overflow-clip w-full aspect-square flex flex-col justify-end">
                <Image
                    src={img}
                    alt={`An image of ${img}`}
                    width={600}
                    height={600}
                    unoptimized={true}
                    loading="lazy"
                    className="absolute size-full object-cover"
                />

                {
                    title && (
                        <figcaption className="justify-self-end flex-col gap-1 px-6 py-2 w-full bg-dance-reg/75 backdrop-blur-xs text-left text-shadow-md text-shadow-dance-00/30">
                            <h2 className="text-[1.375rem] font-medium">{capitalizeFirstLetter(title)}</h2>
                            {subtitle && <p className="opacity-75">{capitalizeFirstLetter(subtitle)}</p>}
                        </figcaption>
                    )
                }
                {
                    href && (
                        <Link href={href} className="size-full absolute"></Link>
                    )
                }



            </figure>
            {description &&
                <p className="cust-body-text ml-6 mt-2">{description}</p>
            }
        </li>
    )
}