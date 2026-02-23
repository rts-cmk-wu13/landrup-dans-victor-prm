import CompanyLogo from "@/app/_components/company-logo"

export default function LandingFooter() {
    return (
        <footer id="footer" className="container mx-auto flex flex-col items-center w-full text-dance-e9 gap-4 p-6 self-baseline">
            <hr  className="my-2 border-0 h-0.75 bg-dance-e9 rounded w-full" />
            <CompanyLogo />
            <p className="font-genos text-xl font-bold italic uppercase">Landrup Dans</p>
            <address className="font-redhat flex flex-col items-center gap-1 not-italic">
                <p>Pulsen 8 | 4000 Roskilde</p>
                <p>Tlf. <a href="tel:+4535404550">3540 4550</a></p>
            </address>
        </footer >
    )
}