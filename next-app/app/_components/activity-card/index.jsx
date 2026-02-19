import Image from "next/image"

export default function ActivityCard({ title, subtitle, description, img }) {

    return (
        <li className="list-none font-ubuntu aspect-square w-full">
            <figure className="cust-shape overflow-clip grid *:col-start-1 *:row-start-1 size-full">
                <Image
                    src={JSON.parse(JSON.stringify(require(`../../_assets/img/${img}`)))}
                    alt="Landrup Dans Logo"
                    width={600}
                    height={600}
                    priority
                    className="object-cover size-full"
                />
                {
                    title &&
                    (<caption className="cust-shape flex flex-col gap-1 py-4 px-6 w-full self-end bg-dance-drk/75 backdrop-blur-[1px] -mb-px text-left">
                        <h2 className="text-[1.375rem] font-medium">{title}</h2>
                        {subtitle && <p className="">{subtitle}</p>}
                    </caption>)
                }
            </figure>
            {description &&
                <p className="cust-body-text ml-6 mt-2">{description}</p>
            }
        </li>
    )
}