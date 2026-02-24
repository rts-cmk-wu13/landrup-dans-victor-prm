import LandingSection from "../_components/views/landing-page/lp-section"
import Link from "next/link"
import { getSession } from "../_lib/dal"
import { redirect } from "next/navigation"

export default async function Page() {
    const session = await getSession()
    console.log(session)
    if (session) {
        redirect("/home")
    }

    return (
        <LandingSection title="Ups!">
            <p className="cust-body-text">Du prøver at tilgå en side, hvor man skal være logget ind.</p>
            <div className="flex gap-20 justify-between mt-8">
                <Link className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40" href={"/auth/login"}>Log ind</Link>
                {/* <Link className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40" href={"/auth/signup"}>Opret Bruger</Link> */}
            </div>
        </LandingSection>
    )
}