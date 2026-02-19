import LandingHero from "./_components/landing-page/lp-hero";
import LandingSection from "./_components/landing-page/lp-section";
import LandingFooter from "./_components/landing-page/lp-footer";

import ActivityCard from "./_components/activity-card";
import { danceClasses } from "./_lib/static";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-12 mx-auto max-w-[1360]">
      <LandingHero />
      <main id="main" className="grow px-3 pb-20">
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
      </main>
      <LandingFooter />
    </div>


  );
}
