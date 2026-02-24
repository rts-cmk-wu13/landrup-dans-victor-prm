"use client"
import { usePathname } from "next/navigation"
import { footerLinks } from "@/app/_lib/static"
import Link from "next/link"

export default function HomeFooter() {
    const pathname = usePathname()

    return (
        <footer className="bg-dance-e9/90 backdrop-blur-lg text-dance-6f py-2 rounded-[1rem_1rem_0_0] fixed w-full bottom-0 left-1/2 -translate-x-1/2 max-w-[1360]">
            <nav className="flex justify-center">
                <ul className="flex justify-around w-full max-w-120 gap-4">
                    {footerLinks.map(link => {
                        const Icon = link.icon;
                        const current = pathname === link.href;
                        //console.log(current, link.href, pathname)

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`flex flex-col w-20 items-center pt-1 ${current && "text-dance-00"}`}
                                >
                                    <Icon className="size-5" />
                                    {link.title}
                                </Link>
                            </li>

                        )
                    })}
                </ul>
            </nav>
        </footer>
    )
}
