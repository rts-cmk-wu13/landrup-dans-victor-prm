import LandingSection from ".."

export default function LandingContact() {
    return (
        <LandingSection title="Kontakt os">
            <p className="cust-body-text">Har du spørgsmål? Skriv til os, vi lover at vende tilbage hurtigst muligt.</p>
            <form className="flex flex-col gap-4 max-w-125" action="">
                <label className="flex sr-only" htmlFor="navn">Navn</label>
                <input className="cust-body-text cust-input w-full " type="text" name="navn" id="navn" placeholder="Navn" />
                <label className="flex sr-only" htmlFor="email">Email</label>
                <input className="cust-body-text cust-input w-full" type="email" name="email" id="email" placeholder="Email" />
                <label className="flex sr-only" htmlFor="message">Email</label>

                <textarea
                    name="message"
                    id="message"
                    className="cust-body-text cust-input w-full h-60" 
                ></textarea>

                <button className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40 ml-auto" type="submit">Send besked</button>
            </form>
        </LandingSection>
    )
}

