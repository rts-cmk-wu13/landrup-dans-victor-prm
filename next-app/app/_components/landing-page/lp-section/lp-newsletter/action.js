"use server"
import z from "zod";
import { fetchFromApi } from "@/app/_lib/dal";

//To-do: check if user is logged in, and already signed up

const newsletterSchema = z.object({
    email: z
        .email({ message: "Type a valid email" })
        .refine(v => v.length > 0, {
            message: "Email is required",
        }),
});



export default async function subscribeToNewsletter(prevState, formData) {
    //Create values to not manually type email again all the time

    console.log("HEJ", formData, prevState)

    const values = {
        email: formData.get("email"),
    };


    console.log(values)

    if (
        prevState?.values?.email === values.email
    ) {
        return prevState;
    }

    const result = newsletterSchema.safeParse(values);
    if (!result.success) {
        return {
            values,
            errors: z.flattenError(result.error).fieldErrors,
        };
    }

    const test = await fetchFromApi("/newsletter", values);
    console.log("🔴", test)

    return test;

   /*  const res = await fetch(`http://localhost:4000/api/v1${endpoint}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
    });

    console.log(res) */

    /* if (!res.ok) {
        return {
            values,
            errors: { form: ["Wrong email or password"] },
        };
    }

    const data = await res.json();
    return data; */
}