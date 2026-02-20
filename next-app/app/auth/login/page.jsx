"use client"

import LandingSection from "@/app/_components/views/landing-page/lp-section";
import InputField from "@/app/_components/input-field"
import logUserIn from "./action";
import { useActionState } from "react";


const initialState = {
    values: {
        username: "user3",
        password: "1234",
    },
    errors: undefined
}

export default function Page() {
    const [state, formAction, isPending] = useActionState(logUserIn, initialState);
    /*  console.log(state) */

    return (
        <LandingSection title="Log ind">
            {/* <p className="cust-body-text">Velkommen tilbage!</p> */}
            <form className="cust-form flex-col" action={formAction} noValidate>
                <InputField type="text" name="username" label="brugernavn" defaultValue={state?.values?.username} errors={state?.errors?.username} />
                <InputField type="password" name="password" label="password" defaultValue={state?.values?.password} errors={state?.errors?.password} />
                <div className="ml-auto flex gap-5 items-center">
                    <label className="flex gap-2 cust-body-text font-medium items-center before:bg-amber-500" htmlFor="remember">
                        <span className="text-lg leading-none">Husk mig</span>
                        <input className="size-6 accent-dance-acc cursor-pointer" type="checkbox" name="remember" id="" />
                    </label>
                    <button className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40" type="submit">Log ind</button>
                </div>

            </form>
        </LandingSection>
    )
}