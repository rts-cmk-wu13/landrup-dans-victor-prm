"use server"
import z from "zod";
import { postToMessages } from "@/app/_lib/dal";

//To-do: check if user is logged in, and already signed up

const contactSchema = z.object({
    name: z
        .string({ message: "Type a valid email" })
        .min(2, { message: "Skriv min. 2 karakterer" }),
    email: z
        .email({ message: "Email ikke gyldig" }),
    message: z
        .string({ message: "Type a valid message" })
        .min(2, { message: "Skriv min. 24 karakterer" }),

    //Alternativ, hvis logik skal være mere custom
    /* .refine(v => v.length > 10, {
        message: "Message not long enough",
    }), */
});



export default async function sendMessage(prevState, formData) {
    //Create values to not manually type email again all the time
    const values = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    /* console.log("🔴", values)
    console.log("🟠", prevState?.values) */

    if (
        prevState?.values?.name === values.name &&
        prevState?.values?.email === values.email &&
        prevState?.values?.message === values.message
    ) {
        return prevState;
    }

    const validate = contactSchema.safeParse(values);
    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }

    const result = await postToMessages(values)
    console.log("🟢", result)

    return result;
}