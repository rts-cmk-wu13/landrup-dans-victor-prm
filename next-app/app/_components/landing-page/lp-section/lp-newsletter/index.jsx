"use client"

import LandingSection from ".."
import InputField from "@/app/_components/input-field"

import { useActionState, useEffect } from "react"
import subscribeToNewsletter from "./action"
import { toast } from "react-toastify";

const initialState = {
    values: {
        email: "urs@mail.dk",
    },
    errors: undefined
}


export default function LandingNewsletter() {
    const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);
    /* console.log("Errors", state.errors) */

    useEffect(() => {
        if (state?.id) {
            toast.success("Tak for din tilmelding")
        }
    }, [state?.id]);

    return (
        <LandingSection title="Nyhedsbrev">
            <p className="cust-body-text">Få direkte besked når vi har sæsonstart eller afholder arrangementer.</p>
            <form className="cust-form flex-col" action={formAction} noValidate>
                <InputField type="email" name="email" label="email" defaultValue={state?.values?.email} errors={state?.errors?.email} />
                <button className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40 ml-auto"
                    type="submit" disabled={isPending}>
                    {isPending ? "Vent venligst" : "Tilmeld"}
                </button>
            </form>
        </LandingSection>
    )
}
