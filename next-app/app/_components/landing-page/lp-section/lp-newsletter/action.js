"use server"
import z from "zod";
import { postToNewsletter } from "@/app/_lib/dal";
import { compareFormData } from "@/app/_utils/helpers";

//To-do: check if user is logged in, and already signed up

const newsletterSchema = z.object({
    email: z.email({ message: "Email ikke gyldig" }),
});

export default async function subscribeToNewsletter(prevState, formData) {
    //Create values to not manually type email again all the time
    const values = {
        email: formData.get("email"),
    };

    compareFormData(values, prevState)

    const validate = newsletterSchema.safeParse(values);
    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }

    const result = await postToNewsletter(values);
    console.log("🟢", result)

    return result;
}