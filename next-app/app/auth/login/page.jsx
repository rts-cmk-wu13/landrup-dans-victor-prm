"use client"

import LandingSection from "@/app/_components/views/landing-page/lp-section";
import InputField from "@/app/_components/input-field"
import sendMessage from "@/app/_components/views/landing-page/lp-section/lp-contact/action";
import { useActionState } from "react";
import { useEffect } from "react";

import { toast } from "react-toastify";


const initialState = {
    values: {
        name: "Ursula",
        email: "urs@mail.dk",
        message: "Hvornår har I Zumba-timer igen? Det var megasjovt sidste år!"
    },
    errors: undefined
}

export default function Page() {
    const [state, formAction, isPending] = useActionState(sendMessage, initialState);
    /*  console.log(state) */

    useEffect(() => {
        if (state?.id) {
            toast.success("Tak for din besked!")
        }
    }, [state?.id]);

    return (
        <LandingSection title="Log ind">
            <p className="cust-body-text">Har du spørgsmål? Skriv til os, vi lover at vende tilbage hurtigst muligt.</p>
            <form className="cust-form flex-col" action={formAction} noValidate>
                <InputField type="text" name="name" label="navn" defaultValue={state?.values?.name} errors={state?.errors?.name} />
                <InputField type="email" name="email" label="email" defaultValue={state?.values?.email} errors={state?.errors?.email} />
                <button className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40 ml-auto" type="submit">Log ind</button>
            </form>
        </LandingSection>
    )
}