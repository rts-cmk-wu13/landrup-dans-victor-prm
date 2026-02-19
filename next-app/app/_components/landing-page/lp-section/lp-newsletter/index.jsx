import LandingSection from ".."

export default function LandingNewsletter() {
    return (
        <LandingSection title="Nyhedsbrev">
            <p className="cust-body-text">Få direkte besked når vi har sæsonstart eller afholder arrangementer.</p>
            <form className="flex flex-col gap-4 max-w-125" action="">
                <label className="flex sr-only" htmlFor="navn">Navn</label>
                <input className="cust-body-text cust-input w-full " type="text" name="navn" id="navn" placeholder="Navn" />

                <button className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40 ml-auto" type="submit">Tilmeld</button>
            </form>
        </LandingSection>
    )
}
