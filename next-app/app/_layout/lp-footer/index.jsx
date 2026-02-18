import CompanyLogo from "@/app/_components/company-logo";

export default function LandingFooter() {
    return (
        <footer className="flex flex-col items-center w-full text-dance-e9 gap-4 bg-dance-drk p-6">
            <CompanyLogo />
            <p className="font-genos text-xl font-bold">Landrup Dans</p>
            <address className="font-redhat flex flex-col items-center gap-1 not-italic">
                <p>Pulsen 8 | 4000 Roskilde</p>
                <p>Tlf. <a href="tel:+4535404550">3540 4550</a></p>
            </address>
        </footer >
    )
}