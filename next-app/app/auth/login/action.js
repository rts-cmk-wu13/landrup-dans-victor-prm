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

    //Remember user if user checks checkbox, otherwise cookie will default as session cookie
    if (formData.get("remember") === "save") {
        const days = (n) => n * 24 * 60 * 60 * 1000;
        cookieStore.set("landrup-access-token", result.token, { expires: result.validUntil + days(7) });
        cookieStore.set("landrup-user-id", result.userId, { expires: result.validUntil + days(7) });
    } else {
        cookieStore.set("landrup-access-token", result.token);
        cookieStore.set("landrup-user-id", result.userId);
    }


    return redirect("/home");
}