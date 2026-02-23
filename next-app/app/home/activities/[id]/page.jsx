import { fetchFromAPI } from "@/app/_lib/dal";
import Image from "next/image";
import { formattedMaxAge } from "@/app/_utils/helpers";
import { capitalizeFirstLetter } from "@/app/_utils/helpers";

export default async function Page({ params }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const data = await fetchFromAPI("GET", `/api/v1/activities/${id}`)


    const activity = await data;
    const img = activity.asset.url
    const subtitle = `${capitalizeFirstLetter(activity.weekday)} ${activity.time} | ${activity.minAge}${formattedMaxAge(activity.maxAge)} år`
    console.log(activity)


    return (

        <article className="w-full">
            <div className="cust-grid-stack">
                <Image
                    src={img}
                    alt="Landrup Dans Logo"
                    width={600}
                    height={600}
                    className="object-cover opacity-33 blur-3xl sm:max-h-160 mt-2 w-full"
                    priority
                />

                {/*  Background Image */}
                <figure className="
            flex sm:max-h-160 relative overflow-clip rounded-[0_0_2rem_2rem]">
                    <Image
                        src={img}
                        alt="Landrup Dans Logo"
                        width={600}
                        height={600}
                        className="object-cover blur-[1px] w-full"
                        priority
                    />
                </figure>
                <button className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40 w-fit z-10 justify-self-end place-self-end m-8 cust-button">Tilmeld</button>
            </div>
            <div className="text-dance-e9 flex flex-col gap-2 px-8 pt-4 pb-20">
                <hgroup className="font-ubuntu">
                    <h2 className="text-2xl">{activity.name}</h2>
                    <h3 className="text-dance-lte">{subtitle}</h3>
                </hgroup>

                <p className="cust-body-text">{activity.description}</p>
            </div>

        </article>
    )
}