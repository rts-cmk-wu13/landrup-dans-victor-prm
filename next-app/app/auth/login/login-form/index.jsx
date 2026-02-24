"use client"

import InputField from "@/app/_components/input-field";
import logUserIn from "./action";
import { useActionState } from "react";

const initialState = {
    values: {
        username: "user3",
        password: "1234",
    },
    errors: undefined
}

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(logUserIn, initialState);
    /*  console.log(state) */

    return (
            <form className="cust-form flex-col" action={formAction} noValidate>
                <InputField type="text" name="username" label="brugernavn" defaultValue={state?.values?.username} errors={state?.errors?.username} />
                <InputField type="password" name="password" label="password" defaultValue={state?.values?.password} errors={state?.errors?.password} />
                <div className="ml-auto flex gap-5 items-center">
                    <label className="flex gap-2 cust-body-text items-center before:bg-amber-500" htmlFor="remember">
                        <span className="text-lg font-semibold leading-none">Husk mig i en uge</span>
                        <input className="size-6 cursor-pointer rounded-lg checked:bg-white inset-shadow-dance-reg/50 inset-shadow-sm" type="checkbox" name="remember" value="save" />
                    </label>
                    <button className="cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40" type="submit">Log ind</button>
                </div>
            </form>
    )
}