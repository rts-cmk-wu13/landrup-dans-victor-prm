"use client"

import LandingSection from ".."
import InputField from "@/app/_components/input-field";
import sendMessage from "./action";
import { useActionState } from "react";
import { useEffect } from "react";
import ButtonPrimary from "@/app/_components/button-primary";
import { toast } from "react-toastify";


const initialState = {
    values: {
        name: "Ursula",
        email: "urs@mail.dk",
        message: "Hvornår har I Zumba-timer igen? Det var megasjovt sidste år!"
    },
    errors: undefined
}

export default function LandingContact() {
    const [state, formAction, isPending] = useActionState(sendMessage, initialState);
    /*  console.log(state) */

    useEffect(() => {
        if (state?.id) {
            toast.success("Tak for din besked!")
        }
    }, [state?.id]);

    return (
        <LandingSection title="Kontakt os">
            <p className="cust-body-text">Har du spørgsmål? Skriv til os, vi lover at vende tilbage hurtigst muligt.</p>
            <form className="cust-form flex-col" action={formAction} noValidate>
                <InputField type="text" name="name" label="navn" defaultValue={state?.values?.name} errors={state?.errors?.name} />
                <InputField type="email" name="email" label="email" defaultValue={state?.values?.email} errors={state?.errors?.email} />
                <InputField type="textarea" name="message" label="besked" defaultValue={state?.values?.message} errors={state?.errors?.message} />

                <ButtonPrimary
                    label={isPending ? "Vent venligst" : "Tilmeld"}
                    className={"ml-auto"}
                    disabled={isPending}
                />
            </form>
        </LandingSection>
    )
}