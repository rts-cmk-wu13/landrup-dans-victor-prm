import Image from "next/image"

export default function ActivityCard({ title, description }) {

    return (
        <li className="list-none cust-shape font-ubuntu grid *:col-start-1 *:row-start-1 size-fit overflow-clip">
            <Image
                src="https://picsum.photos/602/602"
                alt="Landrup Dans Logo"
                width={600}
                height={600}
                priority
            />
            <hgroup className="cust-shape flex flex-col gap-1 py-4 px-6 w-full self-end bg-dance-drk/75 backdrop-blur-[1px] -mb-[1px]">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-lg">{description}</p>
            </hgroup>
        </li>
    )
}