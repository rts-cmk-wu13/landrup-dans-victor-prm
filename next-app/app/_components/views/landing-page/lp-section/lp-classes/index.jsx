import LandingSection from ".."
import ActivityCard from "@/app/_components/activity-card"
import { danceClasses } from "@/app/_lib/static"


export default function LandingClasses() {
    return (
        <LandingSection title="Vores holdtyper">
            {/* was grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-12">
                {
                    danceClasses.map((dc, _i) => {
                        return (
                            <ActivityCard key={_i} title={dc.title} description={dc.description} img={dc.img} />
                        )
                    })
                }
            </ul>
        </LandingSection>
    )
}

