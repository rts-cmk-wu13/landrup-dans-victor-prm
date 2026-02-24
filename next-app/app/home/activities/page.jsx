import ActivityList from "@/app/_components/views/home/activity-list";
import { fetchFromAPI } from "@/app/_lib/dal";
import LandingSection from "@/app/_components/views/landing-page/lp-section";

export default async function Page() {
    const data = await fetchFromAPI("GET", "/api/v1/activities");
    const activities = await data;

    return (
        <LandingSection title="Aktiviteter">
            <ActivityList activities={activities} />
        </LandingSection>
    );
}