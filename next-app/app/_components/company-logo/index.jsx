import Image from "next/image"
import LogoSVG from "@/app/_assets/svg/landrup_logo.svg"

export default function CompanyLogo({className}) {
    return (
        <figure className="size-fit">
            <Image
                src={LogoSVG}
                alt="Landrup Dans Logo"
                width={64}
                height={64}
                priority
                className={`${className}`}
            />
        </figure>
    )
}