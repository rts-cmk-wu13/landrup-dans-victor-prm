import LandingSection from ".."
import InputField from "@/app/_components/input-field"

export default function LandingNewsletter() {
    return (
        <LandingSection title="Nyhedsbrev">
            <p className="cust-body-text">Få direkte besked når vi har sæsonstart eller afholder arrangementer.</p>
            <form className="flex flex-col gap-5 max-w-125" action="">
                <InputField type="email" name="email" label="email" />
                <button className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40 ml-auto" type="submit">Send besked</button>
            </form>
        </LandingSection>
    )
}
