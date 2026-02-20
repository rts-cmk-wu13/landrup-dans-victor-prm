"use server"
import { postToNewsletter } from "@/app/_lib/dal";
import { compareFormData } from "@/app/_utils/helpers";

//To-do: check if user is logged in, and already signed up

export default async function subscribeToNewsletter(prevState, formData) {
    //Create values to not manually type email again all the time
    const values = {
        email: formData.get("email"),
    };

    compareFormData(values, prevState)

    //Data is validated in dal.js
    const result = await postToNewsletter(values);
    console.log("🟢", result)

    return result;
}