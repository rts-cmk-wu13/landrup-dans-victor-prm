import LandingSection from "@/app/_components/views/landing-page/lp-section";
import LoginForm from "./LoginForm";
import { getSession } from "@/app/_lib/dal";
import { redirect } from "next/navigation";


export default async function Page() {
    //https://medium.com/codetodeploy/how-i-handle-authentication-protected-routes-in-next-js-without-overcomplicating-it-2dcb25a4bf89
    const session = await getSession()
    console.log(session)
    if (session) {
        return redirect("/home")
    }

    return (
        <LandingSection title="Log ind">
           <LoginForm />
        </LandingSection>
    )
}