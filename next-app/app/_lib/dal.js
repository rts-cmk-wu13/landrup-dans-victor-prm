"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import z from "zod";

import { newsletterSchema } from "./schemas";
import { contactSchema } from "./schemas";

/* --- GENERAL FETCH --- */
export async function fetchFromAPI(fMethod, endpoint, values, secured = false) {
    if (secured) {
        //Second line of defense (apart from proxy)
        const cookieStore = await cookies();
        //Guard clause
        if (!cookieStore.has("accessToken")) return redirect("/no-access");
    }


    const response = await fetch(`http://localhost:4000/api/v1${endpoint}`, {
        method: fMethod,
        headers: { "content-type": "application/json" },
        ...(fMethod === "POST" && { body: JSON.stringify(values) })
    });

    if (!response.ok) {
        throw new Error("🤦‍♂️ Something went wrong on our end!")
        /* return {
            values,
            errors: { form: ["Wrong email or password"] },
        }; */
    }
    const data = await response.json();

    console.log(data)

    return data;
}

/* --- POST: NEWSLETTER + VALIDATION --- */
export async function postToNewsletter(values) {
    const validate = newsletterSchema.safeParse(values);

    console.log("😬", validate.success)
    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }

    return await fetchFromAPI("POST", "/newsletter", values)
}

/* --- POST: MESSAGES + VALIDATION --- */
export async function postToMessages(values) {
    const validate = contactSchema.safeParse(values);

    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }

    return await fetchFromAPI("POST", "/messages", values)
}