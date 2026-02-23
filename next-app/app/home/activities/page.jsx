import LandingSection from "@/app/_components/views/landing-page/lp-section"
import ActivityCard from "@/app/_components/activity-card";

export default async function Page() {
    const data = await fetch("http://localhost:4000/api/v1/activities")
    const activities = await data.json();

    return (
        <LandingSection title="Activities">
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-12">
                {
                    activities.map((act, _i) => {
                        const formattedMaxAge = act.maxAge > 75 ? "+" : `-${act.maxAge}`
                        const subtitle = `${act.weekday} ${act.time} | ${act.minAge}${formattedMaxAge} år`
                       

                        console.log(act.asset.url)
                        return (
                            <ActivityCard key={_i} title={act.name} subtitle={subtitle} img={act.asset.url} />
                        )
                    })
                }
            </ul>
        </LandingSection>
    )
}   