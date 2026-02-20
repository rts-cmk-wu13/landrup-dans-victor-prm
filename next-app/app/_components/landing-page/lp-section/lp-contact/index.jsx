"use client"

import LandingSection from ".."
import InputField from "@/app/_components/input-field"
import sendMessage from "./action";
import { useActionState } from "react";

const initialState = undefined;

export default function LandingContact() {
    const [state, formAction, isPending] = useActionState(sendMessage, initialState);
   /*  console.log(state) */

    return (
        <LandingSection title="Kontakt os">
            <p className="cust-body-text">Har du spørgsmål? Skriv til os, vi lover at vende tilbage hurtigst muligt.</p>
            <form className="cust-form flex-col" action="" noValidate>
                <InputField type="text" name="navn" label="navn" />
                <InputField type="email" name="email" label="email" />
                <InputField type="textarea" name="message" label="besked" />
                <button className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40 ml-auto" type="submit">Send besked</button>
            </form>
        </LandingSection>
    )
}

