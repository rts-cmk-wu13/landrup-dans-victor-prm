import LandingHero from "./_components/landing-page/lp-hero";
import LandingFooter from "./_components/landing-page/lp-footer";

import LandingClasses from "./_components/landing-page/lp-section/lp-classes";
import LandingNewsletter from "./_components/landing-page/lp-section/lp-newsletter";
import LandingTestimonials from "./_components/landing-page/lp-section/lp-testimonials";
import LandingContact from "./_components/landing-page/lp-section/lp-contact";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-12 mx-auto max-w-[1360]">
      <LandingHero />
      <main id="main" className="grow px-3">
        <LandingClasses />
        <LandingNewsletter />
        <LandingTestimonials />
        <LandingContact />
      </main>
      <LandingFooter />
    </div>


  );
}
