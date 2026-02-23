import Image from "next/image"

export default function ActivityCard({ title, subtitle, description, img }) {
    console.log(img)

    return (
        <li className="list-none font-ubuntu w-full animate-fade-in-scale">
            <figure className="cust-shape relative overflow-clip w-full aspect-square flex flex-col justify-end">
                {/* <img src="http://localhost:4000/file-bucket/1632387200478senior.jpg" alt="" /> */}
                {  <Image
                    //src={JSON.parse(JSON.stringify(require(`../../_assets/img/${img}`)))}
                    src={img}
                    alt="Landrup Dans Logo"
                    width={600}
                    height={600}
                    unoptimized={true}
                    loading="lazy"
                    className="absolute size-full object-cover"
                />}

                <figcaption className="justify-self-end flex-col gap-1 px-6 py-2 w-full bg-dance-drk/75 backdrop-blur-xs text-left">
                    <h2 className="text-[1.375rem] font-medium">{title}</h2>
                    {subtitle && <p className="">{subtitle}</p>}
                </figcaption>

            </figure>
            {description &&
                <p className="cust-body-text ml-6 mt-2">{description}</p>
            }
        </li>
    )
}