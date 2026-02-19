import LandingSection from ".."

export default function LandingNewsletter() {
    return (
        <LandingSection title="Nyhedsbrev">
            <p className="cust-body-text">Få direkte besked når vi har sæsonstart eller afholder arrangementer.</p>
            <form className="flex gap-4 h-12" action="">
                <label className="flex sr-only" htmlFor="email">Email</label>
                 <input className="cust-body-text cust-input w-full max-w-125" type="email" name="email" id="email" placeholder="Email" />
                <button className="h-full cust-container cust-button cust-shape cust-acc-gradient text-dance-reg p-2 min-w-40" type="submit">Tilmeld</button>
            </form>
        </LandingSection>
    )
}

