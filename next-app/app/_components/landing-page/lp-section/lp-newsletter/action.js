"use server"
import z from "zod";
import { fetchFromApi } from "@/app/_lib/dal";
import { toast } from "react-toastify";

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
    const values = {
        email: formData.get("email"),
    };


    console.log(values)

    if (
        prevState?.values?.email === values.email
    ) {
        return prevState;
    }

    const validate = newsletterSchema.safeParse(values);
    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }

    const result = await fetchFromApi("/newsletter", values);
    /* console.log("🔴", result) */

    return result;
}