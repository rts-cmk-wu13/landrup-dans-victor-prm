"use server"
import z from "zod";
import { compareFormData } from "@/app/_utils/helpers";
import { loginSchema } from "@/app/_lib/schemas";
import { fetchFromAPI } from "@/app/_lib/dal";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logUserIn(prevState, formData) {
    const cookieStore = await cookies();

    const values = {
        username: formData.get("username"),
        password: formData.get("password"),
    };

    compareFormData(values, prevState);

    const validate = loginSchema.safeParse(values);

    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }

    const result = await fetchFromAPI("POST", "/auth/token", values)
    console.log("🟢", result)

    cookieStore.set("landrup-access-token", result.token);

    return redirect("/home");
}