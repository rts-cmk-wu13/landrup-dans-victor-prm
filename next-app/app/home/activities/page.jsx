import LandingSection from "@/app/_components/views/landing-page/lp-section"
import ActivityCard from "@/app/_components/activity-card";
import { fetchFromAPI } from "@/app/_lib/dal";
import { formattedMaxAge } from "@/app/_utils/helpers";

export default async function Page() {
    const data = await fetchFromAPI("GET", "/api/v1/activities")
    const activities = await data;

    return (
        <LandingSection title="Activities">
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-12">
                {
                    activities.map((act, _i) => {
                        const subtitle = `${act.weekday} ${act.time} | ${act.minAge}${formattedMaxAge(act.maxAge)} år`
                        return (
                            <ActivityCard key={_i} title={act.name} subtitle={subtitle} img={act.asset.url} href={`/home/activities/${act.id}`} />
                        )
                    })
                }
            </ul>
        </LandingSection>
    )
}   