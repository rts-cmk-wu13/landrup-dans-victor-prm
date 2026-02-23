"use server"
import z from "zod";
import { compareFormData } from "@/app/_utils/helpers";
import { contactSchema } from "@/app/_lib/schemas";
import { fetchFromAPI } from "@/app/_lib/dal";

export default async function sendMessage(prevState, formData) {
   
    const values = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    compareFormData(values, prevState);


    const validate = contactSchema.safeParse(values);
    
        if (!validate.success) {
            return {
                values,
                errors: z.flattenError(validate.error).fieldErrors,
            };
        }
    
    const result = fetchFromAPI("POST", "/api/v1/messages", values)
    console.log("🟢", result)

    return result;
}