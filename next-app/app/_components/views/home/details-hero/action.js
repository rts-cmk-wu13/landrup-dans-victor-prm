"use server"
import z from "zod";
import { addRemoveUserSchema } from "@/app/_lib/schemas";
import { fetchFromAPI } from "@/app/_lib/dal";
import { revalidatePath } from "next/cache";

export default async function addRemoveUser(prevState, formData) {
    const values = {
        activityId: formData.get("activityId"),
        userId: formData.get("userId"),
        isEnrolled: formData.get("isEnrolled") === "true",
    };

    const validate = addRemoveUserSchema.safeParse(values);
    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }

    const method = values.isEnrolled ? "DELETE" : "POST";

    const result = await fetchFromAPI(
        method,
        `/api/v1/users/${values.userId}/activities/${values.activityId}`,
        null,
        true
    );

    // Revalidate paths
    revalidatePath("/home/activities");
    revalidatePath(`/home/activities/${values.activityId}`);
    revalidatePath("/home/profile");

    return {
        success: true,
        object: result
    }

}