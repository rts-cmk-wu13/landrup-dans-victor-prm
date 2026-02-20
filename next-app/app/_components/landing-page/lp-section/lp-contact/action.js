"use server"
import { postToMessages } from "@/app/_lib/dal";
import { compareFormData } from "@/app/_utils/helpers";


export default async function sendMessage(prevState, formData) {
    //Create values to not manually type email again all the time
    const values = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    compareFormData(values, prevState);

    //Data is validated in dal.js
    const result = await postToMessages(values);
    console.log("🟢", result)

    return result;
}