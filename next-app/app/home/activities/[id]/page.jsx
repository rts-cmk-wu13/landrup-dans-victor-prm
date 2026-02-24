import { fetchFromAPI } from "@/app/_lib/dal";
import { formattedMaxAge } from "@/app/_utils/helpers";
import { capitalizeFirstLetter } from "@/app/_utils/helpers";
import { formattedClassTime, formattedClassAge } from "@/app/_utils/helpers";

import DetailsHero from "@/app/_components/views/home/details-hero";


export default async function Page({ params }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const data = await fetchFromAPI("GET", `/api/v1/activities/${id}`)


    const activity = await data;
    const img = activity.asset.url
    const subtitle = `${formattedClassTime(activity.weekday, activity.time)} | ${formattedClassAge(activity.minAge, activity.maxAge)} år`
    //console.log(activity)

    return (

        <article className="w-full pb-20">
            <DetailsHero
                img={img}
                activity={activity}
            />
            <div className="text-dance-e9 flex flex-col gap-2 px-5 pt-4 pb-20">
                <hgroup className="font-ubuntu">
                    <h2 className="text-2xl">{activity.name}</h2>
                    <h3 className="text-dance-lte">{subtitle}</h3>
                </hgroup>

                <p className="cust-body-text">{activity.description}</p>
            </div>

        </article>
    )
}