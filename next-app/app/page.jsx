import LandingHero from "./_components/landing-page/lp-hero";
import LandingFooter from "./_components/landing-page/lp-footer";

import LandingClasses from "./_components/landing-page/lp-section/lp-classes";
import LandingNewsletter from "./_components/landing-page/lp-section/lp-newsletter";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-12 mx-auto max-w-[1360]">
      <LandingHero />
      <main id="main" className="grow px-3 pb-20">
        <LandingClasses />
        <LandingNewsletter />
      </main>
      <LandingFooter />
    </div>


  );
}
